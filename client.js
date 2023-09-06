const colors = document.querySelectorAll(".color");

function submitColor() {
  let selectedColor = null;
  for (let color of colors) {
    if (color.classList.contains("selected")) {
      selectedColor = color.style.backgroundColor;
      break;
    }
  }

  if (selectedColor) {
    fetch("/color", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ color: selectedColor }),
    });
  }
}

function selectColor(color) {
  for (let c of colors) {
    if (c === color) {
      c.classList.add("selected");
    } else {
      c.classList.remove("selected");
    }
  }
}

for (let color of colors) {
  color.addEventListener("
