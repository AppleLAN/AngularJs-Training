var Persona = {
    nombre:"nombre de empleado",
    apellido:"apellido de empleado"
};
 
var empleado = Object.create(Persona);
 
console.log(empleado.nombre); 
empleado.nombre = "jorge";
console.log(empleado.nombre);