const circle = document.querySelector('.circle')
let height = 0

function moveCircle(){
    height += 100
    circle.style.top = height + 'px'
    if(height > 300) {
        circle.removeEventListener('click', moveCircle)
    }
}

circle.addEventListener('click', moveCircle);
