import Seller from "../models/seller";
import User from "../models/user";

export const newSeller = async (data) => {
    const user = await User.findById(data.user);
        if(user) {
            const Newseller = new Seller({
                shopName: data.shopName,
                no_of_followers: data.no_of_followers,
                category:data.category,
                no_of_posts: data.no_of_posts,
                price_range: data.price_range,
                status: data.status,
                level:data.level,
                user: data.user
                
             })
             await Newseller.save()
             return {
                 message: "seller created",
                 Newseller
             }

        }
        else {
            throw{
                status:404,
                message: "user not found"
            }
        }
}

export const getAllsellers = async (data) => {
    const sellers = await Seller.find();
    return {
        sellers
    };
}

export const updateSeller = async( data, seller_id) => {
    const user = await User.findById(data.user);
    
    if (user) {
        const seller = await Seller.findOne({_id: seller_id})
        if (seller) {
            Object.assign(seller, {
                status: data.status || seller.status,
                Ideal_for_roko: data.Ideal_for_roko || seller.Ideal_for_roko,
                brand_focused: data.brand_focused || seller.brand_focused
            });
            await seller.save();
            return {
                seller,
                message: "seller updated"
            };
        }
        else {
            throw {
                status: 404,
                message: "seller not found"
            }
        }
    }else{
        throw {
            status: 404,
            message: "user not found"
        }
    }
}

//fetchhes sellers created by a certain user
export const getSpecificSeller = async(userId) => {
    const sellers = await Seller.find({user : userId})  
    if (sellers === 0) {
        return "no sellers"
    }
    else {
        return sellers
    }
    
}


export const removeSeller = async(seller_id) => {
    const user = await User.findById(data.user);
    console.log(user);
    if (user) {
        const seller = await Seller.findOne({_id: seller_id})
        console.log(seller);
        if (seller) {
            // Object.assign(seller, {
            //     status: data.status || seller.status,
            //     Ideal_for_roko: data.Ideal_for_roko || seller.Ideal_for_roko,
            //     brand_focused: data.brand_focused || seller.brand_focused
            // });
            await seller.remove();
            return {
                message: "seller deleted"
            };
        }
        else {
            throw {
                status: 404,
                message: "seller not found"
            }
        }
    }else{
        throw {
            status: 404,
            message: "user not found"
        }
    }
}

//fetching a specific seller by id
export const getsingleSeller = async (seller_id) => {
    const user = await User.findById(data.user);
    console.log(user);
    if (user) {
        const seller = await Seller.findById({seller_id})

        return seller
    }
    else{
        throw {
            status: 404,
            message:"issue"
        }
    }
}