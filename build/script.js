const button= document.querySelector('#avaDevine');
let lisaLipps = document.querySelector('#lisaLipps')

button.addEventListener('click',function(){
    let hidden = lisaLipps.classList.contains('hidden');
    if(hidden){
        lisaLipps.classList.remove('hidden')
    }
})