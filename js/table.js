render();
async function render() {
  try {
    console.log("ici");
    // ici on cree une fonction render asynchrone qui sert a recup les données sur une meme page
    let recuperation = await fetch(
      // je cree une variable qui recupere à l'aide de fetch les villes en attente dans le lien
      "https://restcountries.com/v3.1/region/europe"
    );
    let reponsedemoi = await recuperation.json();
    // la variable stocke le fetch et le traduit en json car le json n'est pas comme js

    //   let tbody = document.getElementById("tbody");

    //   tbody.innerHTML = "";
    console.log(reponsedemoi);
    let tbody = "";

    for (let i in reponsedemoi) {
      let area = reponsedemoi[i].area;
      let population = reponsedemoi[i].population;
      tbody += `<tr><td class="fw-bold">${
        reponsedemoi[i].name.official
      }</td><td class="text-end">${numberWithCommas(
        area
      )}</td><td class="text-end" >${numberWithCommas(population)}</td><td>${
        reponsedemoi[i].capital
      }</td></tr>`;
      // console.log(i);
      document.getElementById("tbody").innerHTML = tbody;
    }
  } catch (err) {
    // la boucle parcours le tbody et affiche a chaque tour un nom de plus montenegro 0, pays bas 1, france2

    let btn = document.getElementById("err");
    btn.innerHTML =
      "<button type=button class=btn-warning >" + "Reload" + "</button>";
    btn.setAttribute("onclick", "clic()");

    console.log("je suis dans le catch" + err);
    window.addEventListener("load", function (event) {
      console.log("Toutes les ressources sont chargées !");
      render();
    });
    function clic() {
      location.reload();
    }
  }
}
// la boucle parcours le tableau et affiche a chaque tour un nom de plus montenegro 0, pays bas 1, france2

function numberWithCommas(number) {
  console.log(numberWithCommas);
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
