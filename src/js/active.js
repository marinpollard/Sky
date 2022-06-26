// const buttonsize = document.querySelector('.button__size')

// buttonsize.addEventListener('click', () => {
//     buttonsize.classList.toggle('active')
// })

// const buttonsize = document.getElementsByClassName('button__size');
// for (i = 0; buttonsize.length; i++) {
//     buttonsize[i].addEventListener('click', function () {
//         this.classList.toggle('active')
//     })
// }


const items = document.querySelector('.button__size');

items.forEach(button__size => {
    button__size.addEventListener('click', function () {
        items.forEach(elem => elem.classList.remove('active'));
        this.classList.add('active');
    });
});



