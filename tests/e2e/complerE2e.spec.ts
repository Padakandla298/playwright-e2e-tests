import { test } from "../helpers/config.fixture2";

import HomePage from "../page-objects/HomePage";

test("Verify user is able to login successfully with valid credentials",
    async ({ page }, testinfo) => {

        const envconfig = testinfo.project.use as any;
        

        const username = process.env.TEST_USER_NAME as string;
        const password = process.env.TEST_USER_PASSWORD as string;

        console.log(`URL: ${envconfig.appUrl}`);
        console.log(`Username: ${username}`);
        // Never print the password in your logs.

        const homepage = new HomePage(page);

        // IMPORTANT: Wait for the entire login method to finish.
        await homepage.loginhomepage(
            username,
            password,
            envconfig.appUrl
        );

        // Verify successful login.
        
    }
);