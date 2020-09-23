new fullpage("#myPage", {
  menu: "#menu",
  autoScrolling: true,
  navigation: true,
  scrollBar: true,
  scrollOverflow: false,
  anchors: [
    "home",
    "education",
    "licenses",
    "experience",
    "volunteer",
    "contact",
  ],
});

const goDown = document.getElementById("goDown");

goDown.addEventListener("click", function () {
  fullpage_api.moveSectionDown();
});
