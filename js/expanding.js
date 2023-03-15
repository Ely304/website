const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click' , () => {
        removeActive()
        panel.classlist.add('active')
    })
})

function removeActive(){
    panels.ForEach(panel => {
        panel.ClassList.remove('active')
    })
}