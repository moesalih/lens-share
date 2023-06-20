import { test as base, expect } from "@playwright/test";

import { PublicationPage } from "./PublicationPage";

export const test = base.extend<{
  anyPublication: PublicationPage;
  videoPublication: PublicationPage;
}>({
  anyPublication: async ({ page }, use) => {
    const publication = new PublicationPage(page, "0x01-0x01d2");
    await use(publication);
  },
  videoPublication: async ({ page }, use) => {
    const publication = new PublicationPage(page, "0x28a2-0x05ca");
    await use(publication);
  },
});

export { expect };
