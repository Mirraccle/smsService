const button = document.querySelector('.btn')
const phoneInput = document.querySelector('#icon_telephone')
const textArea = document.querySelector('#textarea1')
const selectButtons = document.querySelectorAll('.template-select')
const card = document.querySelectorAll('.card')
const templateText = document.querySelectorAll('.template-text')
const label = document.querySelector('.text-label')



textArea.disabled = true
// textArea.addEventListener('click', function (){
//     textArea.disabled = true
// })


function validateValue(){

    if (phoneInput.value==='' || textArea.value.length == '0'){
        button.classList.add('disabled')
    }
    else {
        console.log(123)
        button.classList.remove('disabled')
        label.classList.add('active')

    }
}

button.addEventListener('click', ()=>{
    textArea.disabled = false
    button.classList.add('disabled')
    setTimeout(()=>{
        button.classList.remove('disabled')
    }, 5000)
})

card.forEach(card => {
    card.addEventListener('click', function () {
        const text = card.querySelector('.template-text')
        textArea.value = text.innerHTML
        textArea.style.height = card.clientHeight + 'px'
        label.classList.add('active')
        validateValue()
    })
})


// selectButtons.forEach(button => {
//     button.addEventListener('click', function () {
//
//         console.log(button.getAttribute('data-id'))
//        if (button.getAttribute('data-id') === textArea.getAttribute('data-id')) {
//            textArea.value = templateText.innerHTML
//            console.log(templateText.getAttribute('data-id'))
//            label.classList.add('active')
//        }
//     })
// })