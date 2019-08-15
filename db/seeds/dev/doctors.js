const doctorsData = require('../../../data/doctor-data.js')

const createDoctor = (knex, doctor) => {
  return knex('doctors').insert({
    name: doctor.name,
    specialization: doctor.specialization,
    phone: doctor.phone
  }, 'id')
  .then(doctorId => {
    let patientPromises = [];

    doctor.patients.forEach(patient => {
      patientPromises.push(
        createPatient(knex, {
          name: patient.name,
          phone: patient.phone,
          gender: patient.gender,
          doctor_id: doctorId[0]
        })
      )
    });

    return Promise.all(patientPromises);
  })
};

const createPatient = (knex, patient) => {
  return knex('patients').insert(patient);
};

exports.seed = (knex) => {
  return knex('patients').del() // delete patients first
    .then(() => knex('doctors').del()) // delete all doctors
    .then(() => {
      let doctorPromises = [];

      doctorsData.forEach(doctor => {
        doctorPromises.push(createDoctor(knex, doctor));
      });

      return Promise.all(doctorPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};






// const createDoctor = (knex, doctor) => {
//   return knex('doctors').insert({
//     name: doctor.name,
//     specialization: doctor.specialization,
//     phone: doctor.phone
//   })
// };

// exports.seed = (knex) => {
//   return knex('doctors').del()
//     .then(() => {
//       let doctorPromises = [];

//       doctorsData.forEach(doctor => {
//         doctorPromises.push(createDoctor(knex, doctor));
//       });

//       return Promise.all(doctorPromises);
//     })
//     .catch(error => console.log(`Error seeding data: ${error}`))
// }
