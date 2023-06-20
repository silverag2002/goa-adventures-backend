import { Sequelize, DataTypes, Model } from "sequelize";

interface ProductAttributes {
  id?: number;
  title: string;
  gallery: string;
  featured_image: string;
  allow_cancel: string;
  video: string;
  overview: string;
  duration: string;
  creator: string;
  state: string;
  category: string;
  category_type: string;
  city: string;
  country: string;
  min_people: number;
  booking_period: number;
  max_people: number;
  price: number;
  deposit: string;
  deposit_value: number;
  discount_percent: number;
  highlight: string;
  activity_inclusion: any[];
  activity_exclusion: any[];
  start_time: String;
  createdAt: Date;
  updatedAt: Date;
  last_update_by: string;
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
    public gallery!: string;
    public featured_image!: string;
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
    public start_time!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public deposit!: string;
    public allow_cancel!: string;
    public last_update_by!: string;
    public country!: string;

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
      featured_image: {
        type: DataTypes.TEXT("long"),
      },
      gallery: {
        type: DataTypes.TEXT("long"),
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
      allow_cancel: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      country: {
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
      last_update_by: {
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
        type: DataTypes.STRING,
      },
      deposit: {
        type: DataTypes.STRING,
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
