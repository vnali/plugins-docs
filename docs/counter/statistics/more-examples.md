# More GraphQL Examples

#### Get today's site visits and visitors for the primary site

- You should pass a new random value for the `t` argument like the current timestamp to prevent cache.
- You can skip passing siteId, by default primary siteId is used.
```graphql
{
	counter(dateRange: "today", t: timestamp) {
		visits
		visitors
	}
}
```

#### Get site statistics in 2024-08-26 for site id 2

- By passing custom as dateRange, you can pass "2024-08-26" as the start date and end date.
- You can get current online visitors by passing `onlineVisitors` too.
- By passing the `debugMessage`, you can view a debug message if the result is ok or not.
- You can't pass visitors in this query because the selected `dateRange` is more than one day.
```graphql
{
	counter(dateRange: "custom", startDate: "2024-08-26", endDate: "2024-08-26", siteId: "2", t: timestamp) {
		visits
		averageVisitors,
		onlineVisitors
		maxOnline
		maxOnlineDate
		debugMessage
	}
}
```

#### Get site statistics for yesterday for all sites and current online users in 30 seconds

- By passing `onlineVisitors` as a field, we get current online visitors with this query
- You can pass the `onlineThreshold` argument in seconds, the default value is the value set in plugin settings
```graphql
{
	counter(dateRange: "yesterday", siteId: "*", onlineThreshold: 30, t: randomString) {
		visits
		visitors
		onlineVisitors
	}
}
```
