module.exports = (sequelize, Sequelize) => {
    const Cities = sequelize.define(
        "Cities",
        {
            Name: {
                type: Sequelize.DataTypes.STRING,
                unique: true,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );
    return Cities;
}