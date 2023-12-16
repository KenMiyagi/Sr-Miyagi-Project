const { createUserAccController } = require("../Controllers/User/createUserAccController");
const { getUsersController } = require("../Controllers/User/getUsersController");
const { updateUserController } = require("../Controllers/User/updateUserController");
const { getUsersByIdController } = require("../Controllers/User/getUsersByIdController");
const { deleteUserController } =require("../Controllers/User/deleteUserController")
const { restoreUserController } =require("../Controllers/User/restoreUserController")
const { getUserByNameController } = require("../Controllers/User/getUserByNameController");
const { updatePassUserController } = require("../Controllers/User/updatePassUserController");

const { getAdminAccController } = require("../Controllers/Admin/getAdminAccController")

  const userSignUpHandler = async (req, res) => {
    try {
      const findAcc = await getAdminAccController(req.body.email);
      if (findAcc) return res.status(400).json({ error: "Email in use" });
  
      const userToken = await createUserAccController(req.body);
      if (userToken === "used")
        return res.status(400).json({ error: "Email in use" });
      return res.status(200).json({ ...userToken, type: "user" });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ error: error.message });
    }
  };
  
  const getUsersHandler = async (req, res) => {
    try {
      const {value} = req.query
      const users =  await getUsersController(value)
   
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
  const updateUserHandler = async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await updateUserController(req.body, id);
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getUsersByIdHandler = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await getUsersByIdController(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const getFreelancersHandler = async (req, res) => {
    try {
      const freelancers = await getFreelancersController();
      res.status(200).json(freelancers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const deleteUserHandler = async (req, res) =>{
    try {
        const {id} = req.params
        const deleted = await deleteUserController(id)
        if(deleted) return res.status(200).json({message: deleted})
        return res.status(400).json({error: "User not found"})
    } catch (error) {
        res.status(200).json({error:error.message})
    }
  }
  
  const restoreUserHandler = async (req, res) => {
    try {
        const {id} = req.params
        const restored = await restoreUserController(id)
        if(restored) return res.status(200).json(restored)
        return res.status(400).json({error: "User not found"})
    } catch (error) {
        res.status(200).json({error:error.message})
    }
  }
  
  const getUserByNameHandler = async(req, res) => {
    try {
      const { name } = req.query;
  
      const response = await getUserByNameController(name)
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).send(error.message)
    }
  }
  
  const updatePassUserHandler = async (req, res)=> {
    console.log("hola");
    try {
      const { oldPassword, newPassword } = req.body;
      const { id } = req.params;
      const response = await updatePassUserController(id, oldPassword, newPassword)
      if(response){
        return res.status(200).send("Contraseña actualizada")
  
      }
    } catch (error) {
      return res.status(400).json({error:error.message})
    }
  };
  
  module.exports = {
    userSignUpHandler,
    getUsersHandler,
    updateUserHandler,
    getUsersByIdHandler,
    deleteUserHandler,
    restoreUserHandler,
    getUserByNameHandler,
    updatePassUserHandler
  };
  
  
  