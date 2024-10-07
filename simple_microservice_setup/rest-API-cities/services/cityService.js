class CityService {
    constructor(db) {
        this.Client = db.sequelize;
        this.City = db.Cities;
    }

    async getCities() {
        return this.City.findAll({
            where: {}
        })
    }

    async addCity(city) {
        return this.City.create({
            Name: city
        })
    }

    async removeCity(city) {
        return this.City.destroy({
            where: {
                Name: city
            }
        })
    }


}

module.exports = CityService;