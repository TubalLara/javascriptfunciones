var object = new object

obj.nombre = "Luis";
obj.apellido = "Gil";

var obj2 = { nombre: "Luis", apellido: "Gil" };

var obj3 = {};

obj3.nombre = "Luis";
obj3.apellido = "Gil";


function Persona(nombre, apellido) {
    this.nombre = nombre || "";
    this.apellido = apellido || "";
    this.escribir= function() {
        alert(this.nombre + " "+this.apellido);
    }

}


var p = new Persona("Luis", "Gil");
var p2 = new Persona();
var p3 = new Persona(undefined, "Gil");

p3.escribir();

String.prototype.toJSON = function () {
    return "Algo";
};

var hola = "";

alert(hola.toJSON());

Estudiante.prototype = new Persona;

Estudiante.constructor = Estudiante;


function Estudiante(nombre, apellido, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;

}
Estudiante.prototype.escribir = function () {
    alert(this.nombre + " " + this.apellido + " " + this.curso);
}

var e = new Estudiante("Luis", "Gil", "C#");
alert(e instanceof Persona);

e.escribir();

