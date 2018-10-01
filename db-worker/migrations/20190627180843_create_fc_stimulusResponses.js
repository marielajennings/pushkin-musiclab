// const knex = require('knex')(require('./knex.config.js'));

exports.up = function(knex) {
  return knex.schema.createTable('fc_stimulusResponses', table => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('fc_users');
    table.string('stimulus').references('stimulus').inTable('fc_stimuli');
    table.json('data_string');
    table.timestamp('created_at');
    table.timestamp('updated_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('fc_stimulusResponses');
};
