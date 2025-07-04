# Top Pages

## Twig
```twig
{% set topPages = craft.counter.topPages(dataRange, siteId, limit) %} 
```

  - The dataRange can be `all`, `allIgnoreInterval`, `today`, `thisWeek`, `thisMonth`, `thisYear`, `yesterday`.
  - If `siteId` is not passed, the primary site is used. If `*` is passed, the top pages for all sites will be returned.

## GraphQL
```graphql
{
  topPages(dateRange: "all", siteId: "*", limit: 10, t: timestamp) {
    page
    visits
  }
}
```
