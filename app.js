const loader= document.querySelector('.loader');

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        loader.style.display="none"
    },500);
    loader.classList.add('fondu_out');
});


