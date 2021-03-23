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
                level:data.level
                
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

export const getAllseller = async (data) => {
    const sellers = await Seller.find();
    return {
        sellers
    };
}

export const updateSeller = async( data, seller_id) => {
    const user = await User.findById(data.user);

    if (user) {
        const seller = await Seller.findOne({_id: user._id})

        if (seller) {
            Object.assign(seller, {
                status: data.status || seller.status
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
                message: "user not found"
            }
        }
    }
}

export const getSpecificSeller = async(userId) => {
    const seller = await Seller.find({user : userId})

    return {
        seller
    }
}