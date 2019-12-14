module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define("todo", {
    text: { type: DataTypes.STRING },
    complete: { type: DataTypes.BOOLEAN }
    
  });
  return todo;
};
