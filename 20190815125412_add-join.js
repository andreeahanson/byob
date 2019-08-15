
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('doctors_patients', (table) => {
      table.increments('id').primary();
      table.integer('doctor_id').unsigned();
      table.foreign('doctor_id').references('doctors.id');
      table.integer('patients_id').unsigned();
      table.foreign('patients_id').references('patients.id')

      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('doctors_patients'),
  ])
};