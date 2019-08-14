
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('doctors', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('specialization');
      table.string('phone');

      table.timestamps(true, true)
    }),

    knex.schema.createTable('patients', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('phone');
      table.string('gender');
      table.array('allergies');
      table.integer('doctor_id').unsigned()
      table.foreign('doctor_id')
        .references('doctor_id');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('patients'),
    knex.schema.dropTable('doctors')
  ])
};
