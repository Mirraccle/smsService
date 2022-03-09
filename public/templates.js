const updateButtons = document.querySelectorAll(".update-button")
const updateId = document.querySelector("#updateId")
const updateTitle = document.querySelector("#update-template-title")
const updateText = document.querySelector("#update-template-textarea")
const button = document.querySelector('.save-button')
const label = document.querySelectorAll('.text-label-update')

button.classList.add('disabled')

updateButtons.forEach(button => {
    button.addEventListener("click", function () {
        let templateID = button.getAttribute("data-type")
        updateId.value = templateID
        console.log(templateID)
        updateTitle.value = document.getElementById(templateID).querySelector('.card-title').innerHTML
        updateText.value = document.getElementById(templateID).querySelector('.template-text').innerHTML
        updateText.style.height = document.getElementById(templateID).clientHeight + 'px'
        validateValue()
    })
})


function validateValue(){

    if (updateTitle.value==='' || updateText.value.length == '0'){
        button.classList.add('disabled')
    }
    else {
        button.classList.remove('disabled')
        label.forEach(label => {
            label.classList.add('active')
        })
    }
}