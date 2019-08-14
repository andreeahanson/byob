
exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('doctors', (table) => table.dropColumn('patients'))
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table('doctors', (table) => table.string('patients'))
  ])
};

