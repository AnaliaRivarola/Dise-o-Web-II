/*var lista=[];
lista=[1,2,3];
console.log(lista);
lista[2]=5;
console.log(lista);

personas=('nombre:','luis', "apellido:",'Lopez');
lista.push(personas);

personas[3]['nombre']="carlos";
for(var i=0; i<lista.length; i++)
{
  //console.log(lista[i]);

}

while (i<lista.length);
{
  if (!isNaN(lista[i]));
  console.log(lista)
  i++;
}
console.log(lista);
var suma=(1,9);
console.log(suma);*/

//Crear un algoritmo que genere un array de tamano dinamico del tipo entero, en que sus elementos puedan ser
//cargados por el usuario asi como su dimension.
//El algoritmo debera:
//Imprimir la suma de todos los arrays
var num=[1,2,5,6,7];
var tam=5;
var suma=0;
//tam =prompt('Ingrese el tamano del array');

for (var i = 0; i < tam; i++) {
  //num =prompt('Ingrese un valor');

  suma=suma+num[i];

}

console.log("El array es: "+num)

console.log("La suma es: "+suma);
