module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Tasks', [
      {
        question: 'Первая буква алфавита',
        answer1: 'а',
        answer2: 'б',
        answer3: 'в',
        trueAnswer: 'г',
        topicId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Вторая буква алфавита',
        answer1: 'а',
        answer2: 'б',
        answer3: 'в',
        trueAnswer: 'г',
        topicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Поледняя буква алфавита',
        answer1: 'а',
        answer2: 'б',
        answer3: 'в',
        trueAnswer: 'г',
        topicId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Tasks');
  },
};
