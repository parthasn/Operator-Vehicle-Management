const trips = [
    {
        vehicleRegistrationNumber: "JH-01-1234",
        from: "Ranchi",
        to: "Jamshedpur",
        filledCapacity: 38
    },
    {
        vehicleRegistrationNumber: "JH-01-1234",
        from: "Ranchi",
        to: "Bokaro",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "JH-01-1234",
        from: "Ranchi",
        to: "Chaibasa",
        filledCapacity: 32
    },
    {
        vehicleRegistrationNumber: "JH-01-1234",
        from: "Ranchi",
        to: "Purulia",
        filledCapacity: 37
    },
    {
        vehicleRegistrationNumber: "JH-01-1234",
        from: "Ranchi",
        to: "Kolkata",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "JH-01-1234",
        from: "Ranchi",
        to: "Jamshedpur",
        filledCapacity: 28
    },
    {
        vehicleRegistrationNumber: "JH-01-1234",
        from: "Ranchi",
        to: "Dhanbad",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "JH-01-4321",
        from: "Jamshedpur",
        to: "Ranchi",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "JH-01-4321",
        from: "Jamshedpur",
        to: "Chaibasa",
        filledCapacity: 8
    },
    {
        vehicleRegistrationNumber: "JH-01-4321",
        from: "Jamshedpur",
        to: "Kolkata",
        filledCapacity: 9
    },
    {
        vehicleRegistrationNumber: "JH-01-4321",
        from: "Jamshedpur",
        to: "Durgapur",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "JH-01-4321",
        from: "Jamshedpur",
        to: "Kharagpur",
        filledCapacity: 8
    },
    {
        vehicleRegistrationNumber: "JH-01-4321",
        from: "Jamshedpur",
        to: "Bokaro",
        filledCapacity: 9
    },
    {
        vehicleRegistrationNumber: "JH-01-4321",
        from: "Jamshedpur",
        to: "Purulia",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "JH-01-4321",
        from: "Jamshedpur",
        to: "Dhanbad",
        filledCapacity: 6
    },
    {
        vehicleRegistrationNumber: "JH-01-4321",
        from: "Ranchi",
        to: "Jamshedpur",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "KA-02-2345",
        from: "Bangalore",
        to: "Mysore",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "KA-02-2345",
        from: "Bangalore",
        to: "Goa",
        filledCapacity: 2
    },
    {
        vehicleRegistrationNumber: "KA-02-2345",
        from: "Bangalore",
        to: "Pune",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "KA-02-2345",
        from: "Bangalore",
        to: "Mumbai",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "KA-02-2345",
        from: "Bangalore",
        to: "Mangalore",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "KA-02-2345",
        from: "Bangalore",
        to: "Kerala",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "KA-02-2345",
        from: "Bangalore",
        to: "Coimbatore",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "KA-02-2345",
        from: "Bangalore",
        to: "Ooty",
        filledCapacity: 3
    },
    {
        vehicleRegistrationNumber: "KA-02-2345",
        from: "Bangalore",
        to: "Kodaikanal",
        filledCapacity: 2
    },
    {
        vehicleRegistrationNumber: "ND-05-3645",
        from: "Jalandhar",
        to: "New Delhi",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "ND-05-3645",
        from: "New Delhi",
        to: "Amritsar",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "ND-05-3645",
        from: "New Delhi",
        to: "Dharamshala",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "ND-05-3645",
        from: "New Delhi",
        to: "Pathankot",
        filledCapacity: 7
    },
    {
        vehicleRegistrationNumber: "ND-05-3645",
        from: "New Delhi",
        to: "Manali",
        filledCapacity: 8
    },
    {
        vehicleRegistrationNumber: "ND-05-3645",
        from: "New Delhi",
        to: "Srinagar",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "ND-05-3645",
        from: "New Delhi",
        to: "Ambala",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "ND-05-3645",
        from: "New Delhi",
        to: "Chandigarh",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "ND-05-3645",
        from: "New Delhi",
        to: "Dalhousie",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "ND-05-3645",
        from: "New Delhi",
        to: "Kasol",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "KA-11-3345",
        from: "Bangalore",
        to: "Pune",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "KA-11-3345",
        from: "Bangalore",
        to: "Mahabaleshwar",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "KA-11-3345",
        from: "Bangalore",
        to: "Mumbai",
        filledCapacity: 36
    },
    {
        vehicleRegistrationNumber: "KA-11-3345",
        from: "Bangalore",
        to: "Chennai",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "KA-11-3345",
        from: "Bangalore",
        to: "Hyderabad",
        filledCapacity: 37
    },
    {
        vehicleRegistrationNumber: "KA-11-3345",
        from: "Bangalore",
        to: "Mangalore",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "KA-11-3345",
        from: "Bangalore",
        to: "Kerala",
        filledCapacity: 38
    },
    {
        vehicleRegistrationNumber: "AP-10-4646",
        from: "Hyderabad",
        to: "Vishakapatnam",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "AP-10-4646",
        from: "Hyderabad",
        to: "Tirupati",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "AP-10-4646",
        from: "Hyderabad",
        to: "Bhubaneshwar",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "AP-10-4646",
        from: "Hyderabad",
        to: "Vijayanagaram",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "AP-10-4646",
        from: "Hyderabad",
        to: "Vijayavada",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "AP-10-4646",
        from: "Hyderabad",
        to: "Raipur",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "AP-10-4646",
        from: "Hyderabad",
        to: "Bangalore",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "AP-10-4646",
        from: "Hyderabad",
        to: "Pune",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "AP-10-4646",
        from: "Hyderabad",
        to: "Ooty",
        filledCapacity: 4
    },
    {
        vehicleRegistrationNumber: "WB-14-6576",
        from: "Kolkata",
        to: "Darjeeling",
        filledCapacity: 9
    },
    {
        vehicleRegistrationNumber: "WB-14-6576",
        from: "Kolkata",
        to: "Durgapur",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "WB-14-6576",
        from: "Kolkata",
        to: "Kharagpur",
        filledCapacity: 8
    },
    {
        vehicleRegistrationNumber: "WB-14-6576",
        from: "Kolkata",
        to: "Digha",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "WB-14-6576",
        from: "Kolkata",
        to: "Mandarmoni",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "WB-14-6576",
        from: "Kolkata",
        to: "Jamshedpur",
        filledCapacity: 9
    },
    {
        vehicleRegistrationNumber: "WB-14-6576",
        from: "Kolkata",
        to: "Chandipur",
        filledCapacity: 8
    },
    {
        vehicleRegistrationNumber: "WB-14-6576",
        from: "Kolkata",
        to: "New Jalpai Guri",
        filledCapacity: 9
    },
    {
        vehicleRegistrationNumber: "WB-14-6576",
        from: "Kolkata",
        to: "Haldia",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "KA-12-4361",
        from: "Bangalore",
        to: "Pune",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "KA-12-4361",
        from: "Bangalore",
        to: "Mahabaleshwar",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "KA-12-4361",
        from: "Bangalore",
        to: "Mumbai",
        filledCapacity: 6
    },
    {
        vehicleRegistrationNumber: "KA-12-4361",
        from: "Bangalore",
        to: "Chennai",
        filledCapacity: 9
    },
    {
        vehicleRegistrationNumber: "KA-12-4361",
        from: "Bangalore",
        to: "Hyderabad",
        filledCapacity: 7
    },
    {
        vehicleRegistrationNumber: "KA-12-4361",
        from: "Bangalore",
        to: "Mangalore",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "KA-12-4361",
        from: "Bangalore",
        to: "Kerala",
        filledCapacity: 8
    },
    {
        vehicleRegistrationNumber: "AP-11-6913",
        from: "Hyderabad",
        to: "Vishakapatnam",
        filledCapacity: 38
    },
    {
        vehicleRegistrationNumber: "AP-11-6913",
        from: "Hyderabad",
        to: "Tirupati",
        filledCapacity: 36
    },
    {
        vehicleRegistrationNumber: "AP-11-6913",
        from: "Hyderabad",
        to: "Bhubaneshwar",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "AP-11-6913",
        from: "Hyderabad",
        to: "Vijayanagaram",
        filledCapacity: 39
    },
    {
        vehicleRegistrationNumber: "AP-11-6913",
        from: "Hyderabad",
        to: "Vijayavada",
        filledCapacity: 33
    },
    {
        vehicleRegistrationNumber: "AP-11-6913",
        from: "Hyderabad",
        to: "Raipur",
        filledCapacity: 29
    },
    {
        vehicleRegistrationNumber: "AP-11-6913",
        from: "Hyderabad",
        to: "Bangalore",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "AP-11-6913",
        from: "Hyderabad",
        to: "Pune",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "AP-11-6913",
        from: "Hyderabad",
        to: "Ooty",
        filledCapacity: 40
    },
    {
        vehicleRegistrationNumber: "BR-10-3578",
        from: "Patna",
        to: "Kolkata",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "BR-10-3578",
        from: "Patna",
        to: "Bihar-Sharif",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "BR-10-3578",
        from: "Patna",
        to: "Gaya",
        filledCapacity: 9
    },
    {
        vehicleRegistrationNumber: "BR-10-3578",
        from: "Patna",
        to: "Lucknow",
        filledCapacity: 7
    },
    {
        vehicleRegistrationNumber: "BR-10-3578",
        from: "Patna",
        to: "Kanpur",
        filledCapacity: 9
    },
    {
        vehicleRegistrationNumber: "BR-10-3578",
        from: "Patna",
        to: "Jamshedpur",
        filledCapacity: 10
    },
    {
        vehicleRegistrationNumber: "BR-10-3578",
        from: "Patna",
        to: "Kolkata",
        filledCapacity: 8
    },
    {
        vehicleRegistrationNumber: "BR-10-3578",
        from: "Patna",
        to: "New Delhi",
        filledCapacity: 7
    },
    {
        vehicleRegistrationNumber: "BR-10-3578",
        from: "Patna",
        to: "Durgapur",
        filledCapacity: 9
    },

]

module.exports = trips