module.exports = (app, mongoose)=>{
    
    const tvshowSchema = new mongoose.Schema({
		titulo: { type: String },
		anio: 	{ type: Number },
		pais: 	{ type: String }
	});

	mongoose.model('TVShow', tvshowSchema);

}