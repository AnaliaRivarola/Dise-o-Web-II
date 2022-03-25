
//Ejercicio1

var n=[3]
var tabla=[1,2,3,4,5,6,7,8,9,10];
var multi=0;
console.log('EJERCICIO 1');
console.log('Tabla del: '+n);
for(var i=0;i<tabla.length;i++)
{
  multi=tabla[i]*n;

  console.log(n+'x'+tabla[i]+'='+multi);
}

//Ejercicio 2

var num=[3];
var num2=[5];
var mult=0;
console.log('');
console.log('EJERCICIO 2');
console.log('Tabla del: '+num+' al '+num2);

if (num<num2)
{
  for (var i = num; i <= num2; i++)
  {
    console.log(' ');
    console.log("Tabla del: "+i)
      for (var j = 1; j < 11; j++)
      {
        mult=i*j;
        console.log(i+'x'+j+'='+mult);
      }
  }

}else{console.log('Es imposible realizar esta peticion')}
