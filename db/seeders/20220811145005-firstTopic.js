module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Topics', [
      {
        topicName: 'ЭЛЬБРУС',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topicName: 'эЛьБрУс',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topicName: 'ELBRUS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics');
  },
};
