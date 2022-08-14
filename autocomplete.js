/*var listaProductos = ["Margarita","Azucena","Dalia","Lirio amarillo","Hibisco","Heliconia","Astromelias","Claveles"];

productos = listaProductos.sort();
console.log(productos);
var inputProduct = document.getElementById("nombreProducto");
var autocomplete = document.getElementById("autocompletar");
const selectKey = 39;
window.onload = ()=>{
    inputProduct.value = "";
    clearComplete();
}
const clearComplete =()=>{
    autocomplete.innerHTML = "";
}

function cambiar(){
    autocomplete.innerHTML = "autocompletando";
}
inputProduct.addEventListener=()=>{
    autocomplete.innerHTML = "autocompletando";
}*/
//product register code//

    

function addClient (){
    var nomCliente = document.getElementById("nombreCliente").value;
    var clasificacion = document.getElementById("clasificacion").value;
    var destino = document.getElementById("ciudad").value;
    var resnomClient = document.getElementById("resnomClient");
    var resClasificacion = document.getElementById("resClasificacion");
    var resDestino = document.getElementById("resDestino");
    resnomClient.innerHTML = nomCliente;
    resClasificacion.innerHTML = clasificacion;
    resDestino.innerHTML = destino;

}
function clear(){
    document.getElementById("nombreProducto").value="";
    document.getElementById("variacion").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("nombreProducto").focus();
}
var contador = 2;




function registerItem(){
    
    var nomItem = document.getElementById("nombreProducto").value;
    var variacion = document.getElementById("variacion").value;
    var quantity = document.getElementById("cantidad").value;
    var regprodTable = document.getElementById("regprodTable");
    var price = 2500;
    const tablafila = document.createElement("tr");
    const tabladatostd = document.createElement("th");
    const tabladatostd2 = document.createElement("th");
    const tabladatostd3 = document.createElement("th");
    tabladatostd.innerHTML = nomItem;
    tabladatostd2.innerHTML = variacion;
    tabladatostd3.innerHTML = quantity*price;

    if(nomItem == "" || variacion == "" || quantity == ""){
        alert("Por favor ingresa todos los datos");
    }else{
        regprodTable.appendChild(tablafila);
        tablafila.appendChild(tabladatostd);
        tablafila.appendChild(tabladatostd2);
        tablafila.appendChild(tabladatostd3);
        tablafila.classList.add("restr");
        clear();
    }/*
    var i;
    
    contador +=1;
    let listado = [];
    listado[contador]=contador;
    console.log(listado);*/
    
    
}