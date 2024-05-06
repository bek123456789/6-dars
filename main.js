let prompFirst = prompt('Backround color qanday bolsin')
let prompSecond = prompt('Textni colori qanday bolsin')


let body = document.querySelector(`body`)
let text = document.querySelector(`.web_p`)

body.style.backgroundColor = prompFirst
text.style.color = prompSecond