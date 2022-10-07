function update(valor) {
  var element = document.getElementById("myprogressBar");   
  var width = -1;
  var identity = setInterval(scene, 15);

  function scene() {
    if (width >= document.getElementById("valor").value) {
      clearInterval(identity);
    } 

    else {
      width++; 
      element.style.width = width + '%'; 
      element.innerHTML = width * 1  + '%';
      }
        if (document.getElementById("valor").value > 20) {
            alert()
            clearInterval(identity);

    if (document.getElementById("valor").value > 100) {
            alert("Valor maximo da barra de progresso é 100%");
            clearInterval(identity);


    } 
  }
}
