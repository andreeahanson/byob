const doctorsData = require('./data/doctors-data.js')

const createDoctor = (knex, doctor) => {
  return knex('doctors').insert({
    name: doctor.name,
    specialization: doctor.specialization,
    phone: doctor.phone
  })
};

exports.seed = (knex) => {
  return knex('doctors').del()
    .then(() => {
      let doctorPromises = [];

      doctorsData.forEach(doctor => {
        doctorPromises.push(createDoctor(knex, doctor));
      });

      return Promise.all(doctorPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
}