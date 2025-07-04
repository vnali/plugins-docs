# Page Visits

## Twig
```twig
{% set pageVisits = craft.counter.pageVisits($pageUrl, $siteId, $attributes) %}
```     
- `$pageUrl`: the page URL is required.  
- `$siteId`: if it is not passed, the primary siteId is used. If the site of the page is not important, pass `*`.  
- `$attributes`: an array of attributes which you want in return. The default is `['all', 'allIgnoreInterval', 'today', 'yesterday', 'thisWeek', 'previousWeek', 'thisMonth', 'previousMonth', 'thisYear', 'previousYear', 'lastVisit']`.  

## GraphQL
- If the `siteId` of the requested page is not passed, the primary site is sent.
  - You can pass `*` to get the first matched page without filtering the site.
- You can use `@dateConvert` directive with calendar, format, locale and timezone parameters to return the last visit in the intended format
```graphql
{
	pageVisits(page: "https://xyz.test/page1", siteId: "*", t: uniqueParam) {
		all
		allIgnoreInterval
		thisYear
		thisMonth
		thisWeek
		today
		previousYear
		previousMonth
		previousWeek
		yesterday
		lastVisit@dateConvert(calendar: "gregorian", format: "yyyy-MM-dd HH:mm:ss EEEE", locale: "en_US", timezone: "UTC")
		debugMessage
	}
}
```