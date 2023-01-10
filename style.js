console.log('up and running')

let btns =document.getElementsByClassName('btns')

for (var i=0; btns.length > i; i++){
    btns[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        console.log('option clicked',mode)
        setdis(mode)
    })
}
function setdis(mode){
    localStorage.setItem("selected",mode)
}
