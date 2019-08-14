const createDoctor = (knex, doctor) => {
  return knex('doctors').insert({
    name: doctor.name,
    specialization: doctor.specialization,
    phone: doctor.phone,
    patients: doctor.patients
  }, 'id')
  .then((doctorId, index)=> {
    let patientsPromisses = [];

    doctor.patients.forEach(patient => {
      patientsPromisses.push(
        createPatient(knex, {
          patient: patient,
          doctor_id: doctorId[index]
        })
      )
    });

    return Promise.all(patientsPromisses);
  })
};

const createPatient = (knex, patient) => {
  return knex('patients').insert(patient);
}

exports.seed = (knex) => {
  return knex('patients').del()
    .then(() => knex('doctors').del())
    .then(() => {
      let doctorPromises = [];

      doctorsData.forEach(doctor => {
        doctorPromises.push(createDoctor(knex, doctor));
      });

      return Promise.all(doctorPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
}