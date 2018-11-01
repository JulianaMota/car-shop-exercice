const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

console.log(name)