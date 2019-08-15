
const patientsData = require('./data/patients-data.js')

const createPatient = (knex, patient) => {
  return knex('patients').insert({
    name: patient.name,
    phone: patient.phone,
    gender: patient.gender
  })
};

exports.seed = (knex) => {
  return knex('patients').del()
    .then(() => {
      let patientPromises = [];

      patientsData.forEach(patient => {
        patientPromises.push(createPatient(knex, patient));
      });

      return Promise.all(patientPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
}

