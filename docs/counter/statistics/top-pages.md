# Top Pages

To fetch top pages, the following parameters are available:

  - The dataRange can be `all`, `allIgnoreInterval`, `today`, `thisWeek`, `thisMonth`, `thisYear`, `yesterday`.
  - If `siteId` is not passed, the primary site is used. If `*` is passed, the top pages for all sites will be returned.
  - `showElementTitle` is set to false by default. When this is set to true, if the top page is related to an element, the `page` in the returned result will be the element title instead of the element URL.
  - By passing `filters`, you can filter the types of pages that you want to see in the top pages result. Currently, the filter provides two options:
    - `items`: Pages related to which items appear in the top pages. Supported values are `page`, `entry`, `category`, `tag`, and other element types' full class names, such as `craft\commerce\elements\Product`.
    - `sectionHandles`: If the page is related to an entry, only show entries that are in this section.

The result is an array, and each item contains:
``` php
    url // Always returns the page URL
    page // Returns the page URL. If the page is related to the element and showElementTitle is set to true, returns the element’s title instead
    visits // Visits within the date range
    elementId // Returns the element ID if the page is related to an element
    elementType // Returns the element type if the page is related to an element
    siteId // Returns the site ID of the page
```

## Twig
```twig
{% set topPages = craft.counter.topPages(dataRange, siteId, limit, showElementTitle, filters) %} 
```

### Twig examples
<i><b>Top 5 pages for all sites and all types of pages without using element titles.</b></i>
```twig
craft.counter.topPages('today', '*', 5, false)
```

<i><b> Top 5 pages for all sites and all types of pages, using element titles instead of page URLs if the page refers to an element.</b></i>
```twig
craft.counter.topPages('today', '*', 5, true)
```

<i><b>Only show pages referring to the custom pages, entries, tags, categories, and commerce products.</b></i>
```twig
craft.counter.topPages('today', '*', 5, true, filters: {items: ["page", "entry", "tag", "category","craft\\commerce\\elements\\Product"]})
```

<i><b>Show all pages but filter entries to sections with the handle equal to "section1".</b></i>
```twig
craft.counter.topPages('today', '*', 5, false, filters: {sectionHandles: ["section1"]})
```

<i><b>Show only entry pages and only entries inside sections with handles equal to "section1" and "section2".</b></i>
```twig
craft.counter.topPages('today', '*', 5, true, filters: {items: ["entry"], sectionHandles: ["section1", "section2"]})
```

## GraphQL
```graphql
{
  topPages(dateRange: "all", siteId: "*", limit: 10, showElementTitle: true, filters: {items: ["entry", "page"], sectionHandles: ["section1", "section2"]}, t: timestamp) {
    url
    page
    visits
    elementId
    elementType
    siteId
  }
}
```
