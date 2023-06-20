import { Sequelize, DataTypes, Model } from "sequelize";

interface CityAttributes {
  id: number;
  state_name: string;

  city_info: any[];
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class City extends Model<CityAttributes> implements CityAttributes {
    public id!: number;
    public state_name!: string;

    public city_info!: any[];
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  City.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      state_name: {
        type: DataTypes.STRING,
      },

      city_info: {
        type: DataTypes.JSON,
      },

      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "City",
      tableName: "indian_cities",
    }
  );

  return City;
};
