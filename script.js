let darkmode = null;
const themeSwitch = document.getElementById("theme-toggle");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
