import UserModel from "../models/use.model.js";
import mongoose from "mongoose";
export async function createOneRequest(req, res) {
  // req.body is for POST requests. Think 'body of the postman'
  // destruct the name value from the request body
  const { rank, country, name } = req.body;
  const { find, findOne } = mongoose;
//   console.log(req.body);

  // check if database already contains this name
  try {
    const foundUser = await find({rank});
    console.log(foundUser);

    // if no user is found, we can add this user to the database.
    if (!foundUser || foundUser.length == 0) {
      const user = new UserModel({ rank, country, name });

      const response = await user.save();
      console.log(response);
      res.status(201).send(response);
    } else {
      res.status(409).json({ message: "User already exists!" });
    }
  } catch (err) {
    console.log(err);
  }
}
export async function readOneRequest(req, res) {
  // Best request is GET, we can get the ID from the request
  // parameters.

  // attempt to retrieve user
  const foundUser = await findOne(req.params.id);

  // return 404 if no user found, return user otherwise.
  if (!foundUser || foundUser.length == 0) {
    res.status(404).json({ message: "User not found!" });
  } else {
    res.status(302).json(foundUser);
  }
}
export async function updateOneRequest(req, res) {
  const { id } = req.body;
  const foundUser = await findOne({ _id: id });
  if (foundUser || foundUser.length == 0) {
    const response = await foundUser.updateOne({ _id: id });
    res.status(301).json(response);
  } else {
    res.status(404).json({ message: `User not found...` });
  }
}
export async function deleteOneRequest(req, res) {
  const { id } = req.params;
  const foundUser = await findOne({ _id: id });
  if (foundUser || foundUser.length == 0) {
    const response = await foundUser.deleteOne({ _id: id });
    res.status(202).json(response);
  } else {
    res.status(404).json({ message: `User not found...` });
  }
}
