let toggle = document.getElementById('toggle')
let mode = document.getElementById('mode')
let change = () => {
    if(mode.innerText== "Dark Mode") {
        mode.innerText = "Light Mode"
        toggle.style.backgroundColor = 'black'
        mode.style.backgroundColor = 'white'
        mode.style.color = 'black'
    } else {
        if(mode.innerText == "Light Mode") {
            mode.innerText = "Dark Mode"
            toggle.style.backgroundColor = 'white'
        mode.style.backgroundColor = 'black'
        mode.style.color = 'white'
        } else {
            mode.innerText = "Light Mode"
            toggle.style.backgroundColor = 'black'
            mode.style.backgroundColor = 'white'
            mode.style.color = 'black'
        }
    }
}