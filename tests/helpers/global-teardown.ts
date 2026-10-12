import { exec } from "child_process";

export default async function globalTeardown() {
     exec("allure serve", (error) => {


            if (error) {
                console.error("Allure error:", error.message);
                return;
            }

            console.log("Allure report opened successfully");
        });

    /*if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
        console.log("teardown");
        exec("allure serve", (error) => {


            if (error) {
                console.error("Allure error:", error.message);
                return;
            }

            console.log("Allure report opened successfully");
        });

    }*/
}
