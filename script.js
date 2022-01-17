function paraditKalendaru() {
  var dienas = parseInt(document.getElementById("dienas").value); //Dienu skaits no ievades lauka
  var pirmaDiena = parseInt(document.getElementById("pirmaDiena").value); //1. nedēļas diena no ievades lauka
  var rutinas = parseInt(dienas + (pirmaDiena-1)); //Rūtiņu skaits (atkarīgs no mēneša pirmās dienas)
  var datums = 1 //Datumu skaitītājs, sākas ar 1. datumu
  var nedelasDiena = 1 //Nedēļas dienu skaitītājs

  var kalendars = document.getElementById("kalendars"); //Tabulas elements
  var nedela = document.createElement("tr"); //Jauna nedēļa (tabulas rinda)
  for (var i = 1; i <= rutinas; i++) { //Cikls
    var diena = document.createElement("td"); //Jauna šūna (diena)
    if (nedelasDiena == 6 || nedelasDiena == 7) { diena.style.backgroundColor = "orange"; } //Iestata oranžu krāsu Se un Sv
    nedelasDiena++; //Nākamā nedēļas diena
    if (i >= pirmaDiena) { //Sazarojums numurē dienas
      diena.innerHTML = datums; //Iestata skaitli
      datums += 1; //Nākamais datums
      diena.classList.add("datums"); //Iestata klasi tabulas šūnai
    }
    nedela.appendChild(diena); //Pievieno šūnu tabulas rindai (dienu nedēļai)
    if (i % 7 == 0 || i == rutinas) { //ja nonāk pie Sv...
      kalendars.appendChild(nedela); //Pievieno nedēļu (rindu) kalendāram 
      var nedela = document.createElement("tr"); //Veido jaunu tabulas rindu (nedēļu)
      nedelasDiena = 1; //Iesāk jaunu nedēļu ar pirmdienu
    }
    }
}