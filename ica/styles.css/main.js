const btn = document.querySelector("button");
btn.addEventListener("click", () =>
    displayMessage("Woo, this is a different message!"),
  );

function displayMessage(msgText, msgType) {
    const body = document.body;

const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);

const msg = document.createElement("p");
msg.textContent = msgText;
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);

closeBtn.addEventListener("click", () =>
  panel.parentNode.removeChild(panel),
);
  }

  displayMessage();