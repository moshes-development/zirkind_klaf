// const shippingInfo = document.getElementById('shippingInfo')
// shippingInfo .style = 'display: none'

// const shipping = document.getElementById('shipping')

// shipping .onchange = () => {
//     if (shipping.checked) {
//         shippingInfo .style = 'display: center'
//     } else {
//         shippingInfo .style = 'display: none'
//     }
// }

const menuIcon = document.getElementById('menuIcon')
const xMark = document.getElementById('xMark')
const menu = document.getElementById('menu')
const body = document.getElementById('body')

menuIcon .onclick = () => {
    menu .style = 'display: block'
    body .style = 'overflow: hidden'
}

xMark .onclick = () => {
    menu .style = 'display: none'
    body .style = 'overflow: fixed'
}

menu .onclick = () => {
    menu .style.display = 'none'
    body .style.overflow = 'scroll'
}


const googleForm = document.getElementById('googleForm')

googleForm .onscroll = () => {

    console.log(screenY)
}


// var iframe = document.getElementById("googleForm");

// googleForm.width = iframe.contentWindow.document.body.scrollWidth;









