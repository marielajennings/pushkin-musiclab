module.exports = db => {
  const User = db.Model.extend({
    tableName: 'fc_users',
    idAttribute: 'id',
    hasTimestamps: true,
    responses: function() {
      return this.hasMany('Response', 'user_id', 'id');
    }
  });
  return db.model('User', User);
};
