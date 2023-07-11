import { Sequelize, DataTypes, Model } from "sequelize";
const product = require("./product.model.ts");
const categories = require("./categories.model.ts");
const subcategories = require("./subcategories.model.ts");
const customer = require("./customer.model.ts");
// const Category = db.categories;

interface BookingAttributes {
  product_id: Number;
  category_id: Number;
  sub_category_id: Number;
  total_seat: string;
  total_amount: string;
  deposit_amount: string;
  invoice: string;
  booking_date: string;
  start_date: string;
  customer_id: Number;
  //   payment_id: string;
  payment_mode: string;
  customer_mobile_number: string;
  destination_location: string;
  booked_by: string;

  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Booking extends Model<BookingAttributes> implements BookingAttributes {
    public product_id!: Number;
    public category_id!: Number;
    public sub_category_id!: Number;
    public total_seat!: string;
    public total_amount!: string;
    public deposit_amount!: string;
    public invoice!: string;
    public booking_date!: string;
    public start_date!: string;
    public customer_id!: Number;
    // public payment_id!: string;
    public payment_mode!: string;
    public customer_mobile_number!: string;
    public destination_location!: string;
    public booked_by!: string;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  Booking.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: product,
          key: "id",
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: categories,
          key: "id",
        },
      },
      sub_category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: subcategories,
          key: "id",
        },
      },
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: customer,
          key: "id",
        },
      },
      total_seat: {
        type: DataTypes.STRING,
      },
      total_amount: {
        type: DataTypes.STRING,
      },
      deposit_amount: {
        type: DataTypes.STRING,
      },

      booking_date: {
        type: DataTypes.STRING,
      },
      start_date: {
        type: DataTypes.STRING,
      },
      //   payment_id: {
      //     type: DataTypes.STRING,
      //   },
      payment_mode: {
        type: DataTypes.STRING,
      },
      booked_by: {
        type: DataTypes.STRING,
      },
      customer_mobile_number: {
        type: DataTypes.STRING,
      },
      destination_location: {
        type: DataTypes.STRING,
      },

      invoice: {
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
      modelName: "Booking",
      tableName: "bookings",
    }
  );

  return Booking;
};
