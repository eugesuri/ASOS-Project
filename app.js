function shopASOS() {
  let name = prompt("What is your name? 🥰");
  let email = prompt("What is your email address? 📧");
  let info = prompt("Would you like to join ASOS? 🥳");

  if (info.toLowerCase() === "yes") {
    alert(
      "Thank you " + name + ", We'll send the information to your email!😍"
    );
  } else {
    alert(
      "Thank you " + name + ", We hope that next time the answer will be yes!🙂"
    );
  }
}

let shopButton = document.querySelector("button");
shopButton.addEventListener("click", shopASOS);
