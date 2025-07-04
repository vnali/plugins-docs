# Maximum Online Visitors

## Twig
```twig
{% set maxOnline = craft.counter.maxOnline(dateRange, startDate, endDate, siteId) %}
```   
- The result is an array. The first item represents the number of maximum online users, and the second item indicates the date when the maximum number of online users occurred.
- The supported date ranges are: `custom`, `thisHour`, `previousHour`, `today`, `yesterday`, `thisWeek`, `thisMonth`, `thisYear`, `past7Days`, `past30Days`, `past90Days`, `pastYear`.

## GraphQL
```graphql
{
	counter(dateRange: "custom", startDate: "2024-08-25", endDate: "2024-08-30", siteId:"*", t: timestamp) {
		maxOnline
		maxOnlineDate
		debugMessage
	}
}
```