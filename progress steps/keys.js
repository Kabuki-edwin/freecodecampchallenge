const keys = document.querySelectorAll('.key');
const progressBar = document.querySelector('.progress-bar');

let currentKey = 1;

keys.forEach((key,index) => {
    key.addEventListener('click',() => {
        currentKey = index + 1;
        updateProgress();
    });
});

function updateProgress() {
    keys.forEach((key,index) =>{
        if(index < currentKey){
            key.classList.add ('active');
        } else {
            key.classList.remove('active');
        }
    });
    const progressPercent = ((currentKey - 1) / (keys.length - 1)) * 100;
    progressBar.style.width = progressPercent + '%';

    progressBar.classList.add('active');
    setTimeout(() => {
        progressBar.classList.remove('active');
    },500);
}