var addLista = function () {

    var item = document.createElement("li");
    var texto = document.createTextNode("Me han creado nuevo");
    item.appendChild(texto);

    document.getElementById("hijo1").appendChild(item);

};

var borrarNodo = function (id) {
    var nodo = document.getElementById(id);
    var padre = nodo.parentNode;

    padre.removeChild(nodo);
}

var cambiarColor = function (id) {
    var nodo = document.getElementById(id);
    nodo.className = "rosita";

}

//cuando tengamos una longitud que se recalcule utilizar mejor un while que un for
var todos = function () {
    var p = document.getElementById("padre");

    while (p.childNodes.length>0) {

        p.removeChild(p.childNodes[0]);
    }
}