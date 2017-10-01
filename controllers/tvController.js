let controller = {};
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

controller.getTV = (req, res, next)=> {
    res.send(tvShows);
}

controller.getTVById = (req, res, next)=>{
    let tvFind = null;
    tvFind = tvShows.find(x => x.Id === parseInt(req.params.id));

    if(!tvFind){
        tvFind = {
            error: 'tv show no econtrado'
        }
    }
    res.send(tvFind);
}

controller.addTV = (req, res, next)=>{
    
}

module.exports = controller;