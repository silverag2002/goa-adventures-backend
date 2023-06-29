import { Sequelize, DataTypes, Model } from "sequelize";
const categories = require("./categories.model.ts");
// const Category = db.categories;

interface SubCategoryAttributes {
  category: string;
  subcategory: string;

  subcategory_image: string;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class SubCategory
    extends Model<SubCategoryAttributes>
    implements SubCategoryAttributes
  {
    public category!: string;
    public subcategory!: string;

    public subcategory_image!: string;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
      // Define associations with other models
    }
  }

  SubCategory.init(
    {
      category: {
        type: DataTypes.STRING,
        references: {
          model: categories,
          key: "category",
        },
      },
      subcategory: {
        type: DataTypes.STRING,
      },

      subcategory_image: {
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
      modelName: "SubCategory",
      tableName: "subcategories",
    }
  );

  return SubCategory;
};
