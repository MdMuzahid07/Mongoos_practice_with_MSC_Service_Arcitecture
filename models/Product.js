const mongoose = require('mongoose');

//schema design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true, // it will remove all spaces form back and front
        unique: [true, "Name must be unique"], // to make unique name or skip same name
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"]
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"]
    },
    unit: {
        type: String,
        require: true,
        enum: {
            values: ["kg", "Litre", "pcs"],
            message: "unit value can't be {VALUE}, must be kg/litre/pcs"
        }
    },
    quantity: {
        type: Number,
        require: true,
        min: [0, "quantity can't be negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        message: "quantity must be an integer"
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "status can't be {VALUE}"
        }
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   defaultAt: Date.now
    // }

    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier"
    // },
    // categories: [{
    //   name: {
    //     type: String,
    //     required: true
    //   },
    //   _id: mongoose.Schema.Types.ObjectId
    // }]
}, {
    timestamps: true,
});


// mongoose middleware for saving data: pre / post

productSchema.pre('save', function (next) {

    // this =>
    console.log("Before saving data")
    if (this.quantity == 0) {
        this.status = "out-of-stock"
    }
    next();
});

// productSchema.post('save', function (doc, next) {
//   console.log("After saving data");

//   next();
// });


productSchema.methods.logger = function () {
    console.log(`data saved for ${this.name}`);
}




// mongoose, SCHEMA => MODEL => QUERY

// model

const Product = mongoose.model("product", productSchema);


module.exports = Product;