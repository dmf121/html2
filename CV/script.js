


const body = document.querySelector('body'),
        header = document.querySelector('.navbar'),
        links = document.querySelectorAll('.nav-link'),
        button = document.querySelector('.dark-btn'),
        toggler = document.querySelector('.toggler')


    button.addEventListener('click', () => {
        body.classList.toggle('dark');
        header.classList.toggle('dark');
        links.forEach(link => link.classList.toggle('dark'));
        button.classList.toggle('darked-btn');
        if (body.classList.contains('dark')) {
            button.innerText = 'I prefer light colors';
            toggler.style.backgroundColor = '#fff';

        } else {button.innerText = 'I prefer dark colors'}
    })




const gifs = document.querySelectorAll('.demo-picture');

const gif = [];


for (let index = 1; index < gifs.length+1; index++) {
    gif.push(document.querySelector(`.demo-picture-${index}`));
   
} 

gif.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        item.style.background = `url("/img/demo_${index+1}_gif.gif") no-repeat 100% 100%`;
    });

    item.addEventListener('mouseleave', function() {
        item.style.background = `url("/img/demo_${index+1}.jpg")`;
})

})


