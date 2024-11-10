const alquileres = [
  {
    imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    nombre: "Apartamento de lujo en zona exclusiva",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4",
    baños: "4",
    precio: "800",
    smoke: false,
    pets: false

},
{
    imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    nombre: "Apartamento acogedor en la montaña",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña, hermosa vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 234568",
    habitaciones: "2",
    baños: "1",
    precio: "400",
    smoke: false,
    pets: false

},
{
    imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    nombre: "Penthouse de lujo con terraza panorámica",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3",
    baños: "3",
    precio: "700",
    smoke: false,
    pets: false

},
    {
        imagen: "https://demoazimg.prop360.cl/habiter/img/propiedades/28570_20171118_113819_20171123171732.jpg",
        nombre: "Casa en arriendo / Los Angeles Chile",
        descripcion: "Hermosa casa construccion solida ",
        ubicacion: "A las afuera del centro 2km",
        habitaciones: "3",
        baños: "1",
        precio: "650",
        smoke: true,
        pets: true
    
    },
    {
        imagen: "https://i.pinimg.com/originals/e2/4a/54/e24a54b168b197c029307a26c57afd3d.jpg",
        nombre: "Casa en arriendo / Los Angeles Chile ",
        descripcion: "Casa con piscina y terraza",
        ubicacion: "Alto Los Angeles 2012",
        habitaciones: "4",
        baños: "2",
        precio: "900",
        smoke: true,
        pets: true
    
    },
    {
        imagen: "https://www.bienesonline.com/costa-rica/photos/casa-los-angeles-de-san-rafael-de-heredia-680-14629572941.jpg",
        nombre: "Casa en arriendo / Los Angeles Chile ",
        descripcion: "Preciosa casa de campo",
        ubicacion: "San Rafael de Heredia",
        habitaciones: "3",
        baños: "3",
        precio: "580",
        smoke: true,
        pets: true
    
    },
]
const elementoHTML = document.querySelector(".row")
let cards2 = ""
for (let alquiler of alquileres){
    cards2+= `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${alquiler.imagen}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${alquiler.nombre}
                </h5>
                <p class="card-text">
                ${alquiler.descripcion}
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${alquiler.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.habitaciones} habitaciones |
                  <i class="fas fa-bath"></i> ${alquiler.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.precio}</p>
                <p style="color: ${alquiler.smoke ? "green":"red"}"> ${alquiler.smoke ? '<i class="fas fa-smoking"></i>' : '<i class="fas fa-smoking-ban"></i>' } ${alquiler.smoke ? "Permitido fumar" : "Esta Prohibido fumar" }</p>
                <p style="color: ${alquiler.pets ? "green" : "red"}">${alquiler.pets ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>'} ${alquiler.pets ?"Mascotas permitidas" : "Estan prohibidas las mascotas" }
              </div>
            </div>  
          </div>`
}
elementoHTML.innerHTML = cards2