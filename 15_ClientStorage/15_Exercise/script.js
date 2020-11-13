const c1 = document.getElementById("color1");
const c2 = document.getElementById("color2");
const c3 = document.getElementById("color3");
const c4 = document.getElementById("color4");
const c5 = document.getElementById("color5");
const c6 = document.getElementById("color6");

//let yourBgColor;

let bgColor = function (event) {
  //yourBgColor=event.target.innerHTML;
  let cookieText =
    encodeURIComponent("yourBgColor") +
    "=" +
    encodeURIComponent(event.target.innerHTML) +
    ";max-age=604800";
  document.cookie = cookieText;

  console.log(`cookieText: ${cookieText}`);
  document.body.style.backgroundColor = event.target.innerHTML;
};

c1.addEventListener("click", bgColor);
c2.addEventListener("click", bgColor);
c3.addEventListener("click", bgColor);
c4.addEventListener("click", bgColor);
c5.addEventListener("click", bgColor);
c6.addEventListener("click", bgColor);

function get(name) {
  console.log(`all cookies: ${document.cookie}`);
  let cookieName = `${encodeURIComponent(name)}=`,
    cookieStart = document.cookie.indexOf(cookieName),
    cookieValue = null;
  console.log(`cookieName = ${cookieName}`);
  console.log(`cookieStart = ${cookieStart}`);

  if (cookieStart > -1) {
    let cookieEnd = document.cookie.indexOf(";", cookieStart);
    console.log(`cookieEnd = ${cookieEnd}`);
    if (cookieEnd == -1) {
      cookieEnd = document.cookie.length;
    }
    cookieValue = decodeURIComponent(
      document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
    );
    console.log(`cookieValue = ${cookieValue}`);
  }

  return cookieValue;
}

window.addEventListener("load", () => {
  let cookieValue = get("yourBgColor");
  console.log(`cookieValue2 = ${cookieValue}`);
  if (cookieValue) document.body.style.backgroundColor = cookieValue;
});
