import express from "express";
import config from "config";
import connect from "./src/utils/connect";
import logger from "./src/utils/logger";
import routes from "./src/routes"

const port = config.get<number>('port')

const app = express();

app.use(express.json());

app.listen(port, async()=> {
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    routes(app)
});