//Establecer el punto inicial de nuestro mapa y el nivel de zoom
let map= L.map('map').setView([19.284838199428123, -99.67596717195293],15);
//Integrando mapa base

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Agregando la funcionalidad JS para la seleccion de cada opcion del menu desplegable
//Se hace 
//En nuestro
 document.getElementById("select-campus").addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords, 16);                                             
 })
