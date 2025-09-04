# Trending Pages

## Twig  
```twig
{% set trendingPages = craft.counter.trendingPages(dataRange, siteId, growthType, ignoreNewPages, limit, showElementTitle, filters) %}
```

  - The `dataRange` can be `today`, `thisWeek`, `thisMonth`, or `thisYear`.
  - If `siteId` is not passed, the primary site is used. If `*` is passed, the top pages for all sites are passed.
  - The `growthType` can be passed as `count` or `percentage`. If `percentage` is selected the new pages are ignored. If `count` is selected, you can filter new pages via the `ignoreNewPages` argument.
  - If `ignoreNewPages` is set to true, pages without visits in the previous date range are not shown. The default value is false.
  - `showElementTitle` is set to false by default. When this is set to true, if the top page is related to an element, the `page` in the returned result will be the element title instead of the element URL.
  - By passing `filters`, you can filter the types of pages that you want to see in the results. Currently, the filter provides two options:
    - `items`: Pages related to which items appear in the results. Supported values are `page`, `entry`, `category`, `tag`, and other element types' full class names, such as `craft\commerce\elements\Product`.
    - `sectionHandles`: If the page is related to an entry, only show entries that are in this section.

The result is an array, and each item contains:
``` php
    url // Always returns the page URL
    page // Returns the page URL. If the page is related to the element and showElementTitle is set to true, it returns the element’s title instead. If removeDomainFromResult is enabled, the domain part of the URL is removed.
    current // Visits within the date range.
    previous //Visits within the previous date range.
    growth // Growth of visits
    elementId // Returns the element ID if the page is related to an element.
    elementType // Returns the element type if the page is related to an element.
    siteId // Returns the site ID of the page.
```

### Twig example
<i><b>Show only trending entry pages and only entries inside sections with handles equal to "section1" and "section2".</b></i>
```twig
craft.counter.trendingPages('today', '*', 'count', true, 5, filters: {items: ["entry"], sectionHandles: ["section1", "section2"]})
```

## GraphQL
```graphql
{
  trendingPages(dateRange: "thisMonth", growthType: "count", ignoreNewPages: true, limit: 1, showElementTitle: true, filters: {items: ["entry", "page"], sectionHandles: ["section1", "section2"]}) {
	page
	current
	previous
	growth
	debugMessage
  }
}
```