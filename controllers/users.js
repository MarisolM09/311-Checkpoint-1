
const users = require('../data/index');


// Gets All Users
const listUsers = (req, res) => {
    try {
      return res.json(users);
    } catch (error) {
      res.status(400).send("Oh uh, we couldn't find any data");
    }
  
};

// Gets ONE user
const showUser = (req, res, next) => {
    let found = users.filter(user => user.id === parseInt(req.params.id))
  if(found.length === 0)return next(new Error("Id does not exist"))
      res.json(users)
  };

  // Creates new user
const createUser = (req, res) => {
    try {
      console.log(req.body)
      if(req.body.length == null){
        throw new Error("You must provide details")
      }
      const length = users.length;
    const newUser = {
      id: length + 1,
      ...req.body
    }
    users.push(newUser)
    res.json(users)
      
    } catch (error) {
      console.log(error)
      res.status(400).json(error.message)
    }
    
  };

  // Updates user info
const updateUser = (req, res) => {
    let id = +req.params.id;
    let body = req.body;
    let index = users.findIndex((user) => user._id === id);
    let updatedUser = { _id: id, ...body };
    users[index] = updatedUser;
    res.send(updatedUser)
  };


  // deletes User
  const deleteUser = (req, res) => {
    let id = +req.params.id;
    let index = users.findIndex((user) => user._id === id);
    let deletedUser = users.splice(index, 1);
    res.send(deletedUser);
    
  };


  module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}