const steps = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress-bar');

let currentStep = 1 ;

steps.forEach((step,index) => {
    step.addEventListener('click', () => {
        currentStep = index + 1 ;
        updateProgress()
    });    
});

function updateProgress() {
    steps.forEach((step, index) => {
        if(index < currentStep ){
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;
progressBar.style.width = progressPercent + '%';

progressBar.classList.add('active');
setTimeout(() => {
    progressBar.classList.remove('active');
},500);
}