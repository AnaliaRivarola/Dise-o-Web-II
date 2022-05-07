personas = []; //se declara el array
document.getElementById('btNuevo').onclick = nuevoRegistro;
document.getElementById('btCargar').onclick = cargarTabla; //Cargar datos en vez de cargar tabla
document.getElementById('btLimpiar').onclick = limpiarTable;
document.getElementById('btProcesar').onclick = procesarForm;


function cargarDatos() //carga datos de prueba al array persona
{
  console.log("cargando datos...");
  /*personas.push({"nombre":"Luis","apellido":"Lopez","cedula":"5086078","fNacimiento":"2003/02/07"});
    personas.push({"nombre":"Lizandro","apellido":"Britto","cedula":"5610802","fNacimiento":"2002/11/20"});
    personas.push({"nombre":"Jazmin","apellido":"Griffith","cedula":"6038277","fNacimiento":"2003/05/14"});*/

  personas = JSON.parse(localStorage.getItem('personas'))
  if (personas == null) {
    //console.log("personas es null");
    personas = [];

  }
}
//cargarDatos();
//console.log(personas);

function limpiarTable() //Limpia el contenido html de la tabla de datos
{
  document.getElementById("tab_datos").innerHTML = "";
  console.log("limpiando");
}


function cargarTabla() {
  //console.log("cargando");
  if (personas != null) {
    var salida = "";
    for (var i = 0; i < personas.length; i++) {
      console.log("girando")
      salida = salida + "<tr><td>" + i + "</td><td>" + personas[i].cedula + "</td><td>" + personas[i].apellido + "</td><td>" + personas[i].nombre + "</td><td>" + personas[i].fNacimiento + "</td> <td><a class='btEditar btn btn-outline-warning ' data-idx='" + i + "'>Editar</a></td> <td><a class='btBorrar btn btn-outline-danger ' data-idx='" + i + "'>Borrar</a></td></tr>"

    }
    document.getElementById('tab_datos').innerHTML = salida;
    btns = document.getElementsByClassName('btEditar');
    for (var i = 0; i < btns.length; i++) {
      btns[i].onclick = editarForm;
    }
    bbtn = document.getElementsByClassName('btBorrar');
    for (var i = 0; i < bbtn.length; i++) {
      bbtn[i].onclick = borrarRegistro;
    }
  }
}


function nuevoRegistro() {
  limpiarForm()
  document.getElementById('cedula').focus();
}

function borrarRegistro(e) {
  let idxe = e.target.attributes["data-idx"].value
  personas.splice(idxe, 1);
  persistirRegistros();
  limpiarTable();
  cargarTabla();
}

//Limpiar formulario
function limpiarForm() {

  document.getElementById('idx').value = "-1";
  document.getElementById('cedula').value = "";
  document.getElementById('nombre').value = "";
  document.getElementById('apellido').value = "";
  document.getElementById('fNacimiento').value = "";

}


//editar form
function editarForm(e) {

  let idxe = e.target.attributes["data-idx"].value;

  document.getElementById('idx').value = idxe;
  document.getElementById('cedula').value = personas[idxe].cedula;
  document.getElementById('nombre').value = personas[idxe].apellido;
  document.getElementById('apellido').value = personas[idxe].nombre;
  document.getElementById('fNacimiento').value = personas[idxe].fNacimiento;
  document.getElementById('cedula').focus();
}

function procesarForm() {
  let idx = document.getElementById('idx').value;

  if (idx == -1) {
    let p = {
      "nombre": document.getElementById('nombre').value,
      "apellido": document.getElementById('apellido').value,
      "cedula": document.getElementById('cedula').value,
      "fNacimiento": document.getElementById('fNacimiento').value
    }
    console.log(personas);
    personas.push(p);
  } else {
    personas[idx].cedula = document.getElementById('cedula').value
    personas[idx].nombre = document.getElementById('nombre').value
    personas[idx].apellido = document.getElementById('apellido').value
    personas[idx].fNacimiento = document.getElementById('fNacimiento').value
  }
  persistirRegistros();
  limpiarForm();
  limpiarTable();
  cargarTabla();
}

function persistirRegistros() {
  localStorage.setItem('personas', JSON.stringify(personas));
}


function pruebas() {
  console.log("probando")
  var botones = document.getElementsByClassName('btn')
  for (var i = 0; i < botones.length; i++) {
    botones[i].classList.add("btn-outline-info")
  }

}
