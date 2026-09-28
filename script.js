document.getElementById('saludo').innerHTML =  "Adiós";
document.getElementById('saludo').style.color = "orange";

document.getElementById('clic').addEventListener('click', function () {
  this.style.color = "brown";
});

// BLoqu extra 
const resaltado = document.getElementById('resaltado');

resaltado.textContent = "genial";
resaltado.style.backgroundColor = "lightgreen";