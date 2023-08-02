function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light"); //tem a msm funcionalidade do codigo a cima

  const img = document.querySelector("#profile img") // armazena a foto

  if (html.classList.contains("light")) {
    img.setAttribute('src', '#')  //foto do modo light
    img.setAttribute('alt', 'Foto de perfil modo light')
} else {
    img.setAttribute('src', 'https://github.com/renatorrocha.png') //foto do modo dark
    img.setAttribute('alt', 'Foto de perfil modo dark')
  }
}
