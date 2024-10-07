class ColorService {
    constructor(db) {
        this.Client = db.sequelize;
        this.Color = db.Colors;
    }

    async getColors() {
        return this.Color.findAll({
            where: {}
        });
    }

    async addColor(color) {
        return this.Color.create({
            Name: color
        })
    }

    async deleteColor(color) {
        return this.Color.destroy({
            where: {
                Name: color
            }
        })
    }
}

module.exports = ColorService;