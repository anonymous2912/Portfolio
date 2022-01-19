var effect1 = document.getElementById("myeffect1");
var img1 = document.getElementById("myImg1");
var effectImg1 = document.getElementById("img01");
var captionText1 = document.getElementById("caption1");
img1.onclick = function () {
  effect1.style.display = "block";
  effectImg1.src = this.src;
  captionText1.innerHTML = this.alt;
};
var span1 = document.getElementsByClassName("close1")[0];
span1.onclick = function () {
  effect1.style.display = "none";
};

var effect2 = document.getElementById("myeffect2");
var img2 = document.getElementById("myImg2");
var effectImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function () {
  effect2.style.display = "block";
  effectImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};
var span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function () {
  effect2.style.display = "none";
};

var effect3 = document.getElementById("myeffect3");
var img3 = document.getElementById("myImg3");
var effectImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function () {
  effect3.style.display = "block";
  effectImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};
var span3 = document.getElementsByClassName("close3")[0];
span3.onclick = function () {
  effect3.style.display = "none";
};

$(".button_cv").click(function () {
  window.open("https://drive.google.com/file/d/1BJ9m9FEwqy2zK8WOMwffLukWx0AxkoKa/view?usp=sharing", "_blank");
});

$(".content_sm img").click(function () {
  window.open(this.nextSibling.nextSibling.nextSibling.href);
});
