const nextButton = document.querySelector('#next-button');
const introPage = document.getElementById('intro');
const menuPage = document.getElementById('menu');
const leftButton = document.querySelector('#left-arrow');
const rightButton = document.querySelector('#right-arrow');
const infoButtons = document.querySelectorAll('.infobutton');

nextButton.addEventListener('click', () => {
  introPage.style.display = 'none';
  menuPage.style.display = 'block';
  showMenus();
});

let currentMenuIndex = 0;
const totalMenusToShow = 3;

function showMenus() {
  const menus = document.querySelectorAll('.Menues li');

  for (let i = 0; i < menus.length; i++) {
    if (i >= currentMenuIndex && i < currentMenuIndex + totalMenusToShow) {
      menus[i].style.display = 'inline-block';
    } else {
      menus[i].style.display = 'none';
    }
  }
}


/* popup Karte */

document.getElementById("mapbuttonA").addEventListener("click", openMapA);
document.getElementById("mapbuttonB").addEventListener("click", openMapB);
document.getElementById("mapbuttonBa").addEventListener("click", openMapB);
document.getElementById("mapbuttonC").addEventListener("click", openMapC);

function openMapA() {
  document.getElementById("mapA-popup").style.display = "block";
}
function openMapB() {
  document.getElementById("mapB-popup").style.display = "block";
}
function openMapC() {
  document.getElementById("mapC-popup").style.display = "block";
}

function closeMapA() {
  document.getElementById("mapA-popup").style.display = "none";
}
function closeMapB() {
  document.getElementById("mapB-popup").style.display = "none";
}
function closeMapC() {
  document.getElementById("mapC-popup").style.display = "none";
}


/* Code für mittlere Box */
leftButton.addEventListener('click', () => {
  if (currentMenuIndex > 0) {
    currentMenuIndex -= 1;
    showMenus();
  }
});

rightButton.addEventListener('click', () => {
  const menus = document.querySelectorAll('.Menues li');
  if (currentMenuIndex + totalMenusToShow < menus.length) {
    currentMenuIndex += 1;
    showMenus();
  }
});

/* Code für untere Box */
document.getElementById("einstellungen-button").addEventListener("click", openSettings);

function openSettings() {
  document.getElementById("settings-popup").style.display = "block";
}

function closeSettings() {
  document.getElementById("settings-popup").style.display = "none";
  document.getElementById("informations-popup").style.display = "none";
}

/* Code für Weitere Informationen */
infoButtons.forEach((button) => {
  button.addEventListener('click', openInfoPopup);
});

function openInfoPopup() {
  const infoPopup = document.getElementById("informations-popup");
  infoPopup.style.display = "block";
}

/* Code für Gerichte als auch Datum*/

document.getElementById("gerichteFiltern-button").addEventListener("click", openGerichte);

function openGerichte() {
  document.getElementById("gerichte-popup").style.display = "block";
}

function closeGerichte() {
  document.getElementById("gerichte-popup").style.display = "none";
}

document.getElementById("datumAendern-button").addEventListener("click", opendatumAendern);

function opendatumAendern() {
  document.getElementById("datumAendern-popup").style.display = "block";
}

function closedatumAendern() {
  document.getElementById("datumAendern-popup").style.display = "none";
}