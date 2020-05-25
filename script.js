document.querySelectorAll('.order').forEach( function (element){
    element.onclick = orderFunction;
});

function orderFunction(){
    let speed = document.querySelector('.order[value = "speed"]');
    let cheap = document.querySelector('.order[value = "cheap"]');
    let quality = document.querySelector('.order[value = "quality"]');
   
    if(this.value == 'speed' && cheap.checked){
        quality.checked = false;
        return true;
    }
    if(this.value == 'speed' && quality.checked){
        cheap.checked = false;
        return true;
    }
    if(this.value == 'quality' && cheap.checked){
        speed.checked = false;
        return true;
    }
    if(this.value == 'quality' && quality.checked){
        speed.checked = false;
        return true;
    }

}