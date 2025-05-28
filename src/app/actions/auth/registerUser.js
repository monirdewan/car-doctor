'use server'

import dbConnect, { collectionNameObj } from "@/lib/DBConnect"

export  const registerUser = async(Paylods) =>{
  const userCollection = dbConnect(collectionNameObj.userCollection)
  const {email, password} = Paylods;
  if(!email || !password) return {success:false};
  const user = await userCollection.findOne({email:Paylods.email})
  if(!user){
   const result = await userCollection.insertOne(Paylods)
   const {_id} = result;
   return {_id};
  }
  return {success:false};
}