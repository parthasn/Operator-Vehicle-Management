const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
	{
		vehicleRegistrationNumber: {
			type: String,
			required: true,
		},
		from: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: true,
        },
        filledCapacity: {
            type: Number,
            required: true
        }
    },
	{ versionKey: false }
);

module.exports = mongoose.model("Trip", tripSchema);
