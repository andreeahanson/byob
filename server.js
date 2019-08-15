const express = require('express');
const doctorsData = require('./data/doctors-data.js')
const patientsData = require('./data/patients-data.js')
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

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
    if(doctors.length) {
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



//POST PATIENT('/clinique/doctors/:id/patients')
//PUT PATIENT ('/clinique/doctors/:id/patients/1004')
//DELETE PATIENT ('/clinique/doctors/:id/patiens/1004')