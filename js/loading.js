const bg = docement.querySelector('.bg')
const loadtext = document.querySelector('.loadingtext')

let load = 0
let int = setInterval(blurt,30)


function blurt(){
    load++
    loadtext.innertext = `$(load)%`
    if(load == 100){
        clearInterval(int)
    }

    bg.style.filter = `blur($(.3 - load)px)`
    loadtext.style.opacity = `${1 - load/100}`

}