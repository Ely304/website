const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventlistener('click', () =>{
    container.classlist.add('show-nav')
})