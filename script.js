function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light"); //tem a msm funcionalidade do codigo a cima

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar-light.png')
} else {
    img.setAttribute('src', 'https://github.com/renatorrocha.png')
  }
}
