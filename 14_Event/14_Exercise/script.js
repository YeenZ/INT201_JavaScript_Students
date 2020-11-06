let profiles=[
    {
    id: "kriengkrai",
    lect: "Asst.Prof.Kriengkrai Porkaew",
    img: "./imgs/AjKK.jpg",
    academic: [
      "M.Sc. & Ph.D. (Computer Science) the Department of Computer Science, the University of Illinois at Urbana-Champaign, USA",
      "B.Sc. (Computer Science) the Department of Computer Science, Ramkhamhaeng University, Thailand",
      "B.Sc. (Medical Science) the Faculty of Medicine - Siriraj Hospital, Mahidol University, Thailand"
    ],
    teaching: ["Bioinformatics: Biological Sequence Analysis",
          "DB: DBMS, DB Technology, DB Design, Multimedia IR",
          "PL: Java, Perl, Programming Language Concepts",
          "SE: Design Patterns, Web Application Development"
    ]
    },

    {
    id: "pichet",
    lect: "Lect. Pichet Limvajiranan",
    img:"./imgs/AjPichet.jpg",
    academic: ["M.Sc. (Computer Science) 2542 Chulalongkorn University, Thailand",
               "B.Sc. (Computer Science) 2538 Rajabhat Institute Saundusit, Thailand"
    ],
    teaching: ["Data Structures and Algorithms",
                "Java Server Side Programming",
                "Programming Language (Visual Basic, C, Pascal, Java)",
                "Programming Syntax & Semantic"
    ] 
    },

    {
    id: "sanit",
    lect: "Lect. Sanit Sirisawatvatana",
    img:"./imgs/AjSanit.jpg",
    academic: [
        "M.B.A. (Finance) 1997, University of Texas at San Antonio, U.S.A",
        "B.Engineer (Electrical) 1991, Chulalongkorn University"
    ],
    teaching: [
        "Business Intelligence",
        "Data Warehouse",
        "Web Technology",
        "Web Programming"
    ]
    },

    {
    id: "umaporn",
    lect: "Asst.Prof.Umaporn Supasitthmethee",
    img: "./imgs/AjJing.jpg",
    academic: [
        "Ph.D. Computer Science 2551, King Mongkut's University of Technology Thonburi (1-year internship at Kyoto University)",
        "M.Sc. Information Technology 2548, King Mongkut's University of Technology Thonburi",
        "B.Sc. Information Technology 2545, King Mongkut's University of Technology Thonburi",
    ],
    teaching: ["Java Programming", "Web Programming", "XML Technology"
    ]
    },

    {
    id: "tisanai",
    lect: "Mr. Tisanai Chatuporn (Learning Facilitator)",
    img: "./imgs/Tisanai.jpg",
    academic: [
        "M.Sc. Information Technology 2548, King Mongkut's University of Technology Thonburi",
        "B.Sc. Information Technology 2545, King Mongkut's University of Technology Thonburi",
    ],
    teaching: ["Java Programming", "Web Programming"
    ]
    }
];

// set starting item
let currentItem = 0;
let prevProfileIndex;
//select person
const lect=document.getElementById("lect");
const imgcontainer = document.getElementById("img-container");
const academic = document.getElementById("academic");
const teaching = document.getElementById("teaching");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const surprisedBtn=document.querySelector(".surprised-btn");

function showPerson(personIndex){
    const item=profiles[personIndex];
    lect.textContent=item.lect;
    imgcontainer.src=item.img;
    
    let oldAcadLiNode = academic.lastElementChild;
    while (oldAcadLiNode) {
      academic.removeChild(oldAcadLiNode);
      oldAcadLiNode = academic.lastElementChild;
    }
    for(let i=0;i<item.academic.length;i++){
      let newAcadLiNode=document.createElement("li");
      newAcadLiNode.textContent = item.academic[i];
      academic.appendChild(newAcadLiNode);
    }

    oldTeacLiNode = teaching.lastElementChild;
    while (oldTeacLiNode) {
      teaching.removeChild(oldTeacLiNode);
      oldTeacLiNode = teaching.lastElementChild;
    }

    for (let i = 0; i < item.teaching.length; i++) {
       let newTeacLiNode = document.createElement("li");
       newTeacLiNode.textContent = item.teaching[i];
       teaching.appendChild(newTeacLiNode);
     }
}

// show next person
nextBtn.addEventListener("click", function () {
  prevProfileIndex = currentItem;
  currentItem++;
  if (currentItem > profiles.length - 1) {
    currentItem = 0;
  }
  addToThumbnail(prevProfileIndex, currentItem);
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
  prevProfileIndex = currentItem;
  currentItem--;
  if (currentItem < 0) {
    currentItem = profiles.length - 1;
  }
  addToThumbnail(prevProfileIndex, currentItem);
  showPerson(currentItem);
});

// show random person
surprisedBtn.addEventListener("click", function () {
  prevProfileIndex = currentItem;
  currentItem = Math.floor(Math.random() * profiles.length);
  addToThumbnail(prevProfileIndex, currentItem);
  showPerson(currentItem);
});

function addToThumbnail(oldProfileIndex, currentProfileIndex){
    let replaceThumbnail = document.getElementById(
      profiles[currentProfileIndex].id
    );
    let replaceLectQueryImg = replaceThumbnail.getElementsByTagName("img")[0];
    let replaceLectQueryP = replaceThumbnail.getElementsByTagName("p")[0];
    replaceLectQueryImg.src = profiles[oldProfileIndex].img;
    replaceLectQueryP.textContent = profiles[oldProfileIndex].lect;
    replaceThumbnail.id = profiles[oldProfileIndex].id;
     
}

//search lecturer name
let findLect=function (){
let lectQuery = document.getElementById("lect-value").value;
for(let i=0;i<profiles.length;i++){
      if (profiles[i].id.includes(lectQuery.toLowerCase())){
        prevProfileIndex = currentItem;
        currentItem = i;
        addToThumbnail(prevProfileIndex, currentItem);
        showPerson(currentItem);
        break;
      }
  }
}
let searchBtn = document.getElementById("lect-search");
searchBtn.addEventListener("click", findLect);

function onlyAlpha(event){
  let letterCode = event.keyCode;
  if (letterCode > 31 && (letterCode < 48 || letterCode > 57)) return true;
  return false;
}


