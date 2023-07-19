const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");
const User = require("../model/userModel");

//@route GET /api/goals

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("add name field properly");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Msg not found");
  }
  const user = await User.findById(req.user.id);
  //check user
  if (!user) {
    res.status(401);
    throw new Error("User not founddd");
  }

  //make sure user match
  if(goal.user.toString() !==user.id){
res.status(401)
throw new Error('user not authorized')

  }
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  console.log(goal, "goal id in delete"); // Fixed typo in the log statement
  if (!goal) {
    res.status(400);
    throw new Error("Msg not found");
  }

  await Goal.deleteOne({ _id: req.params.id });

  res.status(200).json({ id: req.params.id });
});



module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
