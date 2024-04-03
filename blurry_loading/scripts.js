const text_loading = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)





function blurring(){
    load++

    if( load > 99 ){
        clearInterval(int)
        text_loading.classList.toggle('hidden')

    } 

    text_loading.innerText = `${load}%`
    text_loading.style.opacity = scale(load, 0, 100, 0, 1)
    bg.style.filter =`blur(${scale(load, 100, 0, 0, 30)}px)`  
    console.log(load);
    
   
}




function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}