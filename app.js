const questionTitle = document.querySelectorAll('.question-title')
const question = document.querySelectorAll('.question');

questionTitle.forEach( (title, index) => {
    title.addEventListener('click', () => {
      const activeQuestion = document.querySelector('.question-active');
      
      question.forEach((q) => {
        q.classList.remove('question-active');
      })
      
        if (question[index] === activeQuestion) {
            question[index].classList.remove('question-active');
        } else {
            question[index].classList.add('question-active');
        }
    })
});