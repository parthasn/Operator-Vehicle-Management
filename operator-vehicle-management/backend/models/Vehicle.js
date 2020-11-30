const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		registrationNumber: {
			type: String,
			required: true,
        },
        capacity: {
            type: Number,
            required: true,
        },
        totalTrips: {
            type: Number,
            required: true,
        },
		trips: {
			type: Array,
			required: true,
		}
		
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
