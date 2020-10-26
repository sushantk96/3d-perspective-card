// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container')

// Moving Animation Event

const animationMove = (e) => {
    let positionX = e.pageX
    let positionY = e.pageY
    if(!positionX){
        positionX = e.touches[0].pageX
        positionY = e.touches[0].pageY
    }
    const offset = 20
    let xAxis = (window.innerWidth / 2 - positionX) / offset
    let yAxis = (window.innerHeight / 2 - positionY) / offset
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
}
container.addEventListener('mousemove', animationMove)
container.addEventListener('touchmove', animationMove)

// Items
const title = document.querySelector('.info h1')
const description = document.querySelector('.info h3')
const sneaker = document.querySelector('.sneaker img')
const sneakerCircle = document.querySelector('.circle')
const sizes = document.querySelector('.sizes')
const purchase = document.querySelector('.purchase')

// Animate In

const animationIn = () => {
    card.style.transition = 'none'
    const layer1 = 100
    const layer2 = 50
    title.style.transform = `translateZ(${layer1}px)`
    description.style.transform = `translateZ(${layer2}px)`
    sneaker.style.transform = `translateZ(${layer1}px)`
    sneakerCircle.style.transform = `translateZ(${layer2}px)`
    sizes.style.transform = `translateZ(${layer2}px)`
    purchase.style.transform = `translateZ(${layer1}px)`
}
container.addEventListener('mouseenter', animationIn)
container.addEventListener('touchstart', animationIn)

// Animate Out

const animationOut = () => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = 'translateZ(0px)'
    description.style.transform = 'translateZ(0px)'
    sneaker.style.transform = 'translateZ(0px)'
    sneakerCircle.style.transform = 'translateZ(0px)'
    sizes.style.transform = 'translateZ(0px)'
    purchase.style.transform = 'translateZ(0px)'
}
container.addEventListener('mouseleave', animationOut)
container.addEventListener('touchend', animationOut)