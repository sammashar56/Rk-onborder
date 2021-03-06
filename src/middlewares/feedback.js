import {newFeedback} from "../controllers/feedback";

export const addFeedback = (req, res, next) => {
    const data = {
        ...req.body,
        user: req.user._id
    };
    console.log(data);
     newFeedback(data)
    .then(Response => {
        res.status(201).json(Response);
    })
    .catch(err => {
        res.status(err.status || 500).json({message: err.message});
    });
}