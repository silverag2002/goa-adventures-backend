import { Sequelize, DataTypes, Model } from "sequelize";

interface ProductAttributes {
  id: number;
  title: string;
  video: string;
  overview: string;
  duration: string;
  creator: string;
  state: string;
  category: string;
  category_type: string;
  city: string;
  min_people: number;
  booking_period: number;
  max_people: number;
  price: number;
  deposit_value: number;
  discount_percent: number;
  highlight: string;
  activity_inclusion: any[];
  activity_exclusion: any[];
  start_time: Date;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Product extends Model<ProductAttributes> implements ProductAttributes {
    public id!: number;
    public title!: string;
    public video!: string;
    public overview!: string;
    public duration!: string;
    public creator!: string;
    public state!: string;
    public category!: string;
    public category_type!: string;
    public city!: string;
    public min_people!: number;
    public booking_period!: number;
    public max_people!: number;
    public price!: number;
    public deposit_value!: number;
    public discount_percent!: number;
    public highlight!: string;
    public activity_inclusion!: any[];
    public activity_exclusion!: any[];
    public start_time!: Date;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      video: {
        type: DataTypes.STRING,
      },
      overview: {
        type: DataTypes.TEXT("long"),
      },
      duration: {
        type: DataTypes.STRING,
      },
      creator: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
      },
      category_type: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      min_people: {
        type: DataTypes.INTEGER,
      },
      booking_period: {
        type: DataTypes.INTEGER,
      },
      max_people: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.DECIMAL,
      },
      deposit_value: {
        type: DataTypes.DECIMAL,
      },
      discount_percent: {
        type: DataTypes.DECIMAL,
      },
      highlight: {
        type: DataTypes.TEXT("long"),
      },
      activity_inclusion: {
        type: DataTypes.JSON,
      },
      activity_exclusion: {
        type: DataTypes.JSON,
      },
      start_time: {
        type: DataTypes.DATE,
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
      modelName: "Product",
      tableName: "products",
    }
  );

  return Product;
};
