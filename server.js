const express = require('express');
// const doctorsData = require('./data/doctors-data.js')
// const patientsData = require('./data/patients-data.js')
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('port', process.env.PORT || 3000);
app.locals.title = "Clinique";

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

//GET ALL DOCTORS ('/clinique/doctors')
app.get('/clinique/doctors', (request, response) => {
  database('doctors').select()
    .then((doctors) => {
      response.status(200).json(doctors);
    })
    .catch((error) => {
      response.status(500).json({ error });
    })
})

//GET ONE DOCTOR ('/clinique/doctors/:id')
app.get('/clinique/doctors/:id', (request, response) => {
  database('doctors').where('id', request.params.id).select()
  .then(doctors => {
    if(doctors) {
      response.status(200).json(doctors);
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
      response.status(200).json(patients)
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
      response.status(200).json(patient)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})


//POST DOCTOR('/clinique/doctors)
app.post('/clinique/doctors', (request, response) => {
  database.insert(request.body).returning('*').into('doctors').then((data) => {
    response.send(data);
  })
})

//POST PATIENT('/clinique/doctors/:id/patients')
app.post('/clinique/doctors/:id/patients', (request, response) => {
  database.insert(request.body).returning('*').into('patients').then((data) => {
    response.send(data);
  })
})

//DELETE PATIENT ('/clinique/doctors/:id/patiens/1004')