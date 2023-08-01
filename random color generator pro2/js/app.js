const getcolor = () => {
  // hex code genrator

  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;

  // changing the hex code text
  document.getElementById("color-code").innerText = randomCode;

  //   to copy to clipboard
  navigator.clipboard.writeText(randomCode);
};

// click event call
document.getElementById("btn").addEventListener("click", getcolor);

// initia call
getcolor();

// Also can be done like this

// const btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   getcolor();
// });
