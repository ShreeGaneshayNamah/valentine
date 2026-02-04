const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ff9a9e,#fad0c4);
      font-family:Arial;
      color:white;
      text-align:center;
    ">
      <h1>Yayyy Riddhi! 💖🥰</h1>
      <h2>You just made me really happy 💕</h2>
      <p>Sending you a message...</p>
    </div>
  `;

  setTimeout(() => {
    window.location.href =
      "https://wa.me/?text=" +
      encodeURIComponent("Hey Riddhi 💖 I’m so happy you said YES! 🌹");
  }, 1500);
});
