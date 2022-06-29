const users = require('../data/index');



// Gets All Users
const listUsers = (req, res) => {
    return res.json(users);
};

// Gets ONE user
const showUser =(req, res) => {
    res.json(users.filter(user => user._id === parseInt(req.params.id)))
  };

  // Creates new user
const createUser = (req, res) => {
    const length = users.length;
    const newUser = {
      id: length + 1,
      ...req.body
    }
    users.push(newUser)
    res.json(users)
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