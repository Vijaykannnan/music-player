let artist = [
  {
    img: "images/u1.jpeg",
    artistName: "Yuvan",
    artistContent: '"Yuvan Motivation Lyrics Yuvan Motivation Lyrics"',
    audioName: "musics/u1.mp3",
  },
  {
    img: "images/arr1.jpeg",
    artistName: "Ar Rahuman",
    artistContent: '"Ar Rahuman Motivation,  Rahuman Motivation"',
    audioName: "musics/arr.mp3",
  },
  {
    img: "images/ani.jpeg",
    artistName: "Aniruth",
    artistContent: '"Aniruth Motivation Lyrics  Motivation Lyrics"',
    audioName: "musics/vathi.mp3",
  },
  {
    img: "images/sbb.jpg",
    artistName: "Sbb",
    artistContent: '"sbb Motivation Lyrics sbb Motivation Lyrics"',
    audioName: "musics/ani.mp3",
  },
];

let img = document.querySelector("#image");
let title = document.querySelector(".title");
let content = document.querySelector(".content");
let track = document.querySelector("#track");
let audio = document.querySelector("#audio");
let firstVal = document.querySelector(".firstval");
let secondVal = document.querySelector(".secondval");
let changeIcon = document.querySelector("#changeIcon");

count = -1;
function next() {
  count = count + 1;
  if (count <= artist.length) {
    if (count == artist.length) {
      count = 0;
    }

    img.src = artist[count].img;
    title.innerHTML = artist[count].artistName;
    content.innerHTML = artist[count].artistContent;
    audio.src = artist[count].audioName;
  }
  //window load ku next fn a pass pannirukan,so load agum pothu ennaku fas fa-play icon than irukanum
  changeIcon.className = "fas fa-play";

  //entha timeout ah ethuku next fn la potrukanah ,ippom oru song play agum so athoda duration irukum so next kodukum pothu ennaku palaya song oda duration than appdiyae irukum ,so next function la na koduthanah na next kodukum pothu next song ennaku play agum so athoda duration ennaku grap pannirum
  setTimeout(function () {
    //range oda width ,audio.duration vera full irukum ex: 0.26 full duration ah athu oda full duration vera range width varum ,ana prev icon kodukum pothu last enna song play achioh athoda duration than varum so prev function laiyum setTimeout() fn podanum

    track.max = audio.duration;
    // console.log(audio.duration);
    //range fn ku pass pantrom audio.duration ah athu oda min and sec return pannum
    secondVal.innerHTML = range(audio.duration);
  }, 300);
}
function prev() {
  count = count - 1;
  if (count < artist.length) {
    if (count == -1 || count == -2) {
      calculate = artist.length - 1;
      count = calculate;
    }

    img.src = artist[count].img;
    title.innerHTML = artist[count].artistName;
    content.innerHTML = artist[count].artistContent;
    audio.src = artist[count].audioName;
  }

  //prev icon prsee pannum pothu ennaku intha icon load aganum
  changeIcon.className = "fas fa-play";

  setTimeout(function () {
    //prev icon kodukum pothu last enna song play achioh athoda duration than varum so prev function laiyum setTimeout() fn podanum

    track.max = audio.duration;
    //range fn ku pass pantrom audio.duration ah athu oda min and sec return pannum
    secondVal.innerHTML = range(audio.duration);
  }, 300);
}

function stop() {
  if (audio.paused) {
    audio.play();
    changeIcon.className = "fas fa-pause";
  } else {
    audio.pause();
    changeIcon.className = "fas fa-play";
  }
}

function range(val) {
  let min = Math.floor(val / 60);
  let sec = Math.floor(val % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  return `${min} : ${sec}`;
}

setInterval(function () {
  //antha range crt ah move pannnah
  track.value = audio.currentTime;
  // console.log(audio.currentTime);

  //range fn ku pass pantrom audio.currentTime ah athu oda min and sec return pannum
  firstVal.innerHTML = range(audio.currentTime);
}, 500);

//enga range ah click pantranoh anga track.value=audio.currenTime agiranum
track.addEventListener("change", function () {
  audio.currentTime = track.value;
  // console.log(track.value);
});

window.addEventListener("load", next);

