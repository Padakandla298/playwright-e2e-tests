import { baseConfig } from "../playwright.config";
import { defineConfig } from "@playwright/test";
import {EnvConfig} from "../tests/helpers/config.fixture";
import path from "path";
import { cwd } from "process";


export default defineConfig<EnvConfig>({
    ...baseConfig,
   testDir: path.resolve(__dirname, "../tests"),
    use: {
        ...baseConfig.use,
        nameEnv: "test",
        appUrl: "https://katalon-demo-cura.herokuapp.com/",
    },
});
