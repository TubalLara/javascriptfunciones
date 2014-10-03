var addLista = function () {

    var item = document.createElement("li");
    var texto = document.createTextNode("Me han creado nuevo");
    item.appendChild(texto);

    document.getElementById("hijo1").appendChild(item);

};