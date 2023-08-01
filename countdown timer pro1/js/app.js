const endDate = "5 August 2023 6:00 pm";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  //   convert into days
  const diff = (end - now) / 1000;
  if (diff < 0) return;
  //   days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  // hours
  inputs[1].value = Math.floor((diff / 3600) % 24);
  // minutes
  inputs[2].value = Math.floor((diff / 60) % 60);
  //   seconds
  inputs[3].value = Math.floor(diff % 60);
}

// initial call
// clock();

setInterval(() => {
  clock();
}, 1000);
