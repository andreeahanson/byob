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
app.get('/clinique/doctors', (request, response) => {
  database('doctors').select()
    .then((doctors) => {
      doctors.forEach(doctor => {
       delete doctor.patients
      })
      response.status(200).json(doctors);
    })
    .catch((error) => {
      response.status(500).json({ error });
    })
})

//GET ONE DOCTOR ('/clinique/doctors/:id')
app.get('/clinique/doctors/:id', (request, response) => {
  database('doctors').where('id', request.params.id).select()
  .then(doctor => {
    if(doctor.length) {
      database('patients').where('doctor_id', request.params.id).select()
      .then(patients => {
        doctor[0].patients = patients
        response.status(200).json(doctor[0]);
      })
    } else {
      response.status(404).json({
        error: `Could not find doctor with id ${request.params.id}`
      })
    }
  })
  .catch(error => {
    response.status(500).json({ error });
  })
})

//GET ALL PATIENTS OF A CERTAIN DOCTOR???('/clinique/doctors/:id/patients')
app.get('/clinique/doctors/:id/patients', (request, response) => {
  database('patients').where('doctor_id', request.params.id).select()
    .then(patients => {
      if(patients.length) {
        response.status(200).json(patients)
      } else {
        response.status(404).json({ error: 'Couldn\'t find patients for this doctor' })
      }
    }) 
    .catch((error) => {
      response.status(500).json({ error })
    })
})



//get certain doctor
//then, get all patients
//then, get patients with doctors id

//GET ONE CERTAIN PATIENT OF A CERTAIN DOCTOR('/clinique/doctors/:id/patients/:id)
app.get('/clinique/doctors/:id/patients/:id', (request, response) => {
  database('patients').where('id', request.params.id).select()
    .then(patient => {
      if(patient.length) {
        response.status(200).json(patient)
      } else {
        response.status(404).json({ 
          error: `Could not find patient with id ${request.params.id}`
        })
      }
    })
    .catch((error) => {
      response.status(500).json({ error })
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