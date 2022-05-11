//Form Elements
let elFormContact = document.querySelector(".js-add-contact");
let elNameInput = document.querySelector(".js-name");
let elLastName = document.querySelector(".js-last-name")
let elNumberInput = document.querySelector(".js-number");
let elAddBtn = document.querySelector(".add-btn");


//Ansswer
let elContactList = document.querySelector(".js-contact-list")

//Conatcts arry
let conatcts = [];


let appendElementCotacts = function() {
  for(let i = 0; i < conatcts.length; i++) {
    
    let NewLi = document.createElement("li")
    
    let NewContactName = createElement ( "p", "answer-text", conatcts[i].name);
    
    let NewContactLastName = createElement ( "p", "answer-list", conatcts[i].lastName);
    
    let NewContactNumber = createElement("p","answer", conatcts[i].number)
    
    
    NewLi.append(NewContactName,NewContactLastName,NewContactNumber)
    elContactList.append(NewLi);
  }
  elNameInput.value = null;
  elLastName.value = null;
  elNumberInput.value = null;
}

//Form arry push
elAddBtn.addEventListener("click", function(e) {
  e.preventDefault();
  
  let name = elNameInput.value.trim();
  let lastName = elLastName.value.trim();
  let number = elNumberInput.value.trim();
  
  if (name == "" ||  name.length < 3 || name.length > 15) {
    elNameInput.style.borderColor = "red";
    return
  }
  
  if (lastName == "" || lastName.length < 3 || lastName.length > 15) {
    elLastName.style.borderColor = "red";
    return
  }
  if (number == "" || number.length < 3 || number.length > 9 || isNaN(number)) {
    elNumberInput.style.borderColor = "red";
    return
  }

  elNameInput.style.borderColor= "#000";
  elLastName.style.borderColor= "#000";
  elNumberInput.style.borderColor= "#000";
  
  conatcts.push({
    name,
    lastName,
    number,
  })

  elContactList.innerHTML ="";
  
  console.log(conatcts);
  
  appendElementCotacts();
})
elContactList.addEventListener("click", function(evt){
  if(evt.target != elContactList){
    let indexItem =conatcts.indexOf(evt.target.textContent.toLowerCase())
    conatcts.splice(indexItem, 1)
    elContactList.removeChild(evt.target);
  }
})