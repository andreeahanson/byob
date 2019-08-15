const doctorsData = require('../../../data/doctors-data.js')
const patientsData = require('../../../data/patients-data.js')

const createPatient = (knex, doctor, patient) => {
  return knex('doctors').where('name', doctor).first()
  .then((doctorRecord) => {
    return knex('patients').insert({
      name: patient.name,
      phone: patient.phone,
      gender: patient.gender,
      doctor_id: doctorRecord.id
    })
  })
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
  .then(() => {
    return knex('doctors').del();
  })
  .then(() => {
    return knex('doctors').insert(doctorsData);
  })
  .then(() => {
    let patientPromises = [];
    patientsData.forEach(patient => {
      let doctor = patient.doctor
      patientPromises.push(createPatient(knex, patient, doctor))
      // console.log(createPatient(knex, patient, doctorID))
    });
    return Promise.all(patientPromises)
  })
};

