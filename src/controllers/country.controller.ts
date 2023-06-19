import { Request, Response } from "express";
import db from "../models";

const Country = db.countries;

// Create and Save a new blog
export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request
    if (!req.body.content) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Save blog in the database
    const data = await Country.create(req.body);
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

    const data = await Country.findAll({ where: condition });
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

    const data = await Country.findByPk(id);
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

    const [rowsUpdated] = await Country.update(req.body, {
      where: { id: id },
    });

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Country with id=${id}. Maybe Country was not found!`,
      });
    } else {
      res.send({ message: "Country was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Country with id=",
    });
  }
};

export const deleteCountry = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const rowsDeleted = await Country.destroy({
      where: { id: id },
    });

    if (rowsDeleted === 0) {
      res.status(404).send({
        message: `Cannot delete Country with id=${id}. Maybe Country was not found!`,
      });
    } else {
      res.send({
        message: "Country was deleted successfully!",
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
    const rowsDeleted = await Country.destroy({
      where: {},
      truncate: false,
    });

    res.send({
      message: `${rowsDeleted} Countrys were deleted successfully!`,
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
    const data = await Country.findAll({ where: { published: true } });
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};
