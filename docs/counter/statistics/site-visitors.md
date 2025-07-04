# Site Visitors

## Twig
```twig 
{% set visitors = craft.counter.siteVisitors(dateRange, startDate, endDate, siteId) %} 
```
- supported date ranges are: `thisHour`, `previousHour`, `today`, `yesterday`, and `custom` (only for one day).
- startDate and endDate only should be set when the date range is set as `custom`. 

### Examples
```twig
 {% set visitors = craft.counter.siteVisitors('today') %} 
 ```  

```twig
{% set visitors = craft.counter.siteVisitors('today', null, null, '*') %} 
```

```twig
{% set visitors = craft.counter.siteVisitors('yesterday', null, null, '2') %}
```

```twig 
{% set visitors = craft.counter.siteVisitors('thisHour') %}
```

<i><b>When custom is passed, only one day can be passed</b></i>
```twig
{% set visitors = craft.counter.siteVisitors('cutsom', '2024-01-10', '2024-01-10') %} 
```

## GraphQL
```graphql
# You can pass `debugMessage` to get more information about errors.
{
  counter(dateRange:"today", siteId: "*", t: timestamp) {
	visitors
	debugMessage
  }
}
```

```graphql
{
  counter(dateRange:"custom", startDate:"2024-01-10", endDate:"2024-01-10", siteId: "2", t: timestamp) {
	visitors
	debugMessage
  }
}
```

<i><b>Combine visits and visitors query</b></i>
```graphql
{
  counter(dateRange:"today", siteId: "*", t: timestamp) {
	visits
	visitors
	debugMessage
  }
}
```

<i><b>We can also combine visitors with visits since the custom date range is limited to one day (the visitors query does not support ranges longer than one day).</b></i>
```graphql
{
  counter(dateRange:"custom", startDate:"2024-01-10", endDate:"2024-01-10", siteId: "2", t: timestamp) {
	visits
	visitors
	debugMessage
  }
}
```