function changeMessage() {
  const messages = [
    "螺旋階段に飲み込まれろ",
    "お前の不幸が生きる喜び。",
    "孤独死しろ",
    "本当は好きだよ"
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").textContent = messages[randomIndex];
}
