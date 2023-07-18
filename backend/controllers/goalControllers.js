const asyncHandler = require('express-async-handler')
 const Goal = require('../model/goalModel')


//@route GET /api/goals


const getGoals = asyncHandler (async(req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals);
  }) 


const setGoals = asyncHandler (async(req, res) => {

  if(!req.body.text){
      res.status(400)
      throw new Error("add name field properly")
  }

  
  const goal =  await Goal.create({
      text: req.body.text
    })
    res.status(200).json(goal);
});



const updateGoals =  asyncHandler (async(req, res) => {

    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Msg not found')
    }

    const updateGoal = await  Goal.findByIdAndUpdate(req.params.id, req.body, {
        new : true
    })
  res.status(200).json(updateGoal);
});


const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    console.log(goal, "goal id in delete"); // Fixed typo in the log statement
    if (!goal) {
      res.status(400);
      throw new Error('Msg not found');
    }
  
    await Goal.deleteOne({ _id: req.params.id });
  
    res.status(200).json({ id: req.params.id });
  });
  
// const deleteGoals = asyncHandler (async(req, res) => {
//     const goal = await Goal.findById(req.params.id)
//     console.log(goal,"gooaalll idd in delete");
//     if(!goal){
//         res.status(400)
//         throw new Error('Msg not found')
//     }

//     await goal.remove()

//   res.status(200).json({id : req.params.id});
// });

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
