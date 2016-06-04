'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Csv', {
      _MD5: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true//,
      //autoIncrement: true
      },
      ClassificationName: DataTypes.STRING,
      ClassificationType: DataTypes.STRING,
      Size: DataTypes.INTEGER,
      FileType: DataTypes.STRING
    });
  //   _id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     primaryKey: true,
  //     autoIncrement: true
  //   },
  //   name: DataTypes.STRING,
  //   info: DataTypes.STRING,
  //   active: DataTypes.BOOLEAN
  // });
}
