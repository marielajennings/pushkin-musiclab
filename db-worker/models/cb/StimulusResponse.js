module.exports = db => {
  const StimulusResponse = db.Model.extend({
    tableName: 'cb_stimulusResponses',
    idAttribute: 'id',
    hasTimestamps: true,
    user: function() {
      return this.belongsTo('User', 'user_id', 'id');
    },
    
  });
  return db.model('StimulusResponse', StimulusResponse);
};
