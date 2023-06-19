import { Sequelize, DataTypes, Model } from "sequelize";

interface CountryAttributes {
  id: number;
  country_name: string;

  country_details: {
    sortname: string;
    country_id: number;
    country_name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Country extends Model<CountryAttributes> implements CountryAttributes {
    public id!: number;
    public country_name!: string;

    public country_details!: {
      sortname: string;
      country_id: number;
      country_name: string;
    };
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Country.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      country_name: {
        type: DataTypes.STRING,
      },

      country_details: {
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
      modelName: "Country",
      tableName: "countries",
    }
  );

  return Country;
};
