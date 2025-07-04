# Site Visits

## Twig
```twig
 {% set visits = craft.counter.siteVisits(dateRange, startDate, endDate, siteId, ignoreVisitsInterval) %} 
 ```
- The supported date ranges are: `custom`, `thisHour`, `previousHour`, `today`, `yesterday`, `thisWeek`, `thisMonth`, `thisYear`, `past7Days`, `past30Days`, `past90Days`, `pastYear`.
- The `startDate` and `endDate` only should be set when the date range is set as `custom`.
- By passing `Ignore visits interval` as true, the output includes also visits that are ignored by the visit interval setting. The Default is `false`.
  - You can use this option to see how many visits happen in the `ignoreVisitsInterval` threshold.

### Examples
<i><b>Today site's visits for primary site</b></i>
```twig 
{% set visits = craft.counter.siteVisits('today') %} 
```
<i><b>Today site's visits for all sites</b></i>
```twig
{% set visits = craft.counter.siteVisits('today', null, null, '*') %} 
```
<i><b>Yesterday site's visits for site id 2</b></i>
```twig
{% set visits = craft.counter.siteVisits('yesterday', null, null, '2') %} 
```  
<i><b>This hour site visit for primary site</b></i>
```twig 
{% set visits = craft.counter.siteVisits('thisHour') %} 
```
<i><b>Past 90 days site's visits for site id of 5 without ignoring visits interval</b></i>
```twig
{% set visits = craft.counter.siteVisits('past90Days', null, null, '5', true) %} 
```
<i><b>This week site visits for primary site</b></i>
```twig
{% set visits = craft.counter.siteVisits('thisWeek') %} 
```
<i><b>2024-01-10 to 2024-09-01 site's visits for all sites</b></i>
```twig
{% set visits = craft.counter.siteVisits('cutsom', '2024-01-10', '2024-09-01', '*') %} 
```

## GraphQL
### Examples

<i><b>Visits for today for all sites</b></i>  
We pass a `t` argument with a unique value to prevent caching results.
```graphql
{
  counter(dateRange:"today", siteId: "*", ignoreVisitsInterval: true, t:timestamp) {
	visits
	debugMessage
  }
}
```

<i><b>Visits for a custom range for the site with an ID of 2</b></i> 
```graphql
{
  counter(dateRange:"custom", startDate:"2024-01-10", endDate:"2024-09-01", siteId: "2", t: timestamp) {
	visits
	debugMessage
  }
}
```