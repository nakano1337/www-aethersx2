function Themes(){
    //Theme
    const themeBtn = document.querySelector('.theme');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

Themes(); 