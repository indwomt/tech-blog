const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Post extends Model {}
Post.init (
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        post_title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        post_content: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        }

        //add user_id reference from user model
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
      }
)

module.exports = User