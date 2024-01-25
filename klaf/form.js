const products = {
    mezuzah: [
      {
        size: '10',
        price: 10
      },
      {
        size: '12',
        price: 12,
      },
      {
        size: '15',
        price: 15
      },
      {
        size: '20',
        price: 20
      }
    ],
    teffilin: [
      {
        size: 'rosh',
        price: 10,
      },
      {
        size: 'yad',
        price: 40,
      }
    ],
    yeriah: [
      {
        size: '36',
        price: 125
      },
      {
        size: '48',
        price: 125
      }
    ]
};

const typesOfKlaf = document.getElementById('typesOfKlaf')

const types = document.getElementById('types')

const mezuzah = document.getElementById('mezuzah')
const mezuzahSize = document.getElementById('mezuzahSize')

const teffilin = document.getElementById('teffilin')
const teffilinSize = document.getElementById('teffilinSize')

const yeriah = document.getElementById('yeriah')
const yeriahSize = document.getElementById('yeriahSize')

const customOrder = document.getElementById('customOrder')

const orderMore = document.getElementById('orderMore')

const cart = document.getElementById('cart')

const order = document.getElementById('order')

mezuzah .style = 'display: none'
teffilin .style = 'display: none'
yeriah .style = 'display: none'
customOrder .style = 'display: none'
orderMore .style = 'display: none'
cart .style = 'display: none'

let savedType 
let savedSizes
let savedAmounts

types .onclick = () => {
    if (types.value === 'mezuzah') {
        mezuzah .style = 'display: block'
        savedType = types.value
        nextStep()
    }
    if (types.value === 'teffilin') {
        teffilin .style = 'display: block'
        savedType = types.value
        nextStep()
    }
    if (types.value === 'yeriah') {
        yeriah .style = 'display: block'
        savedType = types.value
        nextStep()
    } 
    if (types.value === 'custom') {
        customOrder .style = 'display: center'
        nextStep()
    }
}

const nextStep = () => {
    typesOfKlaf .style = 'display: none'
    orderMore .style = 'display: block'
}


orderMore .onclick = () => { 
    if (savedType === 'mezuzah') {
        savedSizes = mezuzahSize.value
        savedAmounts  = mezuzahAmounts.value
        showCart()
    } else if (savedType === 'teffilin') {
        savedSizes = teffilinSize.value
        savedAmounts  = teffilinAmounts.value
        showCart()
    } else if (savedType === 'yeriah') {
        savedSizes = yeriahSize.value
        savedAmounts = yeriahAmounts.value
        showCart()
    }

    orderMore .style = 'display: none'
    mezuzah .style = 'display: none'
    teffilin .style = 'display: none'
    yeriah .style = 'display: none'

    typesOfKlaf .style = 'display: block'
    types.selectedIndex = 0    
}

let total = 0

const showCart = () => {

    let price = 0

    if (savedType === 'mezuzah') {
    
        for (let i = 0; i < products.mezuzah.length; i++) {

            if (products.mezuzah[i].size === savedSizes) {
                price = products.mezuzah[i].price
                total + price
                console.log(total)
            } 
        }
    } 

    if (savedType === 'teffilin') {
    
        for (let i = 0; i < products.teffilin.length; i++) {

            if (products.teffilin[i].size === savedSizes) {
                price = products.teffilin[i].price
            } 
        }
    } 

    if (savedType === 'yeriah') {
    
        for (let i = 0; i < products.yeriah.length; i++) {

            if (products.yeriah[i].size === savedSizes) {
                price = products.yeriah[i].price
            } 
        }
    } 

    cart .style = 'display: block'

    const item = document.createElement('div')

    item.setAttribute('class', 'item')

    const cartType = document.createElement('p')
    const cartSize = document.createElement('p')
    const cartAmount = document.createElement('p')
    const cartPrice = document.createElement('p')
    const deleteBtn = document.createElement('div')
    const trash = document.createElement('i')

    trash .setAttribute('class', 'fa-solid fa-trash')
    deleteBtn .setAttribute('class', 'delete-btn')

    cart.appendChild(item)

    item.appendChild(cartType)
    item.appendChild(cartSize)
    item.appendChild(cartAmount) 
    item.appendChild(cartPrice)
    item.appendChild(deleteBtn)
    deleteBtn.appendChild(trash)

    cartType .innerHTML = 'Type: ' + savedType
    cartSize .innerHTML = 'Size: ' + savedSizes
    cartAmount .innerHTML = 'Amount: ' + savedAmounts
    cartPrice .innerHTML = 'Price: $' + price * savedAmounts

    deleteBtn .onclick = () => {
      item .style = 'display: none'
    }
}
