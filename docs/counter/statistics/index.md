# Fetch Site and Page Statistics

You can fetch site and page statistics on your site via Twig or GraphQL.
  
## How to Use GraphQL
- To be able to run GraphQL queries, your token needs to have the appropriate permission for the queried item, site, and timeframe.
- Make sure that you only enable needed items for a token.
  - For example, if you want today's site visits counter for the front page of your primary site, you should limit the schema to querying `Site Visits`, `Today` date range, and `main` site. -because the used token and schema are exposed to the end users in this case-.
- In our example we always use `t` argument with a unique value to prevent caching results.
- We can pass `debugMessage` field in test environments to obtain useful information from GraphQL results. You should allow `querying the debug message` in the schema to use this field.