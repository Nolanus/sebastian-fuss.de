import { NgxCookiebotConfig } from "@halloverden/ngx-cookiebot";

export class CookiebotConfig extends NgxCookiebotConfig {
    override blockingMode = 'manual';
    override cbId: string = 'dummy';
    override loadScript = true;
    override cdn = 'eu';
}

export const environment = {
    production: false,
    cookieBot: CookiebotConfig,
};
