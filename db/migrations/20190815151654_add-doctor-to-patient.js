
exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('patients', (table) => table.string('doctor'))
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table('patients', (table) => table.dropColumn('doctor'))
  ])
};
