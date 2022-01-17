/**option 2 */

// $('.navbar a').on('click', function(e) {
//     if(this.hash !== '') {
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800);
//     }
// })

/**Option 3 */

// const scroll = new SmoothScroll('.navbar a[href*="#"]', {
//     speed: 800
// });







const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;")
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove('expand');  
    }, 500);
})