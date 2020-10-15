module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id:{
            type:dataTypes.INTEGER(),
            allowNull:false, 
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(50),
            allowNull:false,
            validate: {
                isAlpha:{
                    args:true,
                    msg:"El nombre solo puede contener letras"
                }
            }
        },
        apellido:{
            type:dataTypes.STRING(50),
            allowNull:false,
            validate: {
                isAlpha:{
                    msg:"El apellido solo puede contener letras"
                }
            }
        },
        email:{
            type:dataTypes.STRING(50),
            allowNull:false,
            unique:true,
        },
        contraseña:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        direccion:{
            type:dataTypes.STRING(100)
        },
        localidad:{
            type:dataTypes.STRING(100)
        },
        
        avatar:{
            type:dataTypes.STRING(100)
        }
    }
    let config = {
        tableName: "users",
        timestamps: true,
        underscored:true
    }
    const User = sequelize.define(alias,cols,config);
    /*User.associate = function(models){
        User.hasOne(models.Stores,{
            as:"tienda",
            foreignKey:"id_usuario"
        })

    }*/
    return User;
}
