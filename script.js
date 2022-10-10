class Etudiant {
  constructor() {
    this.Nom = prompt("Entrer votre nom: ");
    this.Prenom = prompt("Entrer votre prenom: ");
    this.Contact = prompt("Entrer votre contact: ");
    this.Image = prompt("Entrer votre image: ");
  }

  get nom() {
    return this.Nom;
  }

  get prenom() {
    return this.Prenom;
  }

  get contact() {
    return this.Contact;
  }

  get image() {
    return this.Image;
  }
}

var Liste_parrains = [];
var Liste_filleuls = [];

function Enregitrer_parrain() {
  let parrain = new Etudiant();
  Liste_parrains.push(parrain);
}

function Enregitrer_filleul() {
  let filleul = new Etudiant();
  Liste_filleuls.push(filleul);
}

Enregitrer_filleul();

alert(Liste_filleuls[0].Nom);

var pop = document.querySelector("#popup");

var boite = document.querySelector(".Popup");

pop.addEventListener("click", function (e) {
  boite.classList.toggle("active");
});
