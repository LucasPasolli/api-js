import {sequelize} from "../data/db.js";
import { DataTypes } from "sequelize";

export const Local = sequelize.define(
    'STARBUCKS_DIRECTORY',
    {
      STORE_NUMBER: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      STREET_ADDRESS: {
        type: DataTypes.STRING,
      },
      CITY: {
        type: DataTypes.STRING,
      },
      CITY: {
        type: DataTypes.STRING,
      },
      PROVINCE: {
        type: DataTypes.STRING,
      },
      COUNTRY: {
        type: DataTypes.STRING,
      },
      POSTCODE: {
        type: DataTypes.STRING,
      },
      LONGITUDE: {
        type: DataTypes.FLOAT,
      },
      LATITUDE: {
        type: DataTypes.FLOAT,
      },
    },
    {
      freezeTableName: true,
      timestamps: false
    },
  );