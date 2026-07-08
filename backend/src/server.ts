import app from "./app";
import { ENV } from "./config/env";


const server = app.listen(ENV.PORT, () => {
    console.log(
        `DevPlus backend running on port ${ENV.PORT}`
    );
});


server.on("error", (error) => {
    console.log("SERVER ERROR:", error);
});