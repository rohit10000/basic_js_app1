
var name = "Rohit";

const myHeading = document.querySelector('h1');
myHeading.textContent = name+"'s " + "heart Shweta!"

/*  */

const text = document.querySelector('p');

let yourImage = document.getElementById('your_image');

yourImage.onclick = function () {
    let your_src = yourImage.getAttribute('src');

    if (your_src == 'images/shweta.jpeg')
        yourImage.setAttribute('src', 'images/shweta_and_me.jpeg');
    else
        yourImage.setAttribute('src', 'images/shweta.jpeg');
}

yourImage.addEventListener('click', function() {
    text.textContent ='Ouch! Stop poking me! NOt feeling sleepy!';
});

let button = document.querySelector('button');

button.onclick = function () {
    let fireworkImage = document.getElementById('firework_image');
    
    if (button.innerText === 'Start Firework') {
        fireworkImage.setAttribute('src', 'images/firework.gif');
        button.innerText = 'Stop Firework';
    } else {
        fireworkImage.setAttribute('src', '');
        button.innerText = 'Start Firework';
    }
}



