module.exports = (sequelize, Sequelize) => {
    const Colors = sequelize.define(
        "Colors",
        {
            Name: {
                type: Sequelize.DataTypes.STRING,
                unique: true,
                allowNull: false,
            }
        },
        {
            timestamps: false,
        }
    );
    return Colors;
}