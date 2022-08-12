module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Tasks', [
      {
        question: 'Кто поставил рекорд по спасибкам среди текущих студентов?',
        answer1: 'Александр Симанчев',
        answer2: 'Юра',
        answer3: 'Карен',
        trueAnswer: 'Сергей Семенов',
        topicId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Запах чего исчез в кампусе после выпуска Тигров?',
        answer1: 'Буженины',
        answer2: 'Сарделек',
        answer3: 'Сосисок',
        trueAnswer: 'Колбасы',
        topicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Кто самый главный душнила в нашем проекте?',
        answer1: 'Никита',
        answer2: 'Серега',
        answer3: 'Кристина',
        trueAnswer: 'Вадим',
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
