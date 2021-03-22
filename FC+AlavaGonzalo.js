function Usuario(nombre, apellido, libro, mascota) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.libro = libro;
	this.mascota = mascota;
	
	this.getFullName = function(){return this.nombre + this.apellido};
};

let usuario = new Usuario("Raul", "Bernardino", "El libro de los abrazos", "Pedro");

console.log(usuario.getFullName());