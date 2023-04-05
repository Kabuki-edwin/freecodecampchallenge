const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let int = setInterval(blurring, 30)

let load = 0;

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }
}