const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connetion');

class Comment extends Model {}

Comment.init(
    {
        id: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
     {  comment_content: DataTypes.TEXT,
        allowNull: false
    },
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
    
        },

        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'post',
                key: 'id'
            }
        }

    },

    // Add user_id(refernce user model)
    // Add post_id(refernce post model)
    //add 



    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
)

module.exports = Comment