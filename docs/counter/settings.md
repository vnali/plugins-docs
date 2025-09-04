# Settings 
You can configure plugin settings such as the visits interval and online threshold (in seconds).  
Additional advanced settings can be set via the config file.

## Config File
By copying the [counter.php](https://github.com/vnali/craft-counter/blob/craft5/src/config/counter.php) file to the config folder of your project, you can customize some plugin configurations.  
Config items are:  

- `anonymizeIp`: The default value is true, meaning the IP address is anonymized before processing and stored in the database.
- `ipInEvent`: The default value is false, indicating that the IP address is not included in the event.
- `anonymizedIpInEvent`: The default value is false, which means that the anonymized IP address is not included in the event.
- `cacheWidgetsSeconds`: default is 0. when this is not set or is 0, widgets use default caching system so cached results are used as long as the cached data is valid
- `autoImportJquery`: default value is true. When the `Support outdated browsers` setting is enabled, the Counter plugin imports jQuery. Set this to false if your frontend already includes jQuery.
- `removeDomainFromResult`: The default value is false. When set to true, the domain part of the URL used as title is removed from the statistics results.