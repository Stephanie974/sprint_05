async function render() {
  // ici on cree une fonction render asynchrone qui sert a recup les données sur une meme page
  let recuperation = await fetch(
    // je cree une variable qui recupere à l'aide de fetch les villes en attente dans le lien
    "https://restcountries.com/v3.1/region/europe"
  );
  let reponsedemoi = await recuperation.json();
  // la variable stocke le fetch et le traduit en json car le json n'est pas comme js
  let vue = "";
  for (let i in reponsedemoi) {
    vue += `<li>${reponsedemoi[i].name.official}</li>`;
    console.log(i);
    document.getElementById("list").innerHTML = vue;
  }
}
// la boucle parcours le tableau et affiche a chaque tour un nom de plus montenegro 0, pays bas 1, france2
render();
