import Feedback from "../models/feeback";
import User from "../models/user";


export const NewFeedback = async (data) => {
    const user = await User.findById(data.user);
    console.log(user)
        if(user) {
            const Newfeed = new Feedback ({
                feedback: data.feedback,
                upvotes: data.upvotes,
                user: data.user
            })
            await Newfeed.save()
            return {
                message: "Feedback gotten",
                newfeed
            }
        }
        else{
            throw{
                status: 404,
                message: "user not found"
            }
        }
}