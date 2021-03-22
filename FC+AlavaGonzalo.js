function Usuario(nombre, apellido, libro, mascota) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.libro = libro;
	this.mascota = mascota;
	
	this.getFullName = function(){return this.nombre + this.apellido};
    this.addMascota = function(mascota){this.mascota + 1};
    this.getMascota = function(){return mascota};
};

let usuario = new Usuario("Raul", "Bernardino", "El libro de los abrazos", 2);

console.log(usuario.getFullName());

console.log(usuario.getMascota());

