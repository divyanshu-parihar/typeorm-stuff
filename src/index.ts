import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import express from "express";
import { Request, Response } from "express-serve-static-core";

const app = express();

app.use(express.json());
//create
app.post("/users", async (req: Request, res: Response) => {
  const { name, email, role } = req.body;
  try {
    const user = User.create({ name, email, role });
    await user.save();
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//read
app.get("/users", async (_: Request, res: Response) => {
  try {
    const users = await User.find()
    
    return res.status(201).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
// update
// Delete
// find

createConnection()
  .then(async (connection) => {
    app.listen(5000, () =>
      console.log("Server Started at http://localhost:5000")
    );
  })
  .catch((error) => console.log(error));
