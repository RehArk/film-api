module.exports.Service = class Service {

    constructor(db, table) {
        this.db = db.db;
        this.table = table;
    }

    name(upper = true) {

        let name = this.table.slice(0, this.table.length - 1);

        if(upper) {
            name = name.charAt(0).toUpperCase() + name.slice(1, name.length);
        }

        return name;
    }

    // ---------- Get All ---------- //

    getAll() {

        return this.db.collection(this.table)
            .get()
            .then((elements) => {
                let entities = [];
                elements.forEach((element) => {
                    entities.push({id: element.id, ...element.data()});
                })
                return {code: 200, data: entities}
            })
            .catch(() => {
                return {code: 500, data: `500 Error : Could not get ${this.name(false)}s`}
            })
        ;
    }

    // ---------- CRUD ---------- //

    get(id) {

        return this.db.collection(this.table).doc(id)
            .get()
            .then((element) => {
                if(!element.exists) {
                    return {code: 404, data: `404 Error : ${this.name()} not found`}
                }
                return {code: 200, data: element.data()}
            })
            .catch(() => {
                return {code: 500, data: `500 Error : Could not get ${this.name(false)}`}
            })
        ;
    }

    create(entity) {

        return this.db.collection(this.table).add(entity.toFirebaseEntity())
            .then((element) => {
                return {code: 200, data: element.id}
            })
            .catch(() => {
                return {code: 500, data: `500 Error : Could not create ${this.name(false)}`}
            })
        ;
    }

    update(id, entity) {

        return this.db.collection(this.table).doc(id)
            .update(entity.toFirebaseEntity())
            .then((element) => {
                return {code: 200, data: `${this.name()} succesfull updated`};
            })
            .catch((e) => {
                if(e.code == 5) {
                    return {code: 500, data: `404 Error : ${this.name()} not found`}
                }
                return {code: 500, data: `500 Error : Could not update ${this.name(false)}`};
            })
        ;
    }

    delete(id) {
  
        return this.get(id)
            .then((element) => {

                if(element.code == 404) {
                    return element;
                }
                
                return this.db.collection(this.table).doc(id)
                    .delete()
                    .then((element) => {
                        return {code: 200, data: `${this.name()} succesfull deleted`};
                    })
                    .catch(() => {
                        return {code: 500, data: `Could not delete ${this.name(false)}`};
                    })
                ;
            })
            .catch(() => {
                return {code: 404, data: `404 Error : ${this.name()} not found`};
            })
        ;
    }
}