'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Articulo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Categoria, { foreignKey: 'categoriaId', as: 'categoria' })
        }
    };
    Articulo.init({
        codigo: DataTypes.STRING,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        precio_venta: DataTypes.INTEGER,
        stock: DataTypes.INTEGER,
        estado: DataTypes.INTEGER,
        categoriaId: DataTypes.INTEGER,
        imagen: DataTypes.BLOB,
        url: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Articulo',
    });
    return Articulo;
};