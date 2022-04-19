import UserModel from "../models/use.model.js";
import mongoose from "mongoose";

const { find, findOne } = mongoose;
export async function createOneRequest(req, res) {
  // req.body is for POST requests. Think 'body of the postman'
  // destruct the name value from the request body
 
//   console.log(req.body);
const { rank, country, name } = req.body;
  // check if database already contains this name rank and country
  try {
    const foundUser = await UserModel.find({rank});
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
  try{
    const foundUser = await UserModel.findOne({_id:req.params.id});
    if (!foundUser || foundUser.length == 0) {
      throw new Error("err")
    }
    res.status(302).json({
      success:true,
      message: foundUser
    });

  }catch(err){
    res.status(400).json({
      success:false,
      message:"user not found"
    })
  }
  
}
export async function readAllRequest(req, res) {
  // Best request is GET, we can get the ID from the request
  // parameters.

  // attempt to retrieve user
  try{
    const foundUser = await UserModel.find({});
    if (!foundUser || foundUser.length == 0) {
      throw new Error("err")
    }
    res.status(302).json({
      success:true,
      message: foundUser
    });

  }catch(err){
    res.status(400).json({
      success:false,
      message:"user not found"
    })
  }
  
}
export async function updateOneRequest(req, res) {
  const { id } = req.body;
try{
  const foundUser = await UserModel.findOne({_id:req.params.id});
  if(!foundUser){
    throw new Error("err")
  }
  if (foundUser || foundUser.length == 0) {
    const response = await foundUser.updateOne({ 
      name:req.body.name
     });
     res.status(301).json({
      success: true,
      message:"user update successfully"
    });
    }
 
    
    
}catch(err){
  res.status(404).json({ message: `User not found...` });
}
}
export async function deleteOneRequest(req, res) {
  const { id } = req.params;
  const foundUser = await UserModel.findOne({ _id: id });
  if (foundUser || foundUser.length == 0) {
    const response = await foundUser.deleteOne({ _id: id });
    res.status(202).json(response);
  } else {
    res.status(404).json({ message: `User not found...` });
  }
}
