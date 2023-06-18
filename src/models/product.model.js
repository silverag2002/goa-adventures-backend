module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define("products", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    video: {
      type: Sequelize.STRING,
    },
    overview: {
      type: Sequelize.TEXT("long"),
    },
    duration: {
      type: Sequelize.STRING,
    },
    creator: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    category_type: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    min_people: {
      type: Sequelize.INTEGER,
    },
    booking_period: {
      type: Sequelize.INTEGER,
    },
    max_people: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.DECIMAL,
    },
    deposit_value: {
      type: Sequelize.DECIMAL,
    },
    discount_percent: {
      type: Sequelize.DECIMAL,
    },
    highlight: {
      type: Sequelize.TEXT("long"),
    },
    activity_inclusion: {
      type: Sequelize.JSON,
    },
    activity_exclusion: {
      type: Sequelize.JSON,
    },
    // city_info: {
    //   type: Sequelize.ARRAY(Sequelize.JSON),
    // },

    start_time: {
      type: Sequelize.DATE,
    },
    createdAt: {
      field: "created_at",
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: "updated_at",
      type: Sequelize.DATE,
    },
  });

  return Blog;
};
