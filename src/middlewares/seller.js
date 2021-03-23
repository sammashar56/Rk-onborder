import {getAllsellers, updateSeller,newSeller} from "../controllers/sellers";

export const fetchAllsellers = (req, res, next) => {
    getAllsellers( req.query).then(Response => {
        res.status(200).json({...Response});
        console.log(req.query)
    })
    .catch(err => {
        res.status(err.status || 500).json({message: err.message})
    });
};

export const editSeller = (req, res, next) => {
    const data = {
        user: req.user._id,
        ...req.body
    };
    updateSeller(data, req.params.seller_id)
    .then(Res => {
        res.status(201).json(Res);
    })
    .catch(err => {
        res.status(err.status || 400).json(err);
    });
};

export const addSeller = (req, res) => {
    const data = {
        ...req.body,
        user: req.user._id,
    };

    newSeller(data)
    .then(Res => {
        res.status(201).json(Res);
    })
    .catch(err => {
        res.status(err.status || 500).json({message: err.message});
    });
};

export const fetchSpecificSeller = (req, res) => {
    getSpecificSeller( req.user._id).then(Response => {
        res.status(200).json({ ...Response});
    })
    .catch(err => {
        console.log(err);
          res.status(err.status || 500).json({ message: err.message});
    });
};