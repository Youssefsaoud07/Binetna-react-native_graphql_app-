const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User =require('../../models/user')
const {UserInputError} = require ('apollo-server')
const {validateRegistredInput,validateLoginInput}=require('../../uservalidator/validators')
require("dotenv").config({ path: "./config/.env" });
const secret_key = process.env.SECRET_KEY
function generateToken (user){
   return jwt.sign({
        id:user.id,
        email:user.email,
        username:user.username,
    },
    secret_key,{expiresIn : '1h'})

}
module.exports ={
    Mutation:{
        async login (_,{username,password})
        {
            const {errors,valid}=validateLoginInput(username, password)
            if (!valid){
                throw new UserInputError('Error',{errors})
            }
            const user = await User.findOne({username})
            if(!user){
                error.general ='user not found'
                throw new UserInputError ('user not found',{errors})
            }
            const match = await bcrypt.compare (password,user.password)
            if(!match){
                throw new UserInputError ('wrong password',{errors})
            }
           const token = generateToken (user)
            return {
                ...user._doc,
                id:user.id,
                token}

            },
        
        async register(parent,{registerInput:{username,email,password,confirmPassword}}
            ){
            //form validation
            const {valid,errors}=validateRegistredInput(username,email,password,confirmPassword)
            if (!valid){
                throw new UserInputError('Error',{errors})
            }
            // const {validate,errors}=validateLoginInput(username,password)
            // if (!validate){
            //     throw new UserInputError('Error',{errors})
            // }
            //user already exist check
            const user =await User.findOne({username})
            if (user){
                throw new UserInputError ('username arledy taken' ,{
                error: {
                    username : 'this name is already taken',
                
                }}
            )
            }
        
            //hash password and auth token
            password = await bcrypt.hash(password,12)
            const newUser = new User ({
                email,
                password,
                username,
                createdAt : new Date().toISOString()
            })
            const res = await newUser.save()
           const token = generateToken (res)
            
            return {
                ...res._doc,
                id:res.id,
                token
            }

        }

    }
}