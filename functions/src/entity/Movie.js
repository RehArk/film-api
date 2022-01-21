const {entity} = require("./Entity");

module.exports.Movie = class Movie extends entity {

    constructor(data) {

        super();

        this.author = data.author;
        this.categorie = data.categorie;
        this.description = data.description;
        this.setImage(data.image); 
        this.like = 0;
        this.name = data.name;
        this.setVideo(data.video);
    }

    setImage(image) {
        this.image = this.toUri(image);
    }

    setVideo(video) {
        this.video = this.toUri(video);
    }

}