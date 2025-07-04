# Trending Pages

## Twig  
```twig
{% set trendingPages = craft.counter.trendingPages(dataRange, siteId, growthType, ignoreNewPages, limit) %}
```

  - The `dataRange` can be `today`, `thisWeek`, `thisMonth`, or `thisYear`.
  - If `siteId` is not passed, the primary site is used. If `*` is passed, the top pages for all sites are passed.
  - The `growthType` can be passed as `count` or `percentage`. If `percentage` is selected the new pages are ignored. If `count` is selected, you can filter new pages via the `ignoreNewPages` argument.
  - If `ignoreNewPages` is set to true, pages without visits in the previous date range are not shown. The default value is false.

## GraphQL
```graphql
{
  trendingPages(dateRange: "thisMonth", growthType: "count", ignoreNewPages: true, limit: 1) {
	page
	current
	previous
	growth
	debugMessage
  }
}
```