const ventas = [
    {
    imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    nombre: "Apartamento de lujo en zona exclusiva",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4",
    baños: "4",
    precio: "5.000",
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
    precio: "1.200",
    smoke: true,
    pets: true

},
{
    imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    nombre: "Penthouse de lujo con terraza panorámica",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3",
    baños: "3",
    precio: "4.500",
    smoke: false,
    pets: true

},
{
    imagen: "https://i.pinimg.com/originals/f3/d7/45/f3d745b8337a2e89eb43dbcb1740876f.jpg",
    nombre: "Departamento en venta, piso independiente",
    descripcion: "Ubicado en nada mas y nada menos que la octava region",
    ubicacion: "Los angeles, capitan wood 107",
    habitaciones: "4",
    baños: "2",
    precio: "3.800",
    smoke: true,
    pets: true

},
{
    imagen: "https://tse2.mm.bing.net/th?id=OIP.IRsWTUg4FQk6-mI2vr5ROQHaFQ&pid=Api&P=0&h=180",
    nombre: "Departamento en venta, valle de plata",
    descripcion: "Oportunidad imperdible departamento en la perla del caribe ",
    ubicacion: "Venezuela, Nueva esparta",
    habitaciones: "2",
    baños: "1",
    precio: "1.100",
    smoke: true,
    pets: true

},
{
    imagen: "https://www.guiadepropiedades.cl/wp-content/uploads/2023/04/departamentos-de-lujo-en-Chile.jpg",
    nombre: "Cumple tu sueño con Glamour y elegancia",
    descripcion: "Piso de lujo ubicado en el corazon de Santiago/chile",
    ubicacion: "Rosas 2022",
    habitaciones: "5",
    baños: "3",
    precio: "6.090",
    smoke: false,
    pets: true

},
]

const elementoHTML = document.querySelector(".row")
let cards = ""
for (let venta of ventas){
    cards+= `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${venta.imagen}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${venta.nombre}
                </h5>
                <p class="card-text">
                ${venta.descripcion}
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} habitaciones |
                  <i class="fas fa-bath"></i> ${venta.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.precio}</p>
                <p style="color: ${venta.smoke ? "green":"red"}"> ${venta.smoke ? '<i class="fas fa-smoking"></i>' : '<i class="fas fa-smoking-ban"></i>' } ${venta.smoke ? "Permitido fumar" : "Esta Prohibido fumar" }</p>
                <p style="color: ${venta.pets ? "green" : "red"}">${venta.pets ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>'} ${venta.pets ?"Mascotas permitidas" : "Estan prohibidas las mascotas" }</p>
              </div>
            </div>  
          </div>`
}
elementoHTML.innerHTML= cards