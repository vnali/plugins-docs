# Site Average Daily Visitors

## GraphQL
- The supported date ranges are: `All`, `today`, `thisWeek`, `thisMonth`, `thisYear`, `past7Days`, `past30Days`, `past90Days`, `pastYear`, `custom`.

```graphql
{
	counter(dateRange: "past7Days", siteId: "*") {
		averageVisitors,
    	debugMessage
	}
}
```