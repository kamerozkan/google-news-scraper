// Run google-news-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "queries": [
    "electric vehicles"
  ],
  "countryCode": "us",
  "timeRange": "day",
  "sortByDate": true,
  "maxResultsPerQuery": 10
};
const run = await client.actor('kamerozkan/google-news-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
