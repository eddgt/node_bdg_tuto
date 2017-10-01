//use test
//db.dropDatabase()
//Para crear una BD solo se utiliza y se switchea automáticamente
use node_bdg_tuto

//Crear una colección
db.createCollection("TVShow", { capped : true, size : 50 * 1024 * 1024, max : 100 * 1000 } )

//Insertar varios en una colección
db.TVShow.insertMany([{
    titulo: "GOT",
    anio: 2017,
    pais: "EEUU"
},{
    titulo: "Fargo",
    anio: 2017,
    pais: "EEUU"
}])

//buscar-- si va si parámetros, entonces devuelve toda la colleción
db.TVShow.find({})

//actualizar bajo un  parámetro
try{
db.restaurant.updateOne(
      { "id_transaccion" : 1 },
      { $set: { "nombre" : 'LOGON!' } }
   );
} catch (e) {
   print(e);
}