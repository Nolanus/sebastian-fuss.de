// cookiebot.config.ts
import { NgxCookiebotConfig } from '@halloverden/ngx-cookiebot';

export class CookiebotConfig extends NgxCookiebotConfig {
  blockingMode = 'manual';
  cbId: string = '93f0fb9b-bc00-456e-9209-8f7c89c4b32f';
  culture?: string;
  framework?: string;
  level?: string;
  type?: string;
}
