const adventData = [
  { day: 1, content: "Antipasto - Voorgerecht" },
  { day: 2, content: "Primo piatto - Hoofdgerecht" },
  { day: 3, content: "Secondo piatto - Tussengerecht" },
  { day: 4, content: "Dolce - Nagerecht" },
  { day: 5, content: "Zuppa - Soep" },
  { day: 6, content: "Pesce - Vis" },
  { day: 7, content: "Formaggio - Kaas" },
  { day: 8, content: "Vino - Wijn" },
  { day: 9, content: "Spumante - Mousserende wijn" },
  { day: 10, content: "Caffè - Espresso" },
  { day: 11, content: "Bere - Drinken" },
  { day: 12, content: "Mangiare - Eten" },
  { day: 13, content: "Preparare - Voorbereiden" },
  { day: 14, content: "Tagliare - Snijden" },
  { day: 15, content: "Cucinare - Koken" },
  { day: 16, content: "Panettone - Zoet kerstbrood" },
  { day: 17, content: "Torrone - Nougat" },
  { day: 18, content: "Limoncello - Citroenlikeur" },
  { day: 19, content: "Festa di Natale - Kerstfeest" },
  { day: 20, content: "Auguri - Gelukkige feestdagen!" },
  { day: 21, content: "Tavolo - Tafel" },
  { day: 22, content: "Bicchiere - Glas" },
  { day: 23, content: "Candela - Kaars" },
  { day: 24, content: "Stella di Natale - Kerstster" }
];

const adventCalendar = document.getElementById("advent-calendar");
let openedDoors = 0;

function setupAdventCalendar() {
  adventData.forEach((item) => {
    const door = document.createElement("div");
    door.classList.add("advent-door");

    door.innerHTML = `
      <span class="day-number">${item.day}</span>
      <div class="advent-content">${item.content}</div>
    `;

    door.addEventListener("click", () => {
      if (!door.classList.contains("opened")) {
        door.classList.add("opened");
        openedDoors++;
        checkAllDoorsOpened();
      }
    });

    adventCalendar.appendChild(door);
  });
}

function checkAllDoorsOpened() {
  if (openedDoors === adventData.length) {
    setTimeout(() => {
      alert("🎉 Alle luikjes zijn geopend! Buon Natale! 🎄");
    }, 500);
  }
}

setupAdventCalendar();
