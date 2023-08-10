// const clock = document.querySelector('clock');
const clock = document.getElementById('clock');
setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleDateString);
  clock.innerHTML = date.toLocaleDateString();
}, 1000);
