module.exports = db => {
  const StimulusResponse = db.Model.extend({
    tableName: 'ids_stimulusResponses',
    idAttribute: 'id',
    hasTimestamps: true,
    user: function() {
      return this.belongsTo('User', 'user_id', 'id');
    },
    
  });
  return db.model('StimulusResponse', StimulusResponse);
};
