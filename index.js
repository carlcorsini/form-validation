document.addEventListener('DOMContentLoaded', function() {
  // let createDiv = document.createElement('div')
  let form = document.getElementById("form1")
  let deliveryRadio = document.querySelector(".delivery-radio")
  let pickupRadio = document.querySelector(".pickup-radio")

  form.addEventListener('submit', pizzaOrder);
  deliveryRadio.addEventListener('click', displayForm);
  pickupRadio.addEventListener('click', hideForm)
})


function displayForm(event) {
  let deliveryRadio = document.querySelector(".delivery-radio")
  let addressForm = document.querySelector(".address-form")
  if (deliveryRadio.checked) {
    addressForm.classList.remove("hidden")
  }
}

function hideForm(event) {
  let pickupRadio = document.querySelector(".pickup-radio")
  let addressForm = document.querySelector(".address-form")
  if (pickupRadio.checked) {
    addressForm.classList.add("hidden")
  }
}

function pizzaOrder(event) {
  event.preventDefault()
  let radios = document.getElementsByClassName('radios')
  let checkbox = document.getElementsByClassName('checkbox')
  let extra = document.getElementsByClassName('extra')
  let toppings = document.getElementsByClassName('toppings')
  console.log(toppings);
  let length = radios.length+checkbox.length
  let radioResult = ''
  let checkboxResult= ''
  let price = 0;

  for (var i = 0; i < length; i++ ) {
    if (i < radios.length && radios[i].checked) {
      radioResult += radios[i].value + ' '
    } if (i < checkbox.length && checkbox[i].checked) {
      checkboxResult += checkbox[i].value + ' '
    } if (i < extra.length && extra[i].checked){
      price += Number(extra[i].dataset.price)
    }
  }

  //set div variables
  let resultP = document.querySelector('.result-p1')
  resultP.innerHTML =  radioResult + ' with ' + checkboxResult
  let totalDiv = document.querySelector('.result-price')
  //
  let taxDiv = document.querySelector('.tax')
  let withTaxDiv = document.querySelector('.with-tax')
  let suggestedTipDiv = document.querySelector('.suggested-tip')
  //
  let addressDiv = document.querySelector('.address-result')
  let cityDiv = document.querySelector('.city-result')
  let zipDiv = document.querySelector('.zip-result')
  let phoneDiv = document.querySelector('.phone-result')
  let emailDiv = document.querySelector('.email-result')
  let notesDiv = document.querySelector('.notes-result')
  //
  let address = document.querySelector('.street-address').value
  let city = document.querySelector('.city').value
  let zip = document.querySelector('.zip').value
  let phoneNum = document.querySelector('.phone-number').value
  let email = document.querySelector('.email').value
  let notes = document.querySelector('.notes').value
  // calculate price
  let subtotal = Number(Math.round(price*100)/100).toFixed(2)
  let tax = Number(subtotal * .08)
  let withTax = Number(tax) + Number(subtotal)
  let suggestedTip = Number(Math.round((withTax * .15)*100)/100).toFixed(2)

  // populate div`with price data
  totalDiv.innerHTML = "Subtotal: $" + subtotal
  taxDiv.innerHTML = "Tax: $" + tax.toFixed(2);
  withTaxDiv.innerHTML = "Total: $" + withTax.toFixed(2);
  suggestedTipDiv.innerHTML = "Suggested Tip(15%): $" + suggestedTip;
  // populate div with address data
  addressDiv.innerHTML = address;
  cityDiv.innerHTML = city;
  zipDiv.innerHTML = zip;
  phoneDiv.innerHTML = phoneNum;
  emailDiv.innerHTML = email
  notesDiv.innerHTML = 'notes:' + notes

  let deliveryRadio = document.querySelector(".delivery-radio")
  if (deliveryRadio.checked && address === "") {
    alert('Must include delivery address!')
  }
}
