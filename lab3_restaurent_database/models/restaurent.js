const mongoose = require('mongoose');

const RestaurentSchema = new mongoose.Schema({
    address: {
        building: {
            type: String
            
        },
        street: {
            type: String
            
        },
        zipcode: {
            type: String
            
        }
    },

    restaurant_id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});
const Restaurent = mongoose.model("Restaurent", RestaurentSchema);
module.exports = Restaurent;