module.exports.entity = class Entity {


    toUri(param) {
        return param ? encodeURI(param) : undefined;
    }

    toFirebaseEntity() {

        let object = {}

        Object.keys(this).map(item => {
            object[item] = this[item];
        })

        return object;

    }

}