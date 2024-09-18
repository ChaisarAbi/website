let currentSlideTestimoni = 0;
let currentSlideGaleri = 0;
const testimoniSlides = document.querySelectorAll('.testimoni-card');
const galeriSlides = document.querySelectorAll('.galeri-slider img');
let currentQuiz = 1;
let totalScore = 0;

function showNextSlide(slides, currentIndex) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
    });
}

setInterval(() => {
    currentSlideTestimoni = (currentSlideTestimoni + 1) % testimoniSlides.length;
    showNextSlide(testimoniSlides, currentSlideTestimoni);
}, 5000);

setInterval(() => {
    currentSlideGaleri = (currentSlideGaleri + 1) % galeriSlides.length;
    showNextSlide(galeriSlides, currentSlideGaleri);
}, 4000);

function checkAnswer(quizNumber, answer) {
    const correctAnswers = {
        1: 'blue',
        2: 'red',
        3: 'yellow',
        4: 'green',
        5: 'blue'
    };

    if (answer === correctAnswers[quizNumber]) {
        totalScore++;
    }

    document.getElementById(`quiz-${quizNumber}`).style.display = 'none';

    if (quizNumber < 5) {
        document.getElementById(`quiz-${quizNumber + 1}`).style.display = 'block';
    } else {
        document.getElementById('quiz-result').textContent = `Nilai kamu: ${totalScore}/5`;
    }
}
