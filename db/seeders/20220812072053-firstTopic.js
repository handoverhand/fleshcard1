module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Topics', [
      {
        topicName: 'Эльбрус',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topicName: 'IT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topicName: 'Футбол',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics');
  },
};
