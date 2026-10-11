# Google News Scraper - Articles, Publisher URLs & Dates

Scrape Google News by keyword, country and time window. Get headline, publisher, real article URL, snippet and exact publish time for media monitoring, PR, brand tracking and AI pipelines. 18 countries, newest-first sorting, pay only per article.

**[Run it on Apify Store](https://apify.com/kamerozkan/google-news-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/google-news-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/google-news-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/google-news-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "queries": [
    "electric vehicles"
  ],
  "countryCode": "us",
  "timeRange": "day",
  "sortByDate": true,
  "maxResultsPerQuery": 10
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "query": "artificial intelligence regulation",
    "country": "GB",
    "position": 1,
    "title": "‘The clock on AI regulation is ticking’, warns UN rights chief",
    "source": "UN News",
    "url": "https://news.un.org/en/story/2026/10/1168529",
    "domain": "news.un.org",
    "urlResolved": true,
    "snippet": "The world is running out of time to put guardrails on artificial intelligence, UN High Commissioner for Human Rights Volker Türk warned Monday,...",
    "publishedAt": "2026-10-05T20:11:23Z",
    "ageText": "5 days ago",
    "storyClusterId": "4866388584",
    "googleUrl": "https://www.google.co.uk/goto?url=CAESZAHrOzAVMHax3zzqCvMwddRSyjN7bikV9CIyk_RgQSzAoGv8yIeuuV3Ez0VmMf6w5SqxSxAYkkE99IrvbrSLaLsgQrOljXh02DAMNdkiVCznYW8uSGU9Gd1USxT9B1M6JdRkFWc",
    "scrapedAt": "2026-10-11T13:54:08.562792Z"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/google-news-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
