function backTo() {
  history.back();
  
}

function nextTo() {
  history.forward();
}

function home(){
  history.go(0);
}

function openMenu(menu){

  let menuLink;
  switch (menu) {
    case "home":
      menuLink = "./pages/home.html";break;
    case "content1":
      menuLink = "./pages/c1/content1.html";
      break;
    case "content2":
      menuLink = "./pages/c2/content2.html";
      break;
    case "content3":
      menuLink = "./pages/c3/content3.html";
      break;
  }
  window.open(menuLink,target="iframe_content");
}

