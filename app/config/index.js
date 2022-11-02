require("dotenv").config();

const config = {
    app: {
        port: process.env.PORT || 5000,
    },
    db: {
        uri: process.env.MONGODB_URI,
    },
};

module.exports = config;
