
//Read more CSS selector at: https://www.w3schools.com/cssref/trysel.asp
//1.1 show the first menu of appetizer
//1.2 show a second menu item  of soup menu
//1.3 show all menus of vegan class
//1.4 insert a new list item "<li class="seafood">Shrimp Rolls</li>" to the end of appetizer menu 
//1.5 change a classname of Tuna Sandwich to "seafood"
//1.6 insert a new list item "<li class="seafood">Shrimp-Corn Soup></li> before <li class="meat">Beef Soup</li>
//1.7 show the menu category [Appetizer|Soup] of a list item <li class="meat">Beef Soup</li>
//1.8 remove a menu item <li class="meat">Beef Soup</li>


//1.1 show the first menu of appretizer
const firstMenuAppr=document.getElementById("appetizer").firstElementChild;
console.log(firstMenuAppr);// <li class="vegan">Vegetable Rolls</li>

//1.2 show a second menu item  of soup menu
const secondSoupMenu=document.querySelector("#soup li:nth-child(2)");
console.log(secondSoupMenu); //<li class="vegan">Vegetable Soup</li>

//1.3 show all menus of vegan class
const veganSoupMenu = document.querySelectorAll(".vegan");
console.log(veganSoupMenu);

//1.4 insert a new list item "<li class="seafood">Shrimp Rolls</li>" to the end of appetizer menu 
let shrimpRollMenu=document.createElement("li");
shrimpRollMenu.className="seafood";
shrimpRollMenu.innerHTML="Shrimp Rolls";

const appetizerMenu=document.getElementById("appetizer");
appetizerMenu.appendChild(shrimpRollMenu);

//1.5 change a classname of Tuna Sandwich to "seafood"
const meatAppetizerMenu=document.querySelectorAll("#appetizer .meat");
console.log(`Meat Appetizer Menu: ${meatAppetizerMenu.length}`);
for (let i = 0; i < meatAppetizerMenu.length; i++) {
  if (meatAppetizerMenu[i].textContent == "Tuna Sandwich")
    meatAppetizerMenu[i].className = "seafood";
}

//1.6 insert a new list item "<li class="seafood">Shrimp-Corn Soup></li> before <li class="meat">Beef Soup</li>
//create element <li class="seafood">Shrimp-Corn Soup></li>
let shrimpCornSoupMenu = document.createElement("li");
shrimpCornSoupMenu.className = "seafood";
shrimpCornSoupMenu.innerHTML = "Shrimp-Corn Soup";
let beefSoupMenu;

//Solution#1: Finding Beef Soup Node,if you know the order (nth) of <li>  
beefSoupMenu=document.querySelector("#soup li:nth-child(3)");
console.log(`Beef Soup Menu: ${beefSoupMenu}`);

//Solution#2: Finding Beef Soup Node by comparing with text value
/*const meatMenu = document.querySelectorAll(".meat");
console.log(`Meat Menu: ${meatMenu.length}`);
for (let i = 0; i < meatMenu.length; i++) {
  if (meatMenu[i].textContent == "Beef Soup") {
    beefSoupMenu = meatMenu[i];
    break;
  }
}*/

//insert beefSoupMenu before shrimpCornSoupMenu
const soupMenu = document.querySelector("#soup");
soupMenu.insertBefore(shrimpCornSoupMenu, beefSoupMenu);

//1.7 show the menu category [Appetizer|Soup] of a list item <li class="meat">Beef Soup</li>
const parentBeefSoupMenu=beefSoupMenu.parentElement;
console.log(parentBeefSoupMenu);

//1.8 remove a menu item <li class="meat">Beef Soup</li>
parentBeefSoupMenu.removeChild(beefSoupMenu);


//*******************************************************************

//attribute is not a child of element, it is its attribute.
const imgElement=document.getElementsByTagName("img");
imgFirstChildNode=console.log(imgElement[0].childNodes);//undefined
console.log(imgFirstChildNode); //undefined

imgAttrNames = imgElement[0].getAttributeNames();

//use ownerElement instead of parent element
for(let attrName of imgAttrNames){
  let attrValue = imgElement[0].getAttribute(attrName);
  console.log(`name = ${attrName} , value= ${attrValue}`); 
  //console.log(imgElement[0].getAttributeNode(attrName).parentElement); //null
  console.log(imgElement[0].getAttributeNode(attrName).ownerElement); //<img.../>
}

//text node is a child of element and the element which the text belongs is a parent.
const h3Element = document.getElementsByTagName("h3");
const h3FirstChildNode=h3Element[0].childNodes;
console.log(h3FirstChildNode[0]);
console.log(h3FirstChildNode[0].parentElement);



