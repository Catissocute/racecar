var text = document.getElementById('datext');
var x = document.querySelector(':root');
var c1i= 100;
var c2i= 100;
function engine1() {
    c1i = c1i-5;
    let z = (c1i + "%");
    x.style.setProperty('--car1', z);  
}
function engine2() {
    c2i = c2i-5;
    let n = (c2i + "%");
    x.style.setProperty('--car2', n);  
}
