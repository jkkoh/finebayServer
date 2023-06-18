const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = Schema(
  {
    name:{
      type: String,
      required: false
    },

    email:{
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: false,
      validate: [
        (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
      ]
    },
    emailUnique:{
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true
    },

    password: {
      type: String,
      required: false,
      min: 6
    },
    postCode: {
      type: String,
      required: false
    },

    address: {
      type: String,
      required: false
    },

    address1: {
      type: String,
      required: false
    },
    
    address2: {
      type: String,
      required: false
    },

    address3: {
      type: String,
      required: false
    },

    nickname: {
      type: String,
      required: false
    },

    gender: {
      type: String,
      required: false
    },
    birthday: {
      type: String,
      required: false
    },

    profileImage: {
      type: String,
      required: false
    },
    account_type: {
      type: Number,
      required: true
    },
    accountPoint: {
      type: Number,
      required: true
    },
    refresh_token: String
  },
  {
    virtuals: {
      id: {
        get(){
          return this._id
        }
      }
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  },
  
)

module.exports = mongoose.model('User', UserSchema)


