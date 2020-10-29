//1. Screen Size (ScreenWidth, ScreenHeight)
console.log(
  `screen [width, height]: (${window.screen.width}, ${window.screen.hight})`
);
//2. Window Outer Size (OuterWidth, OuterHeight)

console.log(
  `Window Outer Size (including address, tabs, and side bars) [width, height]: (${window.outerWidth}, ${window.outerHeight})`
);

console.log(
  `Window Inner Size (including scrollbars) [width, height]: (${window.innerWidth}, ${window.innerHeight})`
);

//3. Open Window with its features

function open_program_page() {
  let programWin = window.open(
    "./program_page/program_page.html",
    "bscit",
    "width=400,height=600"
  );
  programWin.moveBy(50,50);
 
}

function open_school_page() {
  let schoolWindow = window.open(
    "https://www.sit.kmutt.ac.th/","sit",
    "width=500, height=700"
  );
   schoolWindow.moveTo(500, 0);
  
}





