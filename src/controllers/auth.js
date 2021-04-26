import bcrypt from "bcrypt";
import valid from "validator";
import {loginJwt }from "../helpers/jwt";
import User from "../models/user";

export const createUser = async userParam => {
    //check email and user in user
    if(valid.isEmpty(userParam.password)) {
        throw {
            status: 400,
            message: "provide password"
        }; 
    }
    else if(!valid.isEmail(userParam.email)) {
        throw {
            status: 400, 
            message: `email ${userParam.email} is not valid`
        };
    }
    else if (valid.isEmpty(userParam.email) && valid.isEmpty(userParam.name)) {
        throw {status: 400, message: "Email/Name should be provided" };
    } else if (!valid.isLength(userParam.password, { min:6, max: 30})) {
        throw {
            status: 400,
            message: "password six characters"
        };
    } else if (!valid.equals (userParam.password, userParam.confirm)) {
        throw { status: 400, message: "passwords do not match"};
    } else if (await User.findOne({email: userParam.email})) {
        throw {
            
            status: 400,
            message: `Email ${userParam.email} has been used already`
        };
    }else {
        const user = new User(userParam);
        if (userParam.password) {
            user.password = bcrypt.hashSync(userParam.password, 10);
        }

        await user.save();

        return user
    }
}

export const loginUser = async userParam => {

    if(!valid.isEmail(userParam.email)) {
        throw {status: 400, message: `Email ${userParam.email} is not valid`};
    } else if (!valid.isLength(userParam.password, {min: 6, max: 30})) {
        throw {
            status: 400,
            message: "password is characters"
        };
    } else {
        const user = await User.findOne({ email: userParam.email});

        if(user) {
            if (bcrypt.compareSync(userParam.password, user.password)) {
                return {
                    token: loginJwt(user.email),
                    message: "logged in succesfully",
                };
            }else {
                throw {
                    status: 400,
                    message: "invalid password"
                };
            }
        } else {
            throw {
                status: 400,
                message: "invalid email/password"
            };
        }
    }
};


