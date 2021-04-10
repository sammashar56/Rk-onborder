import {getAllsellers, updateSeller, newSeller, getSpecificSeller, removeSeller, getsingleSeller} from "../controllers/sellers";

export const fetchAllsellers = (req, res, next) => {
    getAllsellers()
    .then(Response => {
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
    // console.log(req.params.seller_id);
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

// fetches specific sellers added by the user
export const fetchSpecificSellers = (req, res, next) => {
    console.log(req.user._id);
    getSpecificSeller(req.user._id)
    .then(Response => {
        res.status(200).json({ ...Response});
    })
    .catch(err => {
        console.log(err);
          res.status(err.status || 500).json({ message: err.message});
    });
};

export const deleteSeller = (req, res, next) => {
    // const data = {
    //     user: req.user._id,
    //     ...req.body
    // };
    console.log(req.params.seller_id);
    removeSeller( req.params.seller_id)
    .then(Res => {
        res.status(201).json(Res);
    })
    .catch(err => {
        res.status(err.status || 400).json(err);
    });
};

//fetching a specific seller by id
export const fetchSpecificSeller = (req, res, next) => {
    getsingleSeller(req.seller._id)
    .then(Response => {
        res.status(200).json({ ...Response});
    })
    .catch(err => {
        console.log(err);
          res.status(err.status || 500).json({ message: err.message});
    });

}