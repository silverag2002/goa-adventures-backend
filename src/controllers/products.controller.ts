import { Request, Response } from "express";
import db from "../models";
const mediaInput = require("../middlewares/mediaInput");
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

const Product = db.product;

// Create and Save a new blog
export const create = async (req: any, res: Response): Promise<void> => {
  try {
    // Validate request

    console.log("Working", req.body);

    if (req.files?.featured_image) {
      let response = await mediaInput.uploadMedia(req.files.featured_image[0]);

      if (!response.uploaded) {
        res.status(500).send({
          message: "File Could not get uploaded please try again later!",
        });
      }
      req.body.featured_image = response.url;
    }
    console.log("First one done", req.body.featured_image);
    if (req.files?.gallery) {
      let gallery = [];
      console.log("Gallery array", req.files.gallery);
      for (let i = 0; i < req.files?.gallery.length; i++) {
        console.log("buffer", req.files.gallery[i]);
        let response = await mediaInput.uploadMedia(req.files.gallery[i]);

        if (!response.uploaded) {
          res.status(500).send({
            message: "File Could not get uploaded please try again later!",
          });
        }
        gallery.push(response.url);
        console.log("Gallery image", gallery);
      }
      console.log("Final gallery allotment", gallery);
      req.body.gallery = gallery;
    }
    if (req.body.highlight?.length > 3) {
      req.body.highlight = JSON.parse(req.body.highlight);
    }
    if (req.body.activity_inclusion?.length > 3) {
      req.body.activity_inclusion = JSON.parse(req.body.activity_inclusion);
    }
    if (req.body.activity_exclusion?.length > 3) {
      req.body.activity_exclusion = JSON.parse(req.body.activity_exclusion);
    }
    req.body.allow_cancel = Boolean(req.body.allow_cancel);
    req.body.allow_deposit = Boolean(req.body.allow_deposit);

    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    console.log("Requst", req.body);
    // Save blog in the database
    const data = await Product.create(req.body);
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
    const content = req.query.content;
    const condition = content ? { state_name: content } : null;

    const data = await Product.findAll({ where: condition });
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const findOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    const data = await Product.findByPk(id);
    if (!data) {
      res.status(404).send({ message: "Not found blog with id " + id });
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

    const [rowsUpdated] = await Product.update(req.body, {
      where: { id: id },
    });

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Product with id=${id}. Maybe Product was not found!`,
      });
    } else {
      res.send({ message: "Product was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Product with id=",
    });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const rowsDeleted = await Product.destroy({
      where: { id: id },
    });

    if (rowsDeleted === 0) {
      res.status(404).send({
        message: `Cannot delete Product with id=${id}. Maybe Product was not found!`,
      });
    } else {
      res.send({
        message: "Product was deleted successfully!",
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
    const rowsDeleted = await Product.destroy({
      where: {},
      truncate: false,
    });

    res.send({
      message: `${rowsDeleted} Products were deleted successfully!`,
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
    const data = await Product.findAll({ where: { published: true } });
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};
