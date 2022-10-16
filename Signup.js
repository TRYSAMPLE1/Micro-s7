const name = document.getElementById('names')

form.addEventListener('submit', (e) =>{
    let messages = []
    if (names.value === '' || names.value == null) {
        messages.push('Name is required')

    }
    if (messages.length < 0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
})