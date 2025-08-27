// This script is injected into the product page to scrape data.

function scrapeProductDetails() {
    const titleSelectors = [
        '#productTitle',
        '.product-title',
        'h1[itemprop="name"]',
        'h1', // Generic fallback
    ];


    const findElementText = (selectors) => {
        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element) return element.innerText.trim();
        }
        return 'N/A';
    };


    const title = findElementText(titleSelectors);
    const url = window.location.href;

    return { title, url };
}

// Send the scraped data back to the extension
scrapeProductDetails();