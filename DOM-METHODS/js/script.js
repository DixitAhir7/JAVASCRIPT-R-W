// element not string so you'll have to create before adding or replacing,and append it too.


const section = document.querySelector('section');
const addChild = document.createElement('div')
const span = document.createElement('span')
const addClass = addChild.classList.add('container')

section.appendChild(addChild)
section.replaceChild(span, addChild)


const body = document.body
const aside = document.createElement('aside');
const div2 = document.createElement('nav');


body.appendChild(aside)
body.replaceChild(div2, aside)



const aTag = document.createElement('a');
aTag.appendChild(section)

body.replaceChild(aTag,)