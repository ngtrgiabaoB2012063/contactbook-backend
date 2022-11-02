const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

const startServer = async () => {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the db");

        const PORT = config.app.port;

        app.listen(PORT, () => {
            console.log(`server is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Cannot connect to the db", error);
        process.exit();
    }
};

startServer();
