// const btn = document.querySelector('#loginButton')
// const userName = document.querySelector('#username-input')
// const password = document.querySelector('#password-input')
//
// btn.addEventListener('click', function (e) {
//     e.preventDefault()
//     fetch('auth/login', {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             username: userName.value,
//             password: password.value
//         })
//
//     })
//         .then((res => res.json()))
//             .then(res => {
//                 console.log(res)
//                 localStorage.setItem('Authorization', res)
//                 window.location.replace('/')
//             })
// })
