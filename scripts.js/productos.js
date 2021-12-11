/* Clases */
/* Clases de productos */
class Producto {
    constructor(nombre,precio,cd,img){
        this.nombre = nombre   
        this.precio = precio
        this.cd = cd
        this.img = img
        this.stock = "producto en stock"
    }
    SinStock() {
        this.stock = "producto sin stock"
    }
    DescuentoPromocion() {
        this.precio = this.precio * porcentaje;
    }
};



/* Productos de la pagina Sweaters */
const cardiganBirkin = new Producto("Cardigan Birkin",5000,1,"img");
const sweaterBabydoll = new Producto("Sweater Babydoll",4500,1,"img");
const sweaterGrunge = new Producto("Sweater Grunge",5000,1,"img");
const sweaterComfy = new Producto("Sweater Comfy",4500,1,"img");
const sweaterSunset = new Producto("Sweater Sunset",5000,1,"img");
const cardiganVilma = new Producto("Cardigan Vilma",4000,1,"img");
const sweaterDaisy = new Producto("Sweater Daisy",5000,1,"img");
const sweaterBalú= new Producto("Sweater Balú",5000,1,"img");


/* Productos de la pagina Bufandas */

const bufandaConBolsillo= new Producto("Bufanda con bolsillo"2000,1,"img");
const bufandaInfinitaLisa = new Producto("Bufanda infinita lisa",1500,1,"img");
const bufandaLargaLisaConCalado = new Producto("Bufanda larga lisa con calado",2000,1,"img");
const bufandaInfinitaColores = new Producto("Bufanda infinita colores",2000,1,"img");
const bufandaInfinitaSimple = new Producto("Bufanda infinita simple",1500,1,"img");
const bufandaACuadrosYFlecos = new Producto("Bufanda a cuadros y flecos",2500,1,"img");
const bufandaNiñesConPompon = new Producto("Bufanda niñes con pompon",2000,1,"img");
const bufandaNiñesAnimalito = new Producto("Bufanda niñes animalito",2500,1,"img");




/* Productos de la pagina Tops */
const top1 = new Producto("Top 1",2500,1,"img");
const top2 = new Producto("Top 2",2500,1,"img");
const top3 = new Producto("Top 3",2500,1,"img");
const top4 = new Producto("Top 4",2500,1,"img");
const top5 = new Producto("Top 5",2500,1,"img");
const top6 = new Producto("Top 6",2500,1,"img");
const top7 = new Producto("Top 7",2500,1,"img");
const top8 = new Producto("Top 8",2500,1,"img");

/* Productos de la pagina Gorros */
const gorroSimple = new Producto("Gorro simple",1000,1,"img");
const gorroConFelpudo = new Producto("Gorro con felpudo",1500,1,"img");
const gorroDegradeYPompon = new Producto("Gorro degrade y pompon",2000,1,"img");
const gorroTricolor = new Producto("Gorro tricolor",2000,1,"img");
const gorroLisoConPompon = new Producto("Gorro liso con pompon",1500,1,"img");
const gorroNubeBatik = new Producto("Gorro nube batik",3000,1,"img");
const gorroConDiseño = new Producto("Gorro con diseño",2000,1,"img");
const gorroConDiseño = new Producto("Gorro con diseño",1500,1,"img");

/* Productos de la pagina Bebes */
const enterito1 = new Producto("Enterito 1",1500,1,"img");
const enterito2 = new Producto("Enterito 2",1500,1,"img");
const enterito3 = new Producto("Enterito 3",1500,1,"img");
const enterito4 = new Producto("Enterito 4",1500,1,"img");
const zapatito = new Producto("Zapatito",1500,1,"img");
const overol = new Producto("Overol",1500,1,"img");
const enteritoConGorro = new Producto("Enterito con gorro",1500,1,"img");
const conjunto = new Producto("Conjunto",1500,1,"img");

/* Productos de la pagina Muñecos */
const muñecoConejo1 = new Producto("Muñeco conejo 1",2000,1,"img");
const muñecoConejo2 = new Producto("Muñeco conejo 2",2000,1,"img");
const muñecoConejo3 = new Producto("Muñeco conejo 3",2000,1,"img");
const muñecoRaton = new Producto("Muñeco Ratón",2000,1,"img");
const muñecoAlicia = new Producto("Muñeco Alicia",2000,1,"img");
const muñecoLulu = new Producto("Muñeco Lulú",2000,1,"img");
const muñecoMono = new Producto("Muñeco Mono",2000,1,"img");
const muñecoHug = new Producto("Muñeco Hug",2000,1,"img");