// gear icon spin
document.querySelector('.toggle-setting .fa-gear').onclick = function() {
    this.classList.toggle('fa-spin');

    document.querySelector('.setting-box').classList.toggle('open')
};

// switch color
const colorLi = document.querySelectorAll('.colors-list li');
colorLi.forEach((li) => {
    li.addEventListener('click', (event) => {
        document.documentElement.style.setProperty('--main-color', event.target.dataset.color)
    })
})


// select landing style
let landingPage = document.querySelector('.landing-page')

// get array of imgs
let imgArray = ['01.avif', '03.avif', '04.avif', '05.avif', '06.avif']


setInterval(() => {
    // get random number
    let randomNumber = Math.floor(Math.random() * imgArray.length)

    // change background img
    landingPage.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")'

},9000)

const menuToggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.links')

menuToggle.addEventListener('click', () => {
    links.style.display = links.style.display === "flex" ? "none" : "flex" 
})