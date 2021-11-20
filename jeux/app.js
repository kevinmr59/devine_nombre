let text = document.getElementById('text');
let button = document.getElementById('button');
let use = document.getElementById('use');
let tryAgain = document.getElementById('tryAgain');
let span = document.getElementById('span');
let gagner = Math.floor(Math.random()*100+1);
let gg = document.getElementById('gg');
let luck = 9;


function myClick() {
    if (luck > -1) {
        if (parseInt(text.value) === gagner) {
            gg.innerHTML = "gagner";
            use.innerHTML += " ";

        } else if (parseInt(text.value) < gagner) {
            gg.innerHTML = "trop petit";
            span.innerHTML = luck--;
            use.innerHTML += text.value + " ";
        } else {

        }
    } else {
        gg.innerHTML = "perdu";
    }
}
    function supp() {
        text.value = null;
        use.innerHTML = null;
        span.innerHTML = '10';
        gg.innerHTML = ' ';


}
    button.addEventListener('click', myClick);
    tryAgain.addEventListener('click', supp);
console.log(gagner)