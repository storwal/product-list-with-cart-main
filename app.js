//const addToCart = document.getElementById('addToCartWaffle')

//addToCart.addEventListener('click', function(){
//addToCart.style.backGroundColor = 'blue'
//console.log('addTocart')
//})

//displays #plusminus and hides addToCartWaffle

const carbon = document.getElementById('carbon');
const confirmButton = document.getElementById('confirmButton');


const addToCart = document.getElementById('addToCartWaffle');


function changeBgcolor() {
  addToCart.style.backgroundColor = 'blue';
}
addToCart.addEventListener("click", changeBgcolor);

console.log('addToCart');

document.getElementById("addToCartWaffle").addEventListener('click', function() {
  document.getElementById("plusMinus").style.display = "block";
  addToCart.style.display = 'none';
  borderBoxRed.style.display = 'block'
});
//raises or lowers the number depending on if plus or minus is clicked
const add = document.querySelector("#plus"),
  minus = document.querySelector("#minus"),
  number = document.querySelector("#number")
  const displayNone = document.getElementById('yourAddedItems')

let count = 0;
number.innerText = count;{
}
const printNumber = () => {
  number.innerText = count;
  if (number.innerText < 1){
    document.getElementById("plusMinus").style.display = "none";
      addToCart.style.display = 'block';
      borderBoxRed.style.display = 'none'
  }
};

const handleAdd = () => {
  console.log(number.innerText)
  if (number.innerText == 0) {
    displayNone.style.display = 'block'
   
  } else {
 }
  count = count + 1;
  printNumber();
  addItemToCart();
  addItemToCartConfirm();
};

const handleMinus = () => {
  console.log(number.innerText)
  if (number.innerText == 1) {  
  } 
  if (count > 0) {
    count = count - 1;
    printNumber();
    removeItemFromCart();
    removeItemFromCartConfirm();
  } else if (number.innerText == 0){
    document.getElementById("plusMinus").style.display = "none";
    addToCart.style.display = 'block';
    borderBoxRed.style.display = 'none'  
}
}

  //const handleMinus   = () => {
    //if (count = 0){
      //cartImg.style.display = "block"
    //} else {
      //cartImg.style.display = "none" 
    //}}

//add items to cart and updates info by pressing plus or minus 
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);


    


const cart = [];
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');


//adds item to cart if plus is clicked
function addItemToCart() {
  const productName = 'Waffle with berries'; 
  const productPrice = 6.50;
  const productId = 'waffle'; 
  const existingProduct = cart.find(product => product.name === productName);
//stops from displaying the item for more than once
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
  }
  updateCart();
}
//removes item from cart if minus is clicked
function removeItemFromCart() {
  const productName = 'Waffle with berries'; 
  const existingProduct = cart.find(product => product.name === productName);
//if more than one of the same item, removes one from x2 to x1
  if (existingProduct && existingProduct.quantity > 1) {
    existingProduct.quantity -= 1;
  } else {
    const index = cart.findIndex(product => product.name === productName);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
  
  updateCart();
}
//updates price and creates list
function updateCart() {

  minus.addEventListener("click", function(){
  if(cartItems.children.length === 0){
    document.getElementById('carbon').style.display = "none";
    document.getElementById('confirmButton').style.display = "none";  
    document.getElementById('cartImg').style.display = "block";
  }})

  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(product => {
    if (product.quantity > 0) { 
      if(cartItems.children.length > -1)
        document.getElementById('carbon').style.display = "block";
        document.getElementById('confirmButton').style.display = "block";
    const li = document.createElement('li');
    li.classList.add(product.id + '-li');
    li.innerHTML = `<span style="font-size: 15px; font-weight: 700; color: hsl(12, 20%, 44%);">${product.name}</span>
     <span style="font-size: 15px; font-weight: 600; color: hsl(14, 86%, 42%); margin-top: 5px;">x${product.quantity}</span>
     <span style="font-size: 15px; font-weight: 500; color: hsl(7, 20%, 60%); margin: -17px 0px 0px 30px;">${product.price}$</span>  
      <span style="font-size: 15px; font-weight: 500; color: hsl(12, 20%, 44%); margin: -17px 0px 0px 70px;">Total ${product.price * product.quantity}$</span>  
     <span style="font-size: 15px; font-weight: 500; color: hsl(12, 20%, 44%); @ $${(product.price * product.quantity).toFixed(2)}</span>`;
 //adds and customizes remove button   
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'X'
    li.appendChild(removeButton);
    const ul = document.querySelector('ul');
    ul.appendChild(li);
    removeButton.addEventListener('click', function() {
      ul.removeChild(li);
      if (product.id === "waffle") {
        count = 0;
        number.innerText = count;
        cartTotal.innerHTML = 0;
        document.getElementById("plusMinus").style.display = "none";
        addToCart.style.display = 'block';
        borderBoxRed.style.display = 'none'
        //deletes items from cart confirm because of 0
        const existingProduct = cartConfirm.find(product => product.id === "waffleConfirm");
        existingProduct.quantity = 0;
        updateCartConfirm();
      } else if (product.id === "creme") {
        countCreme = 0;
        numberCreme.innerText = countCreme;
        cartTotalCreme.innerHTML = 0;
        document.getElementById("plusMinusCreme").style.display = "none";
         addToCartCreme.style.display = 'block';
        borderBoxRedCreme.style.display = 'none'
        const existingProduct = cartConfirm.find(product => product.id === "cremeConfirm");
        existingProduct.quantity = 0;
        updateCartConfirm();
      } else if (product.id === "Macaron") {
        countMacaron = 0;
        numberMacaron.innerText = countMacaron;
        cartTotalMacaron.innerHTML = 0;
        document.getElementById("plusMinusMacaron").style.display = "none";
         addToCartMacaron.style.display = 'block';
        borderBoxRedMacaron.style.display = 'none'
        const existingProduct = cartConfirm.find(product => product.id === "macaronConfirm");
        existingProduct.quantity = 0;
        updateCartConfirm();
      } else if (product.id === "Tiramisu") {
        countTiramisu = 0;
        numberTiramisu.innerText = countTiramisu;
        cartTotalTiramisu.innerHTML = 0;
        document.getElementById("plusMinusTiramisu").style.display = "none";
         addToCartTiramisu.style.display = 'block';
        borderBoxRedTiramisu.style.display = 'none'
        const existingProduct = cartConfirm.find(product => product.id === "tiramisuConfirm");
        existingProduct.quantity = 0;
        updateCartConfirm();
      } else if (product.id === "Baklava") {
        countBaklava = 0;
        numberBaklava.innerText = countBaklava;
        cartTotalBaklava.innerHTML = 0;
        document.getElementById("plusMinusBaklava").style.display = "none";
         addToCartBaklava.style.display = 'block';
        borderBoxRedBaklava.style.display = 'none'
        const existingProduct = cartConfirm.find(product => product.id === "baklavaConfirm");
        existingProduct.quantity = 0;
        updateCartConfirm();
      } else if (product.id === "Pie") {
        countPie = 0;
        numberPie.innerText = countPie;
        cartTotalPie.innerHTML = 0;
        document.getElementById("plusMinusPie").style.display = "none";
         addToCartPie.style.display = 'block';
        borderBoxRedPie.style.display = 'none'
        const existingProduct = cartConfirm.find(product => product.id === "pieConfirm");
        existingProduct.quantity = 0;
        updateCartConfirm();
      } else if (product.id === "Cake") {
        countCake = 0;
        numberCake.innerText = countCake;
        cartTotalCake.innerHTML = 0;
        document.getElementById("plusMinusCake").style.display = "none";
         addToCartCake.style.display = 'block';
        borderBoxRedCake.style.display = 'none'
        const existingProduct = cartConfirm.find(product => product.id === "cakeConfirm");
        existingProduct.quantity = 0;
        updateCartConfirm();
      } else if (product.id === "Brownie") {
        countBrownie = 0;
        numberBrownie.innerText = countBrownie;
        cartTotalBrownie.innerHTML = 0;
        document.getElementById("plusMinusBrownie").style.display = "none";
         addToCartBrownie.style.display = 'block';
        borderBoxRedBrownie.style.display = 'none'
        const existingProduct = cartConfirm.find(product => product.id === "brownieConfirm");
        existingProduct.quantity = 0;
        updateCartConfirm();
      } else if (product.id === "Panna") {
        countPanna = 0;
        numberPanna.innerText = countPanna;
        cartTotalPanna.innerHTML = 0;
        document.getElementById("plusMinusPanna").style.display = "none";
         addToCartPanna.style.display = 'block';
        borderBoxRedPanna.style.display = 'none'
        const existingProduct = cartConfirm.find(product => product.id === "pannaConfirm");
        existingProduct.quantity = 0;
        updateCartConfirm();
      }



      product.quantity = 0;
      if (cartItems.children.length === 0) {
        document.getElementById('cartImg').style.display = "block";
          document.getElementById('carbon').style.display = "none";
          document.getElementById('confirmButton').style.display = "none";
          

      }
    });
    //total
        cartItems.appendChild(li);
    total += product.price * product.quantity
  }
  });

  cartTotal.innerHTML =`<span style="font-size: 15px; font-weight: 500; color: hsl(12, 20%, 44%); "> $${total.toFixed(2)}</span>`;
  if (cartItems.children.length > 0 ) {
    document.getElementById('cartImg').style.display = "none";
  }
}
//stops the font size resetting to default after the first click, idk how it works
let fontSizeChanged = false;

document.getElementById("plus").addEventListener('click', function() {
  if (!fontSizeChanged) {
    
    const waffleItem = Array.from(document.querySelectorAll('.waffle-li')).find(item => item.innerText.includes('Waffle with berries'));
    if (waffleItem) {
      fontSizeChanged = false;
    }
  }
});


document.getElementById("minus").addEventListener('click', function() {
  if (!fontSizeChanged) {
    const waffleItem = Array.from(document.querySelectorAll('.waffle-li')).find(item => item.innerText.includes('Waffle with berries'));
    if (waffleItem) {
      fontSizeChanged = false;
    }
  }
});


if (number.innerText = 0){
  document.getElementsByClassName('waffle-li').style.display = "none"
  }

  

 /*  if(cartItems.children.length > 0)
      document.getElementById('carbon').style.display = "block";
    else if (cartItems.children.length < 0)
      document.getElementById('carbon').style.display = "none"; */

  //document.querySelectorAll('.waffle-li').forEach(item => {
    //if (item.innerText.includes('Waffle with berries')) {
      //item.innerHTML = item.innerHTML.replace('Waffle with berries', '<span style="font-size: 15px;">Waffle with berries</span>');
      //item.innerHTML = item.innerHTML.replace('waffle with berries', '<span style="font-weight: 700;">waffle with berries</span>' )
    //}
  //});
//})







const addToCartCreme = document.getElementById('addToCartCreme');


function changeBgcolor() {
  addToCartCreme.style.backgroundColor = 'white';
}
addToCartCreme.addEventListener("click", changeBgcolor);

console.log('addToCart');

document.getElementById("addToCartCreme").addEventListener('click', function() {
  document.getElementById("plusMinusCreme").style.display = "block";
  addToCartCreme.style.display = 'none';
  borderBoxRedCreme.style.display = 'block'
})

const addCreme = document.querySelector("#plusCreme"),
  minusCreme = document.querySelector("#minusCreme"),
  numberCreme = document.querySelector("#numberCreme")
  const displayNoneCreme = document.getElementById('yourAddedItems')

let countCreme = 0;
numberCreme.innerText = countCreme;{
}
const printNumberCreme = () => {
  numberCreme.innerText = countCreme;
  if (numberCreme.innerText < 1){
    document.getElementById("plusMinusCreme").style.display = "none";
      addToCartCreme.style.display = 'block';
      borderBoxRedCreme.style.display = 'none'
  }
 };
const handleAddCreme = () => {
  console.log(numberCreme.innerText)
  if (numberCreme.innerText == 0) {
    displayNoneCreme.style.display = 'block'
   
  } else {
 }
  countCreme = countCreme + 1;
  printNumberCreme();
  addItemToCartCreme();
  addItemToCartConfirmCreme();
};
const handleMinusCreme = () => {
  console.log(numberCreme.innerText)
  if (numberCreme.innerText == 1) {
   
  } 
  if (countCreme > 0) {
    countCreme = countCreme - 1;
    printNumberCreme();
    removeItemFromCartCreme();
    removeItemFromCartConfirmCreme();
  } else if (numberCreme.innerText == 0){
    document.getElementById("plusMinusCreme").style.display = "none";
    addToCartCreme.style.display = 'block';
    borderBoxRedCreme.style.display = 'none'  
}
}
addCreme.addEventListener("click", handleAddCreme);
minusCreme.addEventListener("click", handleMinusCreme);

const cartCreme = [];
const cartItemsCreme = document.querySelector('.cart-items');
const cartTotalCreme = document.querySelector('.cart-total');

function addItemToCartCreme() {
  const productNameCreme = 'Vanilla Bean Crème Brûlée'; 
  const productPriceCreme = 7.00; 
  const productIdCreme = 'creme';
  const existingProductCreme = cart.find(product => product.name === productNameCreme);
//stops from displaying the item for more than once
  if (existingProductCreme) {
    existingProductCreme.quantity += 1;
  } else {
    cart.push({ id: productIdCreme, name: productNameCreme, price: productPriceCreme, quantity: 1 });
  }
  
  updateCart();
}
function removeItemFromCartCreme() {
  const productNameCreme = 'Vanilla Bean Crème Brûlée'; 
  const existingProductCreme = cart.find(product => product.name === productNameCreme);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductCreme && existingProductCreme.quantity > 1) {
    existingProductCreme.quantity -= 1;
  } else {
    const index = cart.findIndex(product => product.name === productNameCreme);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
 
  updateCart();
}

minusCreme.addEventListener("click", function(){
  if(cartItems.children.length === 0){
    document.getElementById('carbon').style.display = "none";
    document.getElementById('confirmButton').style.display = "none";  
    document.getElementById('cartImg').style.display = "block";
  }})

// function updateCartCreme() {
//   cartItemsCreme.innerHTML = '';
//   let totalCreme = 0;
//   cart.forEach(product => {
//     console.log(cart);
//     const liCreme= document.createElement('li');
//     liCreme.classList.add(product.id + '-li')
//     liCreme.innerHTML = `<span style="font-size: 15px; font-weight: 700; color: hsl(12, 20%, 44%);">${product.name}</span>
//      <span style="font-size: 15px; font-weight: 600; color: hsl(14, 86%, 42%); margin-top: 5px;">x${product.quantity}</span>
//      <span style="font-size: 15px; font-weight: 500; color: hsl(7, 20%, 60%); margin: -17px 0px 0px 30px;">${product.price}$</span>  
//       <span style="font-size: 15px; font-weight: 500; color: hsl(12, 20%, 44%); margin: -17px 0px 0px 70px;">Total ${product.price * product.quantity}$</span>  
//      <span style="font-size: 15px; font-weight: 500; color: hsl(12, 20%, 44%); @ $${(product.price * product.quantity).toFixed(2)}</span>`;
//  //adds and customizes remove button   
// const removeButtonCreme = document.createElement('button');
// removeButtonCreme.textContent = 'X'
// removeButtonCreme.style.width = '25px'
// removeButtonCreme.style.height = '25px'
// removeButtonCreme.style.borderRadius = '20px'
// removeButtonCreme.style.margin = '-23px 0px 10px 250px'
// removeButtonCreme.style.backgroundColor = 'white'
// removeButtonCreme.style.color= 'hsl(14, 80%, 54%)'
// removeButtonCreme.style.border = '2px solid hsl(14, 80%, 54%)'
// liCreme.appendChild(removeButtonCreme);
// const ul = document.querySelector('ul');
// ul.appendChild(liCreme);
// removeButtonCreme.addEventListener('click', function() {
//   ul.removeChild(liCreme);
//   countCreme = 0;
//   numberCreme.innerText = countCreme;
//   product.quantity = 0;
//   cartTotalCreme.innerHTML = totalCreme.toFixed(2);
  
//   });
// //total
//     cartItemsCreme.appendChild(liCreme);
//     totalCreme += product.price * product.quantity;
//   });
//   cartTotalCreme.innerHTML =`<span style="font-size: 15px; font-weight: 500; color: hsl(12, 20%, 44%); "> $${totalCreme.toFixed(2)}</span>`;
  
// }

document.getElementById("plusCreme").addEventListener('click', function() {
  if (!fontSizeChanged) {
    
    const CremeItem = Array.from(document.querySelectorAll('.Creme-li')).find(item => item.innerText.includes('Vanilla Bean Crème Brûlée'));
    if (CremeItem) {
      fontSizeChanged = false;
    }
  }
});


document.getElementById("minusCreme").addEventListener('click', function() {
  if (!fontSizeChanged) {
    const CremeItem = Array.from(document.querySelectorAll('.waffle-li')).find(item => item.innerText.includes('Vanilla Bean Crème Brûlée'));
    if (CremeItem) {
      fontSizeChanged = false;
    }
  }
});

if (numberCreme.innerText = 0){
  document.getElementsByClassName('creme-li').style.display = "none"
  }

  




  const addToCartMacaron = document.getElementById('addToCartMacaron');

  function changeBgcolor() {
    addToCartMacaron.style.backgroundColor = 'white';
  }
  addToCartMacaron.addEventListener("click", changeBgcolor);
  
  console.log('addToCart');
  
  document.getElementById("addToCartMacaron").addEventListener('click', function() {
    document.getElementById("plusMinusMacaron").style.display = "block";
    addToCartMacaron.style.display = 'none';
    borderBoxRedMacaron.style.display = 'block'
  })

  const addMacaron = document.querySelector("#plusMacaron"),
  minusMacaron = document.querySelector("#minusMacaron"),
  numberMacaron = document.querySelector("#numberMacaron")
  const displayNoneMacaron = document.getElementById('yourAddedItems')

let countMacaron = 0;
numberMacaron.innerText = countMacaron;{
}

const printNumberMacaron = () => {
  numberMacaron.innerText = countMacaron;
  if (numberMacaron.innerText < 1){
    document.getElementById("plusMinusMacaron").style.display = "none";
      addToCartMacaron.style.display = 'block';
      borderBoxRedMacaron.style.display = 'none'
  }
 };
 const handleAddMacaron = () => {
  console.log(numberMacaron.innerText)
  if (numberMacaron.innerText == 0) {
    displayNoneMacaron.style.display = 'block'
   
  } else {
 }
  countMacaron = countMacaron + 1;
  printNumberMacaron();
  addItemToCartMacaron();
  addItemToCartConfirmMacaron();
};
const handleMinusMacaron = () => {
  console.log(numberMacaron.innerText)
  if (numberMacaron.innerText == 1) {
  } 
  if (countMacaron > 0) {
    countMacaron = countMacaron - 1;
    printNumberMacaron();
    removeItemFromCartMacaron();
    removeItemFromCartConfirmMacaron();
  } else if (numberMacaron.innerText == 0){
    document.getElementById("plusMinusMacaron").style.display = "none";
    addToCartMacaron.style.display = 'block';
    borderBoxRedMacaron.style.display = 'none'  
}
}
addMacaron.addEventListener("click", handleAddMacaron);
minusMacaron.addEventListener("click", handleMinusMacaron);

const cartMacaron = [];
const cartItemsMacaron = document.querySelector('.cart-items');
const cartTotalMacaron = document.querySelector('.cart-total');

function addItemToCartMacaron() {
  const productNameMacaron = 'Macaron Mix of Five'; 
  const productPriceMacaron = 8.00; 
  const productIdMacaron = 'Macaron';
  const existingProductMacaron = cart.find(product => product.name === productNameMacaron);
//stops from displaying the item for more than once
  if (existingProductMacaron) {
    existingProductMacaron.quantity += 1;
  } else {
    cart.push({ id: productIdMacaron, name: productNameMacaron, price: productPriceMacaron, quantity: 1 });
  }
  
  updateCart();
}
function removeItemFromCartMacaron() {
  const productNameMacaron = 'Macaron Mix of Five'; 
  const existingProductMacaron = cart.find(product => product.name === productNameMacaron);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductMacaron && existingProductMacaron.quantity > 1) {
    existingProductMacaron.quantity -= 1;
  } else {
    const index = cart.findIndex(product => product.name === productNameMacaron);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
 
  updateCart();
}

document.getElementById("plusMacaron").addEventListener('click', function() {
  if (!fontSizeChanged) {
    
    const MacaronItem = Array.from(document.querySelectorAll('.Macaron-li')).find(item => item.innerText.includes('Macaron Mix of Five'));
    if (MacaronItem) {
      fontSizeChanged = false;
    }
  }
});

document.getElementById("minusMacaron").addEventListener('click', function() {
  if (!fontSizeChanged) {
    const MacaronItem = Array.from(document.querySelectorAll('.Macaron-li')).find(item => item.innerText.includes('Macaron Mix of Five'));
    if (MacaronItem) {
      fontSizeChanged = false;
    }
  }
});

if (numberMacaron.innerText = 0){
  document.getElementsByClassName('Macaron-li').style.display = "none"
  }






  const addToCartTiramisu = document.getElementById('addToCartTiramisu');

  function changeBgcolor() {
    addToCartTiramisu.style.backgroundColor = 'white';
  }
  addToCartTiramisu.addEventListener("click", changeBgcolor);
  
  console.log('addToCart');

  document.getElementById("addToCartTiramisu").addEventListener('click', function() {
    document.getElementById("plusMinusTiramisu").style.display = "block";
    addToCartTiramisu.style.display = 'none';
    borderBoxRedTiramisu.style.display = 'block'
  })

  const addTiramisu = document.querySelector("#plusTiramisu"),
  minusTiramisu = document.querySelector("#minusTiramisu"),
  numberTiramisu = document.querySelector("#numberTiramisu")
  const displayNoneTiramisu = document.getElementById('yourAddedItems')

let countTiramisu = 0;
numberTiramisu.innerText = countTiramisu;{
}
const printNumberTiramisu = () => {
  numberTiramisu.innerText = countTiramisu;
  if (numberTiramisu.innerText < 1){
    document.getElementById("plusMinusTiramisu").style.display = "none";
      addToCartTiramisu.style.display = 'block';
      borderBoxRedTiramisu.style.display = 'none'
  }
 };
 const handleAddTiramisu = () => {
  console.log(numberTiramisu.innerText)
  if (numberTiramisu.innerText == 0) {
    displayNoneTiramisu.style.display = 'block'
   
  } else {
 }
  countTiramisu = countTiramisu + 1;
  printNumberTiramisu();
  addItemToCartTiramisu();
  addItemToCartConfirmTiramisu();
};
const handleMinusTiramisu = () => {
  console.log(numberTiramisu.innerText)
  if (numberTiramisu.innerText == 1) {
  } 
  if (countTiramisu > 0) {
    countTiramisu = countTiramisu - 1;
    printNumberTiramisu();
    removeItemFromCartTiramisu();
    removeItemFromCartConfirmTiramisu();
  } else if (numberTiramisu.innerText == 0){
    document.getElementById("plusMinusTiramisu").style.display = "none";
    addToCartTiramisu.style.display = 'block';
    borderBoxRedTiramisu.style.display = 'none'  
}
}
addTiramisu.addEventListener("click", handleAddTiramisu);
minusTiramisu.addEventListener("click", handleMinusTiramisu);

const cartTiramisu = [];
const cartItemsTiramisu = document.querySelector('.cart-items');
const cartTotalTiramisu = document.querySelector('.cart-total');

function addItemToCartTiramisu() {
  const productNameTiramisu = 'Classic Tiramisu'; 
  const productPriceTiramisu = 5.50; 
  const productIdTiramisu = 'Tiramisu';
  const existingProductTiramisu = cart.find(product => product.name === productNameTiramisu);
//stops from displaying the item for more than once
  if (existingProductTiramisu) {
    existingProductTiramisu.quantity += 1;
  } else {
    cart.push({ id: productIdTiramisu, name: productNameTiramisu, price: productPriceTiramisu, quantity: 1 });
  }
  
  updateCart();
}
function removeItemFromCartTiramisu() {
  const productNameTiramisu = 'Classic Tiramisu'; 
  const existingProductTiramisu = cart.find(product => product.name === productNameTiramisu);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductTiramisu && existingProductTiramisu.quantity > 1) {
    existingProductTiramisu.quantity -= 1;
  } else {
    const index = cart.findIndex(product => product.name === productNameTiramisu);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
 
  updateCart();
}

minusMacaron.addEventListener("click", function(){
  if(cartItems.children.length === 0){
    document.getElementById('carbon').style.display = "none";
    document.getElementById('confirmButton').style.display = "none";  
    document.getElementById('cartImg').style.display = "block";
  }})


document.getElementById("plusTiramisu").addEventListener('click', function() {
  if (!fontSizeChanged) {
    
    const TiramisuItem = Array.from(document.querySelectorAll('.Tiramisu-li')).find(item => item.innerText.includes('Classic Tiramisu'));
    if (TiramisuItem) {
      fontSizeChanged = false;
    }
  }
});
document.getElementById("minusTiramisu").addEventListener('click', function() {
  if (!fontSizeChanged) {
    const TiramisuItem = Array.from(document.querySelectorAll('.Tiramisu-li')).find(item => item.innerText.includes('Classic Tiramisu'));
    if (TiramisuItem) {
      fontSizeChanged = false;
    }
  }
});

if (numberTiramisu.innerText = 0){
  document.getElementsByClassName('Tiramisu-li').style.display = "none"
  }






  const addToCartBaklava = document.getElementById('addToCartBaklava');

  function changeBgcolor() {
    addToCartBaklava.style.backgroundColor = 'white';
  }
  addToCartBaklava.addEventListener("click", changeBgcolor);
  
  console.log('addToCart');

  document.getElementById("addToCartBaklava").addEventListener('click', function() {
    document.getElementById("plusMinusBaklava").style.display = "block";
    addToCartBaklava.style.display = 'none';
    borderBoxRedBaklava.style.display = 'block'
  })

  const addBaklava = document.querySelector("#plusBaklava"),
  minusBaklava = document.querySelector("#minusBaklava"),
  numberBaklava = document.querySelector("#numberBaklava")
  const displayNoneBaklava = document.getElementById('yourAddedItems')

let countBaklava = 0;
numberBaklava.innerText = countBaklava;{
}

const printNumberBaklava = () => {
  numberBaklava.innerText = countBaklava;
  if (numberBaklava.innerText < 1){
    document.getElementById("plusMinusBaklava").style.display = "none";
      addToCartBaklava.style.display = 'block';
      borderBoxRedBaklava.style.display = 'none'
  }
 };
const handleAddBaklava = () => {
  console.log(numberBaklava.innerText)
  if (numberBaklava.innerText == 0) {
    displayNoneBaklava.style.display = 'block'
   
  } else {
 }
  countBaklava = countBaklava + 1;
  printNumberBaklava();
  addItemToCartBaklava();
  addItemToCartConfirmBaklava();
};
const handleMinusBaklava = () => {
  console.log(numberBaklava.innerText)
  if (numberBaklava.innerText == 1) {
  } 
  if (countBaklava > 0) {
    countBaklava = countBaklava - 1;
    printNumberBaklava();
    removeItemFromCartBaklava();
    removeItemFromCartConfirmBaklava();
  } else if (numberBaklava.innerText == 0){
    document.getElementById("plusMinusBaklava").style.display = "none";
    addToCartBaklava.style.display = 'block';
    borderBoxRedBaklava.style.display = 'none'  
}
}

addBaklava.addEventListener("click", handleAddBaklava);
minusBaklava.addEventListener("click", handleMinusBaklava);

const cartBaklava = [];
const cartItemsBaklava = document.querySelector('.cart-items');
const cartTotalBaklava = document.querySelector('.cart-total');

function addItemToCartBaklava() {
  const productNameBaklava = 'Pistachio Baklava'; 
  const productPriceBaklava = 4.00; 
  const productIdBaklava = 'Baklava';
  const existingProductBaklava = cart.find(product => product.name === productNameBaklava);
//stops from displaying the item for more than once
  if (existingProductBaklava) {
    existingProductBaklava.quantity += 1;
  } else {
    cart.push({ id: productIdBaklava, name: productNameBaklava, price: productPriceBaklava, quantity: 1 });
  }
  
  updateCart();
}
function removeItemFromCartBaklava() {
  const productNameBaklava = 'Pistachio Baklava'; 
  const existingProductBaklava = cart.find(product => product.name === productNameBaklava);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductBaklava && existingProductBaklava.quantity > 1) {
    existingProductBaklava.quantity -= 1;
  } else {
    const index = cart.findIndex(product => product.name === productNameBaklava);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
 
  updateCart();
}

minusBaklava.addEventListener("click", function(){
  if(cartItems.children.length === 0){
    document.getElementById('carbon').style.display = "none";
    document.getElementById('confirmButton').style.display = "none";  
    document.getElementById('cartImg').style.display = "block";
  }})


minusTiramisu.addEventListener("click", function(){
  if(cartItems.children.length === 0){
    document.getElementById('carbon').style.display = "none";
    document.getElementById('confirmButton').style.display = "none";  
    document.getElementById('cartImg').style.display = "block";
  }})


document.getElementById("plusBaklava").addEventListener('click', function() {
  if (!fontSizeChanged) {
    
    const BaklavaItem = Array.from(document.querySelectorAll('.Baklava-li')).find(item => item.innerText.includes('Pistachio Baklava'));
    if (BaklavaItem) {
      fontSizeChanged = false;
    }
  }
});
document.getElementById("minusBaklava").addEventListener('click', function() {
  if (!fontSizeChanged) {
    const BaklavaItem = Array.from(document.querySelectorAll('.Baklava-li')).find(item => item.innerText.includes('Pistachio Baklava'));
    if (BaklavaItem) {
      fontSizeChanged = false;
    }
  }
});

if (numberBaklava.innerText = 0){
  document.getElementsByClassName('Baklava-li').style.display = "none"
  }







  const addToCartPie = document.getElementById('addToCartPie');

  function changeBgcolor() {
    addToCartPie.style.backgroundColor = 'white';
  }
  addToCartPie.addEventListener("click", changeBgcolor);
  
  console.log('addToCart');

  document.getElementById("addToCartPie").addEventListener('click', function() {
    document.getElementById("plusMinusPie").style.display = "block";
    addToCartPie.style.display = 'none';
    borderBoxRedPie.style.display = 'block'
  })

  const addPie = document.querySelector("#plusPie"),
  minusPie = document.querySelector("#minusPie"),
  numberPie = document.querySelector("#numberPie")
  const displayNonePie = document.getElementById('yourAddedItems')

let countPie = 0;
numberPie.innerText = countPie;{
}

const printNumberPie = () => {
  numberPie.innerText = countPie;
  if (numberPie.innerText < 1){
    document.getElementById("plusMinusPie").style.display = "none";
      addToCartPie.style.display = 'block';
      borderBoxRedPie.style.display = 'none'
  }
 };
 const handleAddPie = () => {
  console.log(numberPie.innerText)
  if (numberPie.innerText == 0) {
    displayNonePie.style.display = 'block'
   
  } else {
 }
  countPie = countPie + 1;
  printNumberPie();
  addItemToCartPie();
  addItemToCartConfirmPie();
};
const handleMinusPie = () => {
  console.log(numberPie.innerText)
  if (numberPie.innerText == 1) {
  } 
  if (countPie > 0) {
    countPie = countPie - 1;
    printNumberPie();
    removeItemFromCartPie();
    removeItemFromCartConfirmPie();
  } else if (numberPie.innerText == 0){
    document.getElementById("plusMinusPie").style.display = "none";
    addToCartPie.style.display = 'block';
    borderBoxRedPie.style.display = 'none'  
}
}

addPie.addEventListener("click", handleAddPie);
minusPie.addEventListener("click", handleMinusPie);

const cartPie = [];
const cartItemsPie = document.querySelector('.cart-items');
const cartTotalPie = document.querySelector('.cart-total');

function addItemToCartPie() {
  const productNamePie = 'Lemon Meringue Pie'; 
  const productPricePie = 5.00; 
  const productIdPie = 'Pie';
  const existingProductPie = cart.find(product => product.name === productNamePie);
//stops from displaying the item for more than once
  if (existingProductPie) {
    existingProductPie.quantity += 1;
  } else {
    cart.push({ id: productIdPie, name: productNamePie, price: productPricePie, quantity: 1 });
  }
  
  updateCart();
}
function removeItemFromCartPie() {
  const productNamePie = 'Lemon Meringue Pie'; 
  const existingProductPie = cart.find(product => product.name === productNamePie);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductPie && existingProductPie.quantity > 1) {
    existingProductPie.quantity -= 1;
  } else {
    const index = cart.findIndex(product => product.name === productNamePie);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
 
  updateCart();
}

minusPie.addEventListener("click", function(){
  if(cartItems.children.length === 0){
    document.getElementById('carbon').style.display = "none";
    document.getElementById('confirmButton').style.display = "none";  
    document.getElementById('cartImg').style.display = "block";
  }})


document.getElementById("plusPie").addEventListener('click', function() {
  if (!fontSizeChanged) {
    
    const PieItem = Array.from(document.querySelectorAll('.Pie-li')).find(item => item.innerText.includes('Lemon Meringue Pie'));
    if (PieItem) {
      fontSizeChanged = false;
    }
  }
});
document.getElementById("minusPie").addEventListener('click', function() {
  if (!fontSizeChanged) {
    const PieItem = Array.from(document.querySelectorAll('.Pie-li')).find(item => item.innerText.includes('Lemon Meringue Pie'));
    if (PieItem) {
      fontSizeChanged = false;
    }
  }
});

if (numberPie.innerText = 0){
  document.getElementsByClassName('Pie-li').style.display = "none"
  }






  const addToCartCake = document.getElementById('addToCartCake');

  function changeBgcolor() {
    addToCartCake.style.backgroundColor = 'white';
  }
  addToCartCake.addEventListener("click", changeBgcolor);
  
  console.log('addToCart');

  document.getElementById("addToCartCake").addEventListener('click', function() {
    document.getElementById("plusMinusCake").style.display = "block";
    addToCartCake.style.display = 'none';
    borderBoxRedCake.style.display = 'block'
  })

  const addCake = document.querySelector("#plusCake"),
  minusCake = document.querySelector("#minusCake"),
  numberCake = document.querySelector("#numberCake")
  const displayNoneCake = document.getElementById('yourAddedItems')

let countCake = 0;
numberCake.innerText = countCake;{
}

const printNumberCake = () => {
  numberCake.innerText = countCake;
  if (numberCake.innerText < 1){
    document.getElementById("plusMinusCake").style.display = "none";
      addToCartCake.style.display = 'block';
      borderBoxRedCake.style.display = 'none'
  }
 };
 const handleAddCake = () => {
  console.log(numberCake.innerText)
  if (numberCake.innerText == 0) {
    displayNoneCake.style.display = 'block'
   
  } else {
 }
  countCake = countCake + 1;
  printNumberCake();
  addItemToCartCake();
  addItemToCartConfirmCake();
};
const handleMinusCake = () => {
  console.log(numberCake.innerText)
  if (numberCake.innerText == 1) {
  } 
  if (countCake > 0) {
    countCake = countCake - 1;
    printNumberCake();
    removeItemFromCartCake();
    removeItemFromCartConfirmCake();
  } else if (numberCake.innerText == 0){
    document.getElementById("plusMinusCake").style.display = "none";
    addToCartCake.style.display = 'block';
    borderBoxRedCake.style.display = 'none'  
}
}

addCake.addEventListener("click", handleAddCake);
minusCake.addEventListener("click", handleMinusCake);

const cartCake = [];
const cartItemsCake = document.querySelector('.cart-items');
const cartTotalCake = document.querySelector('.cart-total');

function addItemToCartCake() {
  const productNameCake = 'Red Velvet Cake'; 
  const productPriceCake = 4.50; 
  const productIdCake = 'Cake';
  const existingProductCake = cart.find(product => product.name === productNameCake);
//stops from displaying the item for more than once
  if (existingProductCake) {
    existingProductCake.quantity += 1;
  } else {
    cart.push({ id: productIdCake, name: productNameCake, price: productPriceCake, quantity: 1 });
  }
  
  updateCart();
}
function removeItemFromCartCake() {
  const productNameCake = 'Red Velvet Cake'; 
  const existingProductCake = cart.find(product => product.name === productNameCake);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductCake && existingProductCake.quantity > 1) {
    existingProductCake.quantity -= 1;
  } else {
    const index = cart.findIndex(product => product.name === productNameCake);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
 
  updateCart();
}

minusCake.addEventListener("click", function(){
  if(cartItems.children.length === 0){
    document.getElementById('carbon').style.display = "none";
    document.getElementById('confirmButton').style.display = "none";  
    document.getElementById('cartImg').style.display = "block";
  }})


document.getElementById("plusCake").addEventListener('click', function() {
  if (!fontSizeChanged) {
    
    const CakeItem = Array.from(document.querySelectorAll('.Cake-li')).find(item => item.innerText.includes('Red Velvet Cake'));
    if (CakeItem) {
      fontSizeChanged = false;
    }
  }
});
document.getElementById("minusCake").addEventListener('click', function() {
  if (!fontSizeChanged) {
    const CakeItem = Array.from(document.querySelectorAll('.Cake-li')).find(item => item.innerText.includes('Red Velvet Cake'));
    if (CakeItem) {
      fontSizeChanged = false;
    }
  }
});

if (numberCake.innerText = 0){
  document.getElementsByClassName('Cake-li').style.display = "none"
  }





  const addToCartBrownie = document.getElementById('addToCartBrownie');

  function changeBgcolor() {
    addToCartBrownie.style.backgroundColor = 'white';
  }
  addToCartBrownie.addEventListener("click", changeBgcolor);
  
  console.log('addToCart');

  document.getElementById("addToCartBrownie").addEventListener('click', function() {
    document.getElementById("plusMinusBrownie").style.display = "block";
    addToCartBrownie.style.display = 'none';
    borderBoxRedBrownie.style.display = 'block'
  })

  const addBrownie = document.querySelector("#plusBrownie"),
  minusBrownie = document.querySelector("#minusBrownie"),
  numberbrownie = document.querySelector("#numberBrownie")
  const displayNoneBrownie = document.getElementById('yourAddedItems')

let countBrownie = 0;
numberBrownie.innerText = countBrownie;{
}

const printNumberBrownie = () => {
  numberBrownie.innerText = countBrownie;
  if (numberBrownie.innerText < 1){
    document.getElementById("plusMinusBrownie").style.display = "none";
      addToCartBrownie.style.display = 'block';
      borderBoxRedBrownie.style.display = 'none'
  }
 };
 const handleAddBrownie = () => {
  console.log(numberBrownie.innerText)
  if (numberBrownie.innerText == 0) {
    displayNoneBrownie.style.display = 'block'
   
  } else {
 }
  countBrownie = countBrownie + 1;
  printNumberBrownie();
  addItemToCartBrownie();
  addItemToCartConfirmBrownie();
};
const handleMinusBrownie = () => {
  console.log(numberBrownie.innerText)
  if (numberBrownie.innerText == 1) {
  } 
  if (countBrownie > 0) {
    countBrownie = countBrownie - 1;
    printNumberBrownie();
    removeItemFromCartBrownie();
    removeItemFromCartConfirmBrownie();
  } else if (numberBrownie.innerText == 0){
    document.getElementById("plusMinusBrownie").style.display = "none";
    addToCartBrownie.style.display = 'block';
    borderBoxRedBrownie.style.display = 'none'  
}
}

addBrownie.addEventListener("click", handleAddBrownie);
minusBrownie.addEventListener("click", handleMinusBrownie);

const cartBrownie = [];
const cartItemsBrownie = document.querySelector('.cart-items');
const cartTotalBrownie = document.querySelector('.cart-total');

function addItemToCartBrownie() {
  const productNameBrownie = 'Salted Caramel Brownie'; 
  const productPriceBrownie = 4.50; 
  const productIdBrownie = 'Brownie';
  const existingProductBrownie = cart.find(product => product.name === productNameBrownie);
//stops from displaying the item for more than once
  if (existingProductBrownie) {
    existingProductBrownie.quantity += 1;
  } else {
    cart.push({ id: productIdBrownie, name: productNameBrownie, price: productPriceBrownie, quantity: 1 });
  }
  
  updateCart();
}
function removeItemFromCartBrownie() {
  const productNameBrownie = 'Salted Caramel Brownie'; 
  const existingProductBrownie = cart.find(product => product.name === productNameBrownie);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductBrownie && existingProductBrownie.quantity > 1) {
    existingProductBrownie.quantity -= 1;
  } else {
    const index = cart.findIndex(product => product.name === productNameBrownie);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
 
  updateCart();
}

minusBrownie.addEventListener("click", function(){
  if(cartItems.children.length === 0){
    document.getElementById('carbon').style.display = "none";
    document.getElementById('confirmButton').style.display = "none";  
    document.getElementById('cartImg').style.display = "block";
  }})


document.getElementById("plusBrownie").addEventListener('click', function() {
  if (!fontSizeChanged) {
    
    const BrownieItem = Array.from(document.querySelectorAll('.Brownie-li')).find(item => item.innerText.includes('Salted Caramel Brownie'));
    if (BrownieItem) {
      fontSizeChanged = false;
    }
  }
});
document.getElementById("minusBrownie").addEventListener('click', function() {
  if (!fontSizeChanged) {
    const BrownieItem = Array.from(document.querySelectorAll('.Brownie-li')).find(item => item.innerText.includes('Salted Caramel Brownie'));
    if (BrownieItem) {
      fontSizeChanged = false;
    }
  }
});

if (numberBrownie.innerText = 0){
  document.getElementsByClassName('Brownie-li').style.display = "none"
  }






  const addToCartPanna = document.getElementById('addToCartPanna');

  function changeBgcolor() {
    addToCartPanna.style.backgroundColor = 'white';
  }
  addToCartPanna.addEventListener("click", changeBgcolor);
  
  console.log('addToCart'); 

  document.getElementById("addToCartPanna").addEventListener('click', function() {
    document.getElementById("plusMinusPanna").style.display = "block";
    addToCartPanna.style.display = 'none';
    borderBoxRedPanna.style.display = 'block'
  })

  const addPanna = document.querySelector("#plusPanna"),
  minusPanna = document.querySelector("#minusPanna"),
  numberPanna = document.querySelector("#numberPanna")
  const displayNonePanna = document.getElementById('yourAddedItems')

let countPanna = 0;
numberPanna.innerText = countPanna;{
}

const printNumberPanna = () => {
  numberPanna.innerText = countPanna;
  if (numberPanna.innerText < 1){
    document.getElementById("plusMinusPanna").style.display = "none";
      addToCartPanna.style.display = 'block';
      borderBoxRedPanna.style.display = 'none'
  }
 };
 const handleAddPanna = () => {
  console.log(numberPanna.innerText)
  if (numberPanna.innerText == 0) {
    displayNonePanna.style.display = 'block'
   
  } else {
 }
  countPanna = countPanna + 1;
  printNumberPanna();
  addItemToCartPanna();
  addItemToCartConfirmPanna();
};
const handleMinusPanna = () => {
  console.log(numberPanna.innerText)
  if (numberPanna.innerText == 1) {
  } 
  if (countPanna > 0) {
    countPanna = countPanna - 1;
    printNumberPanna();
    removeItemFromCartPanna();
    removeItemFromCartConfirmPanna();
  } else if (numberPanna.innerText == 0){
    document.getElementById("plusMinusPanna").style.display = "none";
    addToCartPanna.style.display = 'block';
    borderBoxRedPanna.style.display = 'none'  
}
}

addPanna.addEventListener("click", handleAddPanna);
minusPanna.addEventListener("click", handleMinusPanna);

const cartPanna = [];
const cartItemsPanna = document.querySelector('.cart-items');
const cartTotalPanna = document.querySelector('.cart-total');

function addItemToCartPanna() {
  const productNamePanna = 'Vanilla Panna Cotta'; 
  const productPricePanna = 6.50; 
  const productIdPanna = 'Panna';
  const existingProductPanna = cart.find(product => product.name === productNamePanna);
//stops from displaying the item for more than once
  if (existingProductPanna) {
    existingProductPanna.quantity += 1;
  } else {
    cart.push({ id: productIdPanna, name: productNamePanna, price: productPricePanna, quantity: 1 });
  }
  
  updateCart();
}
function removeItemFromCartPanna() {
  const productNamePanna = 'Vanilla Panna Cotta'; 
  const existingProductPanna = cart.find(product => product.name === productNamePanna);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductPanna && existingProductPanna.quantity > 1) {
    existingProductPanna.quantity -= 1;
  } else {
    const index = cart.findIndex(product => product.name === productNamePanna);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
 
  updateCart();
}

minusPanna.addEventListener("click", function(){
  if(cartItems.children.length === 0){
    document.getElementById('carbon').style.display = "none";
    document.getElementById('confirmButton').style.display = "none";  
    document.getElementById('cartImg').style.display = "block";
  }})


document.getElementById("plusPanna").addEventListener('click', function() {
  if (!fontSizeChanged) {
    
    const PannaItem = Array.from(document.querySelectorAll('.Panna-li')).find(item => item.innerText.includes('Vanilla Panna Cotta'));
    if (PannaItem) {
      fontSizeChanged = false;
    }
  }
});
document.getElementById("minusPanna").addEventListener('click', function() {
  if (!fontSizeChanged) {
    const PannaItem = Array.from(document.querySelectorAll('.Panna-li')).find(item => item.innerText.includes('Vanilla Panna Cotta'));
    if (PannaItem) {
      fontSizeChanged = false;
    }
  }
});

if (numberPanna.innerText = 0){
  document.getElementsByClassName('Panna-li').style.display = "none"
  }









  




  
  
   

  const cartConfirm = [];
const cartConfirmItems = document.querySelector('.cartConfirmItems')
const cartTotalConfirm = document.querySelector('.cart-totalConfirm');


//adds item to cart if plus is clicked
function addItemToCartConfirm() {
  const productNameConfirm = 'Waffle with berries'; 
  const productPriceConfirm = 6.50;
  const productIdConfirm = 'waffleConfirm'; 
  const existingProductConfirm = cartConfirm.find(product => product.name === productNameConfirm);
//stops from displaying the item for more than once
  if (existingProductConfirm) {
    existingProductConfirm.quantity += 1;
  } else {
    cartConfirm.push({ id: productIdConfirm, name: productNameConfirm, price: productPriceConfirm, quantity: 1 });
  }
  updateCartConfirm();
}
//removes item from cart if minus is clicked
function removeItemFromCartConfirm() {
  const productNameConfirm = 'Waffle with berries'; 
  const existingProductConfirm = cartConfirm.find(product => product.name === productNameConfirm);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductConfirm && existingProductConfirm.quantity > 1) {
    existingProductConfirm.quantity -= 1;
  } else {
    const index = cartConfirm.findIndex(product => product.name === productNameConfirm);
    if (index !== -1) {
      cartConfirm.splice(index, 1);
    }
  }
  
  updateCartConfirm();
}
//updates price and creates list
function updateCartConfirm() {
  cartConfirmItems.innerHTML = '';
  let total = 0;
  cartConfirm.forEach(product => {
    if (product.quantity > 0) { 
    const li = document.createElement('li');
    li.classList.add(product.id + '-li');
    li.innerHTML = `<span style="margin-left: -55px;" ><img src="assets/images/icon-add-to-cart.svg" alt=""></span>
     <span style="font-size: 15px; font-weight: 700; color: hsl(12, 20%, 44%);">${product.name}</span>
     <span style="font-size: 15px; font-weight: 600; color: hsl(14, 86%, 42%); margin-top: 5px;">x${product.quantity}</span>
     <span style="font-size: 15px; font-weight: 500; color: hsl(7, 20%, 60%); margin: -17px 0px 0px 30px;">${product.price}$</span>  
      <span style="font-size: 15px; font-weight: 500; color: hsl(12, 20%, 44%); margin: -17px 0px 0px 70px;">Total ${product.price * product.quantity}$</span>`
    const ulConfirm = document.getElementById('cartConfirmItems')
    ulConfirm.appendChild(li);
    cartConfirmItems.appendChild(li);  
    total += product.price * product.quantity
  }
  })
  cartTotalConfirm.innerHTML =`<span style="font-size: 15px; font-weight: 500; color: hsl(12, 20%, 44%); "> $${total.toFixed(2)}</span>`;
}




const cartConfirmCart = document.querySelector('.cartConfirm');

confirmButton.addEventListener('click', function() {
  cartConfirmCart.style.display = "block";
}





);

function addItemToCartConfirmCreme() {
  const productNameCreme = 'Vanilla Bean Crème Brûlée'; 
  const productPriceCreme = 7.00; 
  const productIdCreme = 'cremeConfirm';
  const existingProductCreme = cartConfirm.find(product => product.name === productNameCreme);
//stops from displaying the item for more than once
  if (existingProductCreme) {
    existingProductCreme.quantity += 1;
  } else {
    cartConfirm.push({ id: productIdCreme, name: productNameCreme, price: productPriceCreme, quantity: 1 });
  }
  
  updateCartConfirm();
}
function removeItemFromCartConfirmCreme() {
  const productNameCreme = 'Vanilla Bean Crème Brûlée'; 
  const existingProductCreme = cartConfirm.find(product => product.name === productNameCreme);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductCreme && existingProductCreme.quantity > 1) {
    existingProductCreme.quantity -= 1;
  } else {
    const index = cartConfirm.findIndex(product => product.name === productNameCreme);
    if (index !== -1) {
      cartConfirm.splice(index, 1);
    }
  }
 
  updateCartConfirm();
}


function addItemToCartConfirmMacaron() {
  const productNameMacaron = 'Macaron Mix of Five'; 
  const productPriceMacaron = 8.00; 
  const productIdMacaron = 'macaronConfirm';
  const existingProductMacaron = cartConfirm.find(product => product.name === productNameMacaron);
//stops from displaying the item for more than once
  if (existingProductMacaron) {
    existingProductMacaron.quantity += 1;
  } else {
    cartConfirm.push({ id: productIdMacaron, name: productNameMacaron, price: productPriceMacaron, quantity: 1 });
  }
  
  updateCartConfirm();
}
function removeItemFromCartConfirmMacaron() {
  const productNameMacaron = 'Macaron Mix of Five'; 
  const existingProductMacaron = cartConfirm.find(product => product.name === productNameMacaron);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductMacaron && existingProductMacaron.quantity > 1) {
    existingProductMacaron.quantity -= 1;
  } else {
    const index = cartConfirm.findIndex(product => product.name === productNameMacaron);
    if (index !== -1) {
      cartConfirm.splice(index, 1);
    }
  }
 
  updateCartConfirm();
}




function addItemToCartConfirmTiramisu() {
  const productNameTiramisu = 'Classic Tiramisu'; 
  const productPriceTiramisu = 5.50; 
  const productIdTiramisu = 'tiramisuConfirm';
  const existingProductTiramisu = cartConfirm.find(product => product.name === productNameTiramisu);
//stops from displaying the item for more than once
  if (existingProductTiramisu) {
    existingProductTiramisu.quantity += 1;
  } else {
    cartConfirm.push({ id: productIdTiramisu, name: productNameTiramisu, price: productPriceTiramisu, quantity: 1 });
  }
  
  updateCartConfirm();
}
function removeItemFromCartConfirmTiramisu() {
  const productNameTiramisu = 'Classic Tiramisu'; 
  const existingProductTiramisu = cartConfirm.find(product => product.name === productNameTiramisu);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductTiramisu && existingProductTiramisu.quantity > 1) {
    existingProductTiramisu.quantity -= 1;
  } else {
    const index = cartConfirm.findIndex(product => product.name === productNameTiramisu);
    if (index !== -1) {
      cartConfirm.splice(index, 1);
    }
  }
 
  updateCartConfirm();
}





function addItemToCartConfirmBaklava() {
  const productNameBaklava = 'Pistachio Baklava'; 
  const productPriceBaklava = 4.00; 
  const productIdBaklava = 'baklavaConfirm';
  const existingProductBaklava = cartConfirm.find(product => product.name === productNameBaklava);
//stops from displaying the item for more than once
  if (existingProductBaklava) {
    existingProductBaklava.quantity += 1;
  } else {
    cartConfirm.push({ id: productIdBaklava, name: productNameBaklava, price: productPriceBaklava, quantity: 1 });
  }
  
  updateCartConfirm();
}
function removeItemFromCartConfirmBaklava() {
  const productNameBaklava = 'Pistachio Baklava'; 
  const existingProductBaklava = cartConfirm.find(product => product.name === productNameBaklava);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductBaklava && existingProductBaklava.quantity > 1) {
    existingProductBaklava.quantity -= 1;
  } else {
    const index = cartConfirm.findIndex(product => product.name === productNameBaklava);
    if (index !== -1) {
      cartConfirm.splice(index, 1);
    }
  }
 
  updateCartConfirm();
}





function addItemToCartConfirmPie() {
  const productNamePie = 'Lemon Merinque Pie'; 
  const productPricePie = 5.00; 
  const productIdPie = 'pieConfirm';
  const existingProductPie = cartConfirm.find(product => product.name === productNamePie);
//stops from displaying the item for more than once
  if (existingProductPie) {
    existingProductPie.quantity += 1;
  } else {
    cartConfirm.push({ id: productIdPie, name: productNamePie, price: productPricePie, quantity: 1 });
  }
  
  updateCartConfirm();
}
function removeItemFromCartConfirmPie() {
  const productNamePie = 'Lemon Merinque Pie'; 
  const existingProductPie = cartConfirm.find(product => product.name === productNamePie);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductPie && existingProductPie.quantity > 1) {
    existingProductPie.quantity -= 1;
  } else {
    const index = cartConfirm.findIndex(product => product.name === productNamePie);
    if (index !== -1) {
      cartConfirm.splice(index, 1);
    }
  }
 
  updateCartConfirm();
}





function addItemToCartConfirmCake() {
  const productNameCake = 'Red Velvet Cake'; 
  const productPriceCake= 4.50; 
  const productIdCake = 'cakeConfirm';
  const existingProductCake = cartConfirm.find(product => product.name === productNameCake);
//stops from displaying the item for more than once
  if (existingProductCake) {
    existingProductCake.quantity += 1;
  } else {
    cartConfirm.push({ id: productIdCake, name: productNameCake, price: productPriceCake, quantity: 1 });
  }
  
  updateCartConfirm();
}
function removeItemFromCartConfirmCake() {
  const productNameCake = 'Red Velvet Cake'; 
  const existingProductCake = cartConfirm.find(product => product.name === productNameCake);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductCake && existingProductCake.quantity > 1) {
    existingProductCake.quantity -= 1;
  } else {
    const index = cartConfirm.findIndex(product => product.name === productNameCake);
    if (index !== -1) {
      cartConfirm.splice(index, 1);
    }
  }
 
  updateCartConfirm();
}





function addItemToCartConfirmBrownie() {
  const productNameBrownie = 'Salted Caramel Brownie'; 
  const productPriceBrownie= 4.50; 
  const productIdBrownie = 'brownieConfirm';
  const existingProductBrownie = cartConfirm.find(product => product.name === productNameBrownie);
//stops from displaying the item for more than once
  if (existingProductBrownie) {
    existingProductBrownie.quantity += 1;
  } else {
    cartConfirm.push({ id: productIdBrownie, name: productNameBrownie, price: productPriceBrownie, quantity: 1 });
  }
  
  updateCartConfirm();
}
function removeItemFromCartConfirmBrownie() {
  const productNameBrownie = 'Salted Caramel Brownie'; 
  const existingProductBrownie = cartConfirm.find(product => product.name === productNameBrownie);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductBrownie && existingProductBrownie.quantity > 1) {
    existingProductBrownie.quantity -= 1;
  } else {
    const index = cartConfirm.findIndex(product => product.name === productNameBrownie);
    if (index !== -1) {
      cartConfirm.splice(index, 1);
    }
  }
 
  updateCartConfirm();
}





function addItemToCartConfirmPanna() {
  const productNamePanna = 'Vanilla panna Cotta'; 
  const productPricePanna= 6.50; 
  const productIdPanna = 'pannaConfirm';
  const existingProductPanna = cartConfirm.find(product => product.name === productNamePanna);
//stops from displaying the item for more than once
  if (existingProductPanna) {
    existingProductPanna.quantity += 1;
  } else {
    cartConfirm.push({ id: productIdPanna, name: productNamePanna, price: productPricePanna, quantity: 1 });
  }
  
  updateCartConfirm();
}
function removeItemFromCartConfirmPanna() {
  const productNamePanna = 'Vanilla panna Cotta'; 
  const existingProductPanna = cartConfirm.find(product => product.name === productNamePanna);
//if more than one of the same item, removes one from x2 to x1
  if (existingProductPanna && existingProductPanna.quantity > 1) {
    existingProductPanna.quantity -= 1;
  } else {
    const index = cartConfirm.findIndex(product => product.name === productNamePanna);
    if (index !== -1) {
      cartConfirm.splice(index, 1);
    }
  }
 
  updateCartConfirm();
}




const newOrderButton = document.querySelector('#newOrder');
const blur = document.querySelector(".blur");

document.getElementById("confirmButton").addEventListener('click', function() {
  blur.style.filter = 'blur(7px)';
  blur.style.webkitFilter = 'blur(7px)';
  blur.style.pointerEvents = 'none'; 
});

 


newOrderButton.addEventListener('click', function() {
  blur.style.filter = 'blur(0px)';
  blur.style.webkitFilter = 'blur(0px)';
  blur.style.pointerEvents = 'visible'; 
  document.querySelector('.cartConfirm').style.display = 'none'
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(product => {
    if (product.quantity > 0) { 
      if(cartItems.children.length > -1)
        document.getElementById('carbon').style.display = "block";
        document.getElementById('confirmButton').style.display = "block";

  if (product.id === "waffle") {
    count = 0;
    number.innerText = count;
    cartTotal.innerHTML = 0;
    document.getElementById("plusMinus").style.display = "none";
    addToCart.style.display = 'block';
    borderBoxRed.style.display = 'none'
    //deletes items from cart confirm because of 0
    const existingProduct = cartConfirm.find(product => product.id === "waffleConfirm");
    existingProduct.quantity = 0;
    updateCartConfirm();
  } else if (product.id === "creme") {
    countCreme = 0;
    numberCreme.innerText = countCreme;
    cartTotalCreme.innerHTML = 0;
    document.getElementById("plusMinusCreme").style.display = "none";
     addToCartCreme.style.display = 'block';
    borderBoxRedCreme.style.display = 'none'
    const existingProduct = cartConfirm.find(product => product.id === "cremeConfirm");
    existingProduct.quantity = 0;
    updateCartConfirm();
  } else if (product.id === "Macaron") {
    countMacaron = 0;
    numberMacaron.innerText = countMacaron;
    cartTotalMacaron.innerHTML = 0;
    document.getElementById("plusMinusMacaron").style.display = "none";
     addToCartMacaron.style.display = 'block';
    borderBoxRedMacaron.style.display = 'none'
    const existingProduct = cartConfirm.find(product => product.id === "macaronConfirm");
    existingProduct.quantity = 0;
    updateCartConfirm();
  } else if (product.id === "Tiramisu") {
    countTiramisu = 0;
    numberTiramisu.innerText = countTiramisu;
    cartTotalTiramisu.innerHTML = 0;
    document.getElementById("plusMinusTiramisu").style.display = "none";
     addToCartTiramisu.style.display = 'block';
    borderBoxRedTiramisu.style.display = 'none'
    const existingProduct = cartConfirm.find(product => product.id === "tiramisuConfirm");
    existingProduct.quantity = 0;
    updateCartConfirm();
  } else if (product.id === "Baklava") {
    countBaklava = 0;
    numberBaklava.innerText = countBaklava;
    cartTotalBaklava.innerHTML = 0;
    document.getElementById("plusMinusBaklava").style.display = "none";
     addToCartBaklava.style.display = 'block';
    borderBoxRedBaklava.style.display = 'none'
    const existingProduct = cartConfirm.find(product => product.id === "baklavaConfirm");
    existingProduct.quantity = 0;
    updateCartConfirm();
  } else if (product.id === "Pie") {
    countPie = 0;
    numberPie.innerText = countPie;
    cartTotalPie.innerHTML = 0;
    document.getElementById("plusMinusPie").style.display = "none";
     addToCartPie.style.display = 'block';
    borderBoxRedPie.style.display = 'none'
    const existingProduct = cartConfirm.find(product => product.id === "pieConfirm");
    existingProduct.quantity = 0;
    updateCartConfirm();
  } else if (product.id === "Cake") {
    countCake = 0;
    numberCake.innerText = countCake;
    cartTotalCake.innerHTML = 0;
    document.getElementById("plusMinusCake").style.display = "none";
     addToCartCake.style.display = 'block';
    borderBoxRedCake.style.display = 'none'
    const existingProduct = cartConfirm.find(product => product.id === "cakeConfirm");
    existingProduct.quantity = 0;
    updateCartConfirm();
  } else if (product.id === "Brownie") {
    countBrownie = 0;
    numberBrownie.innerText = countBrownie;
    cartTotalBrownie.innerHTML = 0;
    document.getElementById("plusMinusBrownie").style.display = "none";
     addToCartBrownie.style.display = 'block';
    borderBoxRedBrownie.style.display = 'none'
    const existingProduct = cartConfirm.find(product => product.id === "brownieConfirm");
    existingProduct.quantity = 0;
    updateCartConfirm();
  } else if (product.id === "Panna") {
    countPanna = 0;
    numberPanna.innerText = countPanna;
    cartTotalPanna.innerHTML = 0;
    document.getElementById("plusMinusPanna").style.display = "none";
     addToCartPanna.style.display = 'block';
    borderBoxRedPanna.style.display = 'none'
    const existingProduct = cartConfirm.find(product => product.id === "pannaConfirm");
    existingProduct.quantity = 0;
    updateCartConfirm();
  }



  product.quantity = 0;
  if (cartItems.children.length === 0) {
    document.getElementById('cartImg').style.display = "block";
      document.getElementById('carbon').style.display = "none";
      document.getElementById('confirmButton').style.display = "none";
      

  }


}})})