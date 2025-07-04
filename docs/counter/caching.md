# Caching
Counter widgets utilize caching to improve performance.

## Default Caching
- Default caching is enabled automatically, requiring no additional setup.
- Users will still see the latest data when default caching is in effect. Cached data is used only if there are no new visits for the site/page within the widget's date range.

## Custom Caching
Custom Caching use `cacheWidgetsSeconds` setting.

- For high-traffic sites where visits occur frequently, a new configuration option called `cacheWidgetsSeconds` has been introduced. This allows for caching widget data for a specified number of seconds, provided that cacheWidgetsSeconds is set to a value greater than 0.
- When this method is enabled, the default caching system is bypassed.
- Note this methoD does not apply to widgets with date ranges set to `Previous Hour`, `Yesterday`, or `Today (prior to this hour)` where the default caching system will still be used.

## More About caching
- Users can manually invalidate data caches for the counter plugin via the cache utility page.  
- The plugin will automatically expire (invalidate) the cached data for a widget whenever the widget is resaved. This ensures that any updates made to the widget are reflected immediately.  
- The plugin will also automatically expire cached data for a widget if the server's current day or hour differs from the day or hour when the widget was cached. For example:  
  - If a widget is set to display data for "today" or "yesterday" the cache will be invalidated when the server's day changes.  
  - If a widget is set to display data for "this hour" or "previous hour" the cache will be invalidated when the server's hour changes.  