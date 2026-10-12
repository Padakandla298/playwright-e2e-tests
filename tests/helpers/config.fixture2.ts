import { test as base } from "@playwright/test";

export type EnvConfig = {
    nameEnv: string;
    appUrl: string;
};

export const test = base.extend<EnvConfig>({
    nameEnv: ["", { option: true }],

    appUrl: ["", { option: true }],
});
