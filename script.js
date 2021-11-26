const regForm = document.forms['regForm']
const signForm = document.forms['signForm']

const regBtn = document.querySelector('#regBtn')
const signBtn = document.querySelector('#signBtn')

const sub = document.querySelector('#sub')


regBtn.addEventListener('click', () => {
    regForm.hidden = false
    signForm.hidden = true
})

signBtn.addEventListener('click', () => {
    signForm.hidden = false
    regForm.hidden = true
})


const users = JSON.parse(localStorage.getItem('users')) || []

regForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const radio = document.querySelector("input[type='radio']:checked").value

    const login = regForm.login.value

    const password = regForm.password.value

    const email = regForm.email.value

    const lang = regForm.lang.value

    const user = {
        login,
        password,
        lang,
        radio,
        email,
    }

    if (users.find(it => it.login === login)) {
        alert('Уже есть такой пользователь')
        return;
    }
    users.push(user)
    localStorage.setItem('users',JSON.stringify(users))
    alert('Вы зарегистрированы!')
    regForm.reset()

})

signForm.addEventListener('submit', (e) => {
    e.preventDefault()


    const login = signForm.login.value
    const password = signForm.password.value
    const user = users.find(it => it.login === login)
    if (!user) {
        alert('Неверно')
        return;
    }
    if (user.password !== password) {
        alert('Неверный логин или пароль')
        return;
    }
    alert('Добро пожаловать')
    location.href = "Calc js/index.html"
})

