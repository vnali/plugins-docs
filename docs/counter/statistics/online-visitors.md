# Online Visitors

## Twig

```twig
{% set online = craft.counter.onlineVisitors($siteId, $onlineThreshold) %}
```
- `$siteId`: if siteId is not passed, primary siteId is used. If `*` is passed, unique online visitors across all sites are returned.
- `$onlineThreshold`: Specifies the duration for which a user is considered online.

## GraphQL

```graphql
{
	counter(siteId: "*", onlineThreshold: 100, t: unique) {
		onlineVisitors
		debugMessage
	}
}
```