import { test as base } from "@playwright/test";

export type EnvConfig = {
    nameEnv: string;
    appUrl: string;
    apiUrl: string;
    practiceUrl: string;
};

export const test = base.extend<EnvConfig>({
    nameEnv: ["", { option: true }],

    appUrl: ["", { option: true }],
    apiUrl: ["", { option: true }],
    practiceUrl: ["", { option: true }],
});
