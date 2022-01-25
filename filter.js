const inputs = document.querySelectorAll("input");
const forms = document.querySelectorAll("form");

function handleUpdate(event) {
  const suffix = event.target.getAttribute("data-sizing") || "";
  const name = event.target.getAttribute("name") || "";
  const value = event.target.value || "";
  document.documentElement.style.setProperty(`--${name}`, value + suffix);
}

document.getElementById("reset").onclick = function () {
  document.getElementById("blur").value = 0;
  document.getElementById("invert").value = 0;
  document.getElementById("sepia").value = 0;
  document.getElementById("saturate").value = 100;
  document.getElementById("hue").value = 0;
  forms.forEach((form) => form.oninput());
  inputs.forEach((input) => {
    const suffix = input.getAttribute("data-sizing") || "";
    const name = input.getAttribute("name") || "";
    const value = input.getAttribute("value") || "";
    document.documentElement.style.setProperty(`--${name}`, value + suffix);
  });
};

const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector(".image-container");

fileInput.addEventListener("change", function (e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    imageContainer.innerHTML = "";
    imageContainer.append(img);
  };
  reader.readAsDataURL(file);
});

const base =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images";
const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];

let i = 0;

document.getElementById("next").onclick = function () {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  let time;
  if (hours >= 6 && minutes >= 0 && hours <= 11 && minutes <= 59) {
    time = "morning";
  } else if (hours >= 12 && minutes >= 0 && hours <= 17 && minutes <= 59) {
    time = "day";
  } else if (hours >= 18 && minutes >= 0 && hours <= 23 && minutes <= 59) {
    time = "evening";
  } else {
    time = "night";
  }
  const index = i++ % images.length;
  const newSrc = `${base}/${time}/${images[index]}`;
  document.getElementById("img").setAttribute("src", newSrc);
};

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const download = document.getElementById("download");

function drawImage() {
  const myimg = document.querySelector("img");
  console.log(myimg.src);
  const imgg = new Image();
  imgg.setAttribute("crossOrigin", "anonymous");
  imgg.src = myimg.src;
  imgg.onload = function () {
    ctx.filter = img.style.filter;
    drawImage();
  };
}

download.addEventListener("click", function (e) {
  console.log(canvas.toDataURL());
  var link = document.createElement("a");
  link.download = "download.png";
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});

function toggleFullscreen() {
  if (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement
  ) {
    disableFullscreen();
  } else {
    enableFullscreen();
  }
}

function enableFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

function disableFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
