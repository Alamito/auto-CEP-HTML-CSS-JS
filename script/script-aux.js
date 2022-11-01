let flagCep = false;
let backspace = false;

const CEP = document.querySelector('.CEP');
const state = document.querySelector('.state');
const city = document.querySelector('.city');
const district = document.querySelector('.district');
const address = document.querySelector('.address');

function onlynumber(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode(key);
   var regex = /^[0-9.-]+$/;
   if(!regex.test(key)) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}