// const knex = require('knex')(require('./knex.config.js'));

exports.up = function(knex) {
  return knex.schema.createTable('ids_stimulusResponses', table => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('ids_users');
    table.json('data_string');
    table.timestamp('created_at');
    table.timestamp('updated_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ids_stimulusResponses');
};
