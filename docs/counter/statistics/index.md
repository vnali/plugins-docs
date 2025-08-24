# Fetch Site and Page Statistics

- You can fetch site and page statistics on your site via Twig or GraphQL.
- On the control panel and entry and category index pages, users can select table columns provided by the counter plugin to view page statistics for an element page.
::: tip
- If there is no page for an entry/category, these columns will show empty.
- If there is a page for an entry/category but no statistics are available yet, those columns will show 0.
:::

::: warning
- If the URL of an element changes, you will miss the current statistics for that element. The page views for the old URL are still available for fetching via Twig/GQL.
:::
  
## How to Use GraphQL
- To be able to run GraphQL queries, your token needs to have the appropriate permission for the queried item, site, and timeframe.
- Make sure that you only enable needed items for a token.
  - For example, if you want today's site visits counter for the front page of your primary site, you should limit the schema to querying `Site Visits`, `Today` date range, and `main` site. -because the used token and schema are exposed to the end users in this case-.
- You can pass an `x-craft-gql-cache: no-cache` header with GraphQL requests to bypass Craft’s cache. 
- The Counter plugin also provides a special `t` argument, which we sometimes send with a unique value to prevent cached results.
- We can pass `debugMessage` field in test environments to obtain useful information from GraphQL results. You should allow `querying the debug message` in the schema to use this field.