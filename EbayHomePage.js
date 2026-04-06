const {expect} = require('@playwright/test');
import data from '../TestData/testdata1.json' ;
export class EbayPage {

////******* Adding all needed locators *******//////
    constructor(page) {
        this.page = page;
        this.searchBox_ID = "#gh-ac";
        this.EbayLogo_ID = "#gh-logo";
        this.resultCount_CSS = 'h1.srp-controls__count-heading span.BOLD';
    }

    async navigate() {
        await this.page.goto(data.homepageUrl);
        await expect(thispage.locator(this.EbayLogo_ID)).toBeVisible();
    }

    async search(searchitem) {
        await this.page.fill(this.searchBox_ID, searchitem);
        await this.page.press(this.searchBox_ID, 'Enter');
    }

    async getResultsCount() {
        return await this.page.textContent(this.resultCount_CSS);
    }

    async filter(filterentry) {
        await this.page.locator(`input.checkbox__control[aria-label="${filterentry}"]`).click();
    }
}