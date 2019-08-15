const express = require('express');
const doctorsData = require('./data/doctors-data.js')
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = "Clinique";

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

app.locals.doctors = [];
app.locals.doctors = doctorsData;

app.get('/clinique/doctors', (request, response) => {
  const doctors = app.locals.doctors;

  return response.json({ doctors })
})

//GET ALL DOCTORS ('/clinique/doctors')
//GET ALL PATIENTS OF A CERTAIN DOCTOR???('/clinique/doctors/1/patients')

//POST PATIENT('/clinique/doctors/2/patients')
//PUT PATIENT ('/clinique/doctors/2/patients/1004')
//DELETE PATIENT ('/clinique/doctors/2/patiens/1004')