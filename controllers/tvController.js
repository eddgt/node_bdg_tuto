const mongoose = require('mongoose');
const TVShow  = mongoose.model('TVShow');

const controller = {};
/**
 * Obtener todos los tv shows
 */
controller.getTV = (req, res, next)=> {
    TVShow.find((err, tvshows)=>{
        if(err)
            return res.send(err);
        
        res.send(tvshows);
    });
}
/**
 * Obtener tv show por ID
 */
controller.getTVById = (req, res, next)=>{

    TVShow.findById(req.params.id, (err, tvshow)=>{
        if(err)
            return res.send(err);
        
        res.send(tvshow);
    })
}
/**
 * Agregar tv show
 */
controller.addTV = (req, res, next)=>{
    
    let newTVShow = new TVShow(buildTVShow(1, req.body));

    newTVShow.save((err, tvshow)=>{
        if(err)
            return res.send(err);
        
        res.send(tvshow);
    });
}
/**
 * Actualizar tv show
 */
controller.updateTV = (req, res, next)=>{

    TVShow.findById(req.params.id, (err, tvshow)=>{
        if(err)
            return res.send(err);

        tvshow.titulo = req.body.titulo;
        tvshow.anio = req.body.anio;
        tvshow.pais = req.body.pais;
        
        tvshow.save((err, tvshow)=>{
            if(err)
                return res.send(err);
            
            res.send(tvshow);
        });
    })
}
/**
 * Eliminar tv show
 */
controller.deleteTV = (req, res, next)=>{
    TVShow.findById(req.params.id, (err, tvshow)=>{
        if(err)
            return res.send(err);

        tvshow.remove((err)=>{
            if(err)
                return res.send(err);
            
            res.status(200);
            res.send(true);
        });        
    })
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