const mongoose = require('mongoose');
const pageSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String,
        trim: true,
        required: true
    },
    banners: [
        {
            img: { type: String },
            navigateTo: { type: String }
        }
    ],
    products: [
        {
            img: { type: String },
            navigateTo: { type: String }
        }
    ],
    category:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        unique:true
    },
    createdBy:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('Page', pageSchema);