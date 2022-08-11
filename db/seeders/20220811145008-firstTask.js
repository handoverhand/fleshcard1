module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Tasks', [
      {
        question: 'Первая буква алфавита',
        answer: 'а',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Вторая буква алфавита',
        answer: 'б',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Поледняя буква алфавита',
        answer: 'я',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  11234
  async down(queryInterface) {
    await queryInterface.bulkDelete('Tasks');
  },
};
