import { Sequelize, DataTypes, Model } from "sequelize";

interface StaffAttributes {
  name: string;
  mobile_number: string;
  email: string;
  aadhar_number: string;
  active: Boolean;
  profile_image: string;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Staff extends Model<StaffAttributes> implements StaffAttributes {
    public name!: string;
    public mobile_number!: string;
    public email!: string;
    public aadhar_number!: string;
    public active!: Boolean;
    public profile_image!: string;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Staff.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      mobile_number: {
        type: DataTypes.STRING,
      },
      aadhar_number: {
        type: DataTypes.STRING,
      },
      active: {
        type: DataTypes.BOOLEAN,
      },

      profile_image: {
        type: DataTypes.TEXT("long"),
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
      modelName: "Staff",
      tableName: "staff",
    }
  );

  return Staff;
};
