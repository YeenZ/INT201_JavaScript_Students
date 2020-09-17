let langs = ["HTML", "JavaScript", "Nodejs"];
let langElement = document.querySelector("#programlang");

//create <p> element with text node
pElement = document.createElement("p");

//add "id" attribute to <p> 
pElement.setAttribute("id", "pId");
console.log(`attr: ${pElement.getAttribute("id")}`);

let msg = document.createTextNode("Hello, Text Node");
pElement.appendChild(msg);
document.body.insertBefore(pElement, langElement);

//child node of p is text node
//console.log(`The first child of <p> : ${pElement.firstChild}`); //text

//create comment node
let commentNode=document.createComment("This is comment before <li> created");
langElement.appendChild(commentNode);


//create <li> node list
for (const lang of langs) {
    let li=document.createElement("li");
    li.innerHTML=lang;
    langElement.appendChild(li);
}
//child node of <ul> is comment node
console.log(`first child node: ${langElement.firstChild}`); //comment node
//child element of <ul> is <li> element node
console.log(`first child element: ${langElement.firstElementChild}`);// <li> node


let firstLangElement=langElement.firstElementChild;
let newLangNode=document.createElement("li");
newLangNode.innerHTML="Java";
langElement.insertBefore(newLangNode, firstLangElement);
let newLastLangNode=document.createElement("li");
newLastLangNode.innerHTML="C++";
langElement.insertBefore(newLastLangNode, null);
langElement.replaceChild(newLastLangNode, newLangNode);
langElement.removeChild(langElement.firstElementChild);

// let div=document.createElement('div');
// div.innerHTML='<p>Create new element example</p>';
// document.body.appendChild(div);

/*let fragment = new DocumentFragment();
languages.forEach((language) => {
  let li = document.createElement("li");
  li.innerHTML = language;
  fragment.appendChild(li);
});

langElement.appendChild(fragment);*/
/*
JS
TypeScript
NodeJs*/