import { baseConfig } from "../playwright.config";
import { defineConfig } from "@playwright/test";
import {EnvConfig} from "../tests/helpers/config.fixture2";
import path from "path";
import { cwd } from "process";


export default defineConfig<EnvConfig>({
    ...baseConfig,
   testDir: path.resolve(__dirname, "../tests"),
    use: {
        ...baseConfig.use,
        nameEnv: "test",
        appUrl: "https://practice.expandtesting.com/login",
        apiUrl: "http://localhost:3000/",
        practiceUrl: "https://testautomationpractice.blogspot.com/",
    },
});
