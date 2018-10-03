const Papa = require('babyparse');
const fs = require('fs');
const path = require('path');
const modelObj = require('../db');
const flatten = require('lodash.flatten');
const settings = require('./config')

console.log('seeding');

const stimuliSets = []

module.exports = (quizName) => {

  const data = Papa.parseFiles([`./seeds/${quizName}/stimuli.csv`], { header: true });
  const stimuli = data[0].data;
  const db = modelObj[quizName];
  const setSize = settings().setSizeNumber
  console.log(setSize)

  
  return db
    .knex(`${quizName}_stimulusResponses`)
    .del()
  .then(() => {
    return db    
    .knex(`${quizName}_stimuli`)
    .del()
  })

  .then(() => {
    // console.log(stimuli);
    for (var i = 0; i < stimuli.length/setSize; i++) { 
      stimuliSets.push(stimuli.slice((i * setSize), (i * setSize + setSize)))
    }
    console.log("Stimuli set numbers")
    console.log(stimuliSets.length);
  
  })
  .then(() => {
    return db
      .knex(`${quizName}_stimuli`)
      .insert(stimuliSets[0])
      .returning('*');
  })
  .then(() => {
    return db
      .knex(`${quizName}_stimuli`)
      .insert(stimuliSets[1])
      .returning('*');
  })
  .then(() => {
    return db
      .knex(`${quizName}_stimuli`)
      .insert(stimuliSets[2])
      .returning('*');
  })
  .then(() => {
    return db
      .knex(`${quizName}_stimuli`)
      .insert(stimuliSets[3])
      .returning('*');
  })

    .then(data => {
      // console.log(data); // eslint-disable-line no-console
    })
    .then(() => {
      return db.knex('authors').insert({
        first_name: 'Joshua',
        last_name: 'Hartshorne',
        email: 'rob@oddball.io',
        quiz_name: quizName
      })
    })
    .then(() => {
      console.log('done seeding!');
      return process.exit();
    })
    .catch(err => {
      console.log(err); // eslint-disable-line no-console
    })
};

