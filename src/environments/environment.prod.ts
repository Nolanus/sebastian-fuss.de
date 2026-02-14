import { NgxCookiebotConfig } from "@halloverden/ngx-cookiebot";

export class CookiebotConfig extends NgxCookiebotConfig {
    override blockingMode = 'manual';
    override cbId: string = '93f0fb9b-bc00-456e-9209-8f7c89c4b32f';
    override loadScript = true;
    override cdn = 'eu';
}

export const environment = {
    production: true,
    cookieBot: CookiebotConfig,
};
