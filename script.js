const cardsData = [
  { id: 1, pairId: 1, bg: "lepel.png", content: "Lepel" },
  { id: 2, pairId: 1, bg: "lepel.png", content: "Cucchiaio" },
  { id: 3, pairId: 2, bg: "bord.png", content: "Bord" },
  { id: 4, pairId: 2, bg: "bord.png", content: "Piatto" },
  { id: 5, pairId: 3, bg: "servet.png", content: "Servet" },
  { id: 6, pairId: 3, bg: "servet.png", content: "Tovagliolo" },
  { id: 7, pairId: 4, bg: "glas.png", content: "Glas" },
  { id: 8, pairId: 4, bg: "glas.png", content: "Bicchiere" },
  { id: 9, pairId: 5, bg: "panettone.png", content: "Panettone" },
  { id: 10, pairId: 5, bg: "panettone.png", content: "Panettone" },
  { id: 11, pairId: 6, bg: "mes.png", content: "Mes" },
  { id: 12, pairId: 6, bg: "mes.png", content: "Coltello" },
  { id: 13, pairId: 7, bg: "vork.png", content: "Vork" },
  { id: 14, pairId: 7, bg: "vork.png", content: "Forchetta" },
  { id: 15, pairId: 8, bg: "tafel.png", content: "Tafel" },
  { id: 16, pairId: 8, bg: "tafel.png", content: "Tavolo" },
  { id: 17, pairId: 9, bg: "wijn.png", content: "Wijn" },
  { id: 18, pairId: 9, bg: "wijn.png", content: "Vino" },
  { id: 19, pairId: 10, bg: "kaars.png", content: "Kaars" },
  { id: 20, pairId: 10, bg: "kaars.png", content: "Candela" }
];

let flippedCards = [];
let matchedPairs = 0;

function setupGame() {
  const shuffledCards = shuffle([...cardsData]);
  document.getElementById("game-board").innerHTML = "";
  flippedCards = [];
  matchedPairs = 0;

  shuffledCards.forEach(createCard);
}

function createCard(cardData) {
  const card = document.createElement("div");
  card.classList.add("card");

  const front = document.createElement("div");
  front.classList.add("front");
  front.style.backgroundImage = `url(${cardData.bg})`;

  const back = document.createElement("div");
  back.classList.add("back");
  back.textContent = cardData.content;

  card.appendChild(front);
  card.appendChild(back);
  document.getElementById("game-board").appendChild(card);

  card.addEventListener("click", () => flipCard(card, cardData));
}

function flipCard(card, cardData) {
  if (flippedCards.length >= 2 || card.classList.contains("flipped")) return;

  card.classList.add("flipped");
  flippedCards.push({ card, cardData });

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 800);
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.cardData.pairId === card2.cardData.pairId) {
    card1.card.classList.add("matched");
    card2.card.classList.add("matched");
    matchedPairs++;
  } else {
    card1.card.classList.remove("flipped");
    card2.card.classList.remove("flipped");
  }

  flippedCards = [];

  if (matchedPairs === 10) {
    document.getElementById("end-screen").style.display = "block";
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.getElementById("restart-btn-end").addEventListener("click", () => {
  document.getElementById("end-screen").style.display = "none";
  setupGame();
});

setupGame();
