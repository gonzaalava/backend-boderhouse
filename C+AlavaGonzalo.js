class Usuario {
constructor (nombre, apellido, libro, autor, mascota) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.libro = libro;
    this.autor = autor;
	this.mascota = mascota;
	
	this.getFullName = function(){return this.nombre + this.apellido};
    this.addMascota = function(){this.mascota + 1};
    this.getMascota = function(){return mascota};
    this.getBookAutor = function(){return autor};
   }       
}

let usuario = new Usuario("Raul", "Bernardino", "Ser como ellos", "Eduardo Galeano", 2);

console.log(usuario.getFullName());

console.log(usuario.getMascota());

console.log(usuario.getBookAutor());