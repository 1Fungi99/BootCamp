module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining

  var post = sequelize.define("post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len:[1,140]
      },
      defaultValue: "Personal"
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1,140]
      }
    }
  });
  return post;
};
