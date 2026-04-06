const {test} = require('@playwright/test');
import { EbayPage } from '../pages/EbayHomePage';
import data from '../TestData/testdata1.json' ;

// test to navigate to home page
test('Navigate to home page', async ({ page }) => {
    const ebay = new EbayPage(page);
    await ebay.navigate();
});

// test to search for a product and print results
test('Search for a product and print number of results', async ({ page }) => {
    const ebay = new EbayPage(page);
    await ebay.navigate();
    await ebay.search(data.search);
    const ResultsBeforeFilter = await ebay.getResultsCount();
    console.log('Results before Filter', ResultsBeforeFilter);

    
});

// test to filter and print new results 
test('Filter results and print new results', async ({ page }) => {
    const ebay = new EbayPage(page);
    await ebay.navigate();
    await ebay.search(data.search);
    await ebay.filter(data.filterentry);
    const ResultsAfterFilter = await ebay.getResultsCount();
    console.log('Results after Filter', ResultsAfterFilter);

});
