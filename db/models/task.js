const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate({ Topic }) {
      Task.Topics = Task.belongsTo(Topic, { foreignKey: 'topicId' });
    }
  }
  Task.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    question: {
      type: DataTypes.TEXT,
    },
    answer1: {
      type: DataTypes.TEXT,
    },
    answer2: {
      type: DataTypes.TEXT,
    },
    answer3: {
      type: DataTypes.TEXT,
    },
    trueAnswer: {
      type: DataTypes.TEXT,
    },
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Topics',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'Tasks',
  });
  return Task;
};
