let register = document.getElementById('registered-answer')
let inputName = document.getElementById('inputName')
let inputEmail = document.getElementById('inputEmail')

const button = document.querySelector('button')

const addLoading = () => {
    button.innerHTML = '<img src="./assets/loading.png" class="loading"/> '
    register.innerHTML = ''
}

const removeLoading = () => {
    button.innerHTML = 'Enviar'
    register.innerHTML = 'Sua resposta foi registrada!'
    inputName.value = ''
    inputEmail.value = ''
    inputName.focus()
}

const handleSubmit = (e) => {
    e.preventDefault()
    addLoading()

    const name = document.querySelector('input[name=name]').value
    const email = document.querySelector('input[name=email]').value

    fetch('https://api.sheetmonkey.io/form/kvxa7Xfi1h4hXspM1q3YKA', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    }).then(() => removeLoading())
}

document.querySelector('form').addEventListener('submit', handleSubmit)