#!/usr/bin/env bash
# Run google-news-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~google-news-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"queries": ["electric vehicles"], "countryCode": "us", "timeRange": "day", "sortByDate": true, "maxResultsPerQuery": 10}'
