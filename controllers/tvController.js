const controller = {};
const tvShows = [
    {
        Id: 1,
        titulo:'GOT',
        anio: 2017,
        pais: 'EEUU'

    },
    {
        Id: 2,
        titulo:'Fargo',
        anio: 2017,
        pais: 'EEUU'

    },
]
/**
 * Obtener todos los tv shows
 */
controller.getTV = (req, res, next)=> {
    res.send(tvShows);
}
/**
 * Obtener tv show por ID
 */
controller.getTVById = (req, res, next)=>{
    let tvFind  = tvShows.find(x => x.Id === parseInt(req.params.id));

    if(!tvFind){
        return res.send({error: 'tv show no econtrado'});
    }
    res.send(tvFind);
}
/**
 * Agregar tv show
 */
controller.addTV = (req, res, next)=>{
    let id = tvShows.length + 1;
    let newTVShow = buildTVShow(id, req.body);

    tvShows.push(newTVShow);
    res.send(newTVShow);
}
/**
 * Actualizar tv show
 */
controller.updateTV = (req, res, next)=>{
    let tvShow = {error: 'tv show no econtrado'};
    //Forma 1

    let tvIndex  = tvShows.findIndex(x => x.Id === parseInt(req.params.id));
    
    if(tvIndex < 0){
        return res.send(tvShow);
    }
    
    tvShow = tvShows[tvIndex];
    tvShow = buildTVShow(tvShow.Id, req.body);
    tvShows[tvIndex] = tvShow;

    //forma 2
    /*tvShows.map(x =>{
        if(x.Id === parseInt(req.params.id)){
            x = buildTVShow(x.Id, req.body);
            tvShow = x;
            return x;
        }else{
            return x;
        }
    });*/
    
    res.send(tvShow);
}
/**
 * Eliminar tv show
 */
controller.deleteTV = (req, res, next)=>{
    let tvIndex = tvShows.findIndex(x => x.Id === parseInt(req.params.id));
    
    res.send(tvShows.splice(tvIndex, 1));
}

//---------------------------------------------------------------
const buildTVShow = (id, body)=>{
    return {
        Id: id,
        titulo: body.titulo,
        anio: body.anio,
        pais: body.pais
    }

}

module.exports = controller;