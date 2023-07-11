import { Request, Response } from "express";
import db from "../models";
const mediaInput = require("../middlewares/mediaInput");
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

const Staff = db.staff;

// Create and Save a new blog
export const create = async (req: any, res: Response): Promise<void> => {
  try {
    // Validate request
    console.log("Working", req.files);
    // if (req.files?.categoryImage) {
    //   console.log("req.license", req.files.categoryImage);
    //   const banner = mediaInput.randomImageName();
    //   const params = {
    //     Bucket: process.env.BUCKET_NAME,
    //     Key: banner,
    //     Body: req.files.categoryImage[0].buffer,
    //     ContentType: req.files.categoryImage[0].mimetype,
    //   };
    //   console.log("PArams", params);
    //   const command = new PutObjectCommand(params);
    //   const response = await mediaInput.s3.send(command);
    //   console.log("URl for banner response", response);
    //   req.body.category_image = `https://${process.env.BUCKET_NAME}.s3.${process.env.BUCKET_REGION}.amazonaws.com/${banner}`;
    // }

    if (req.files?.categoryImage) {
      let response = await mediaInput.uploadMedia(req.files.categoryImage[0]);

      if (!response.uploaded) {
        res.status(500).send({
          message: "File Could not get uploaded please try again later!",
        });
      }
      req.body.category_image = response.url;
    }
    console.log("Req.body", req.body);
    if (!req.body.category || !req.body.category_image) {
      console.log("Flailed");
      res.status(400).send({ message: "Content missing in body!" });
      return;
    }

    // Save blog in the database
    const data = await Staff.create(req.body);
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the product.",
    });
  }
};

export const findAll = async (req: Request, res: Response): Promise<void> => {
  console.log("hitted");
  try {
    // const content = req.query.content;
    // const condition = content ? { state_name: content } : null;
    const condition = null;

    const data = await Staff.findAll({ where: condition });
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const findByState = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const state = decodeURIComponent(req.params.state);

    const data = await Staff.findOne({
      where: { state_name: state },
      attributes: ["city_info"],
    });
    if (!data) {
      res.status(404).send({ message: "Not found blog with id " });
    } else {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({ message: "Error retrieving blog with id=" });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    const [rowsUpdated] = await Staff.update(req.body, {
      where: { id: id },
    });

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Staff with id=${id}. Maybe Staff was not found!`,
      });
    } else {
      res.send({ message: "Staff was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Staff with id=",
    });
  }
};

export const deleteStaff = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const rowsDeleted = await Staff.destroy({
      where: { id: id },
    });

    if (rowsDeleted === 0) {
      res.status(404).send({
        message: `Cannot delete Staff with id=${id}. Maybe Staff was not found!`,
      });
    } else {
      res.send({
        message: "Staff was deleted successfully!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Tutorial with ",
    });
  }
};

export const deleteAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const rowsDeleted = await Staff.destroy({
      where: {},
      truncate: false,
    });

    res.send({
      message: `${rowsDeleted} Staffs were deleted successfully!`,
    });
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all blogs.",
    });
  }
};

export const findAllPublished = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await Staff.findAll({ where: { published: true } });
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};
