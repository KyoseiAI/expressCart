'use strict';
module.exports = (sequelize, DataTypes) => {
    const TagJoin = sequelize.define('TagJoin', {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        },
        tagId: {
        type: DataTypes.INTEGER
        },
        taggable: {
        type: DataTypes.STRING
        },
        taggableId: {
        type: DataTypes.INTEGER,
        references: null
        },
        createdAt: {
        allowNull: false,
        type: DataTypes.DATE
        },
        updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
        }
    },{
        tableName: 'tag_joins',
        timestamps: true
    });

    TagJoin.prototype.getItem = function(options) {
        return this['get' + this.get('taggable').substr(0, 1).toUpperCase() + this.get('taggable').substr(1)](options);
    };

    TagJoin.associate = function(models){
        TagJoin.belongsTo(models.Problem, {
        foreignKey: 'taggableId',
        constraints: false
        });

        TagJoin.belongsTo(models.Tag, {
        foreignKey: 'tagId',
        });
    };

    return TagJoin;
};