import { Sequelize, DataTypes, Model } from "sequelize";

interface StateAttributes {
  id: number;
  country_name: string;

  states: any[];
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class State extends Model<StateAttributes> implements StateAttributes {
    public id!: number;
    public country_name!: string;

    public states!: any[];
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  State.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      country_name: {
        type: DataTypes.STRING,
      },

      states: {
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
      modelName: "State",
      tableName: "states",
    }
  );

  return State;
};
