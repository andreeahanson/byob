const express = require('express'); //require express 
const app = express(); //create an instance of the express app
const environment = process.env.NODE_ENV || 'development'; //establish the environment
const configuration = require('./knexfile')[environment]; // require knexfile
const database = require('knex')(configuration); // require knex
const bodyParser = require('body-parser'); // require body-parser

app.use(bodyParser.json()); // getting the server to expect json format
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.set('port', process.env.PORT || 3000); // set the port to default 3000, or the one provided by heroku
app.locals.title = "Clinique"; // give a name to the local server

app.listen(app.get('port'), () => { // make the server listent on the port above
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

//GET ALL DOCTORS ('/clinique/doctors')
app.get('/clinique/doctors', (request, response) => { // request the records of all doctors from the 'clinique/doctors/' endpoint through the GET method
  database('doctors').select() // select all the doctors in the doctors table from the database
    .then((doctors) => {
      if(doctors) { // if there are records of doctors,
        doctors.forEach(doctor => {
         delete doctor.patients // delete the key "patients" from the returned response for each doctor
        })
        response.status(200).json(doctors); // and send http response 200 (status ok) and the doctors records in json format
      } else {
        response.status(404).json('No doctors found.') // otherwise, send back an http 404 response, saying that there were no doctors found
      }
    })
    .catch((error) => {
      response.status(500).json({ error }); // if there is any error that occurs in the promises above, send a 500 response as a server error
    })
})

//GET ONE DOCTOR ('/clinique/doctors/:id')
app.get('/clinique/doctors/:id', (request, response) => {// request the record of a specific doctor with a specific id from the 'clinique/doctors/:id' endpoint through the GET method
  database('doctors').where('id', request.params.id).select() // search the database for the doctor in the doctors table that has the id matching with the one in the request params, and select them
  .then(doctor => {
    if(doctor.length) { // if a doctor was found
      database('patients').where('doctor_id', request.params.id).select() // search the db for the patients whose key of "doctor_id" also matches the id in the request params, and select them
      .then(patients => {
        doctor[0].patients = patients // add a new key to the doctor object and assign it the value of the found array of patients
        response.status(200).json(doctor[0]); // send an http 200 response and the doctor record in json format
      })
    } else {
      response.status(404).json({ // if a doctor was not found, send a 404 'not found' error in json format
        error: `Could not find doctor with id ${request.params.id}`
      })
    }
  })
  .catch(error => {
    response.status(500).json({ error }); // if there is any error that occurs in the promises above, send a 500 response as a server error
  })
})

//GET ALL PATIENTS OF A CERTAIN DOCTOR???('/clinique/doctors/:id/patients')
app.get('/clinique/doctors/:id/patients', (request, response) => {// request the record of the patioents of a specific doctor with a specific id from the 'clinique/doctors/:id/patients' endpoint through the GET method
  database('patients').where('doctor_id', request.params.id).select() // from the patients table in the data base, select the patients for which the doctor_id value matches the id in the request params
    .then(patients => {
      if(patients.length) { // then, if patients are found, 
        response.status(200).json(patients) // send a 200 ok resonse back, and the array of patients in json format
      } else {
        response.status(404).json({ error: 'Couldn\'t find patients for this doctor' }) // otherwise, display a 404 not found message
      }
    }) 
    .catch((error) => {
      response.status(500).json({ error }) // if there is any error that occurs in the promises above, send a 500 response as a server error
    })
})



//get certain doctor
//then, get all patients
//then, get patients with doctors id

//GET ONE CERTAIN PATIENT OF A CERTAIN DOCTOR('/clinique/doctors/:id/patients/:id)
app.get('/clinique/doctors/:id/patients/:id', (request, response) => {// request the record of a certain patioent of a specific doctor with a specific id from the 'clinique/doctors/:id/patients/:id' endpoint through the GET method
  database('patients').where('id', request.params.id).select() // select from the patients table in the database the patient for which the id value matches the one of the id in the request params
    .then(patient => {
      if(patient.length) { // if a patient was found,
        response.status(200).json(patient) // send a 200 response and the found patient in json format
      } else {
        response.status(404).json({ // otherwise, send a 404 not found response, with an error message in json format
          error: `Could not find patient with id ${request.params.id}` 
        })
      }
    })
    .catch((error) => {
      response.status(500).json({ error })// if there is any error that occurs in the promises above, send a 500 response as a server error
    })
})


//POST DOCTOR('/clinique/doctors)
app.post('/clinique/doctors', (request, response) => {
  let data = request.body
  for(let requiredParameter of ['name', 'phone', 'specialization']) {
    if(!data[requiredParameter]) {
      return response.status(422).json({
        error: `Expected format: { name: <String>, specialization: <String>, phone: <String> }. You're missing a ${requiredParameter} property.`
      })
    }
  }
  database.insert(request.body).returning('*').into('doctors')
  .then((data) => {
    response.status(201).json(data);
  })
  .catch((error) => {
    response.status(500).json({ error })
  })
})

//POST PATIENT('/clinique/doctors/:id/patients')
app.post('/clinique/doctors/:id/patients', (request, response) => {
  let data = request.body;
  for(let requiredParameter of ['name', 'phone', 'gender', 'doctor_id']) {
    if(!data[requiredParameter]) {
      return response.status(422).json({
        error: `Expected format: { name: <String>, phone: <String>, gender: <String>, doctor_id: <Integer> }. You're missing a ${requiredParameter} property.`
      })
    }
  }
  database.insert(request.body).returning('*').into('patients')
  .then((data) => {
    response.status(201).json(data);
  })
  .catch((error) => {
    response.status(500).json({ error })
  })
})

//DELETE PATIENT ('/clinique/doctors/:id/patiens/1004')
app.delete('/clinique/doctors/:id/patients/:id', (request, response) => {
  const { id } = request.params
  database('patients').where('id', id).del()
    .then((patient) => {
      if(patient) {
        response.status(200).json({ success: `You have successfully deleted patient with the id of ${id}`});
      } else {
        response.status(404).json({
          error: `Could not find patient with the id of ${id}`
        })
      }
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
});

//DELETE DOCTOR('/clinique/doctors/:id')
app.delete('/clinique/doctors/:id', (request, response) => {
  const { id } = request.params
  const deleteDocsAndPatients = [ database('patients').where('doctor_id', id).del(), database('doctors').where('id', id).del()]
  Promise.all(deleteDocsAndPatients)
    .then(() => {
      response.json({ success: `You have successfully deleted doctor with the id of ${id}`});
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
});