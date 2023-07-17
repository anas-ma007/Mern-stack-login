const asyncHandler = require('express-async-handler')


// @desc Get goal
//@route GET /api/goals
// @access Private

const getGoals = asyncHandler (async(req, res) => {
    res.status(200).json({ message: "test postmaan get" });
  }) 

// @desc Set goal
//@route POST /api/goals
// @access Private

const setGoals = asyncHandler (async(req, res) => {

  if(!req.body.name){
      res.status(400)
      throw new Error("add name field properly")
  }

  res.status(200).json({ message: " test post requstt set " });
});

// @desc update goal
//@route PUT /api/goals
// @access Private

const updateGoals =  asyncHandler (async(req, res) => {
  res.status(200).json({ message: `test put method  ${req.params.id}` });
});

// @desc delete goal
//@route DELETE /api/goals
// @access Private

const deleteGoals = asyncHandler (async(req, res) => {
  res.status(200).json({ message: `delet method  ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
