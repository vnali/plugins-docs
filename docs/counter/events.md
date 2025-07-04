# Events

## EVENT_BEFORE_COUNT
   
```php
use vnali\counter\services\counterService;
use vnali\counter\events\CountEvent;
use yii\base\Event;

Event::on(
    CounterService::class,
    CounterService::EVENT_BEFORE_COUNT,
    function(CountEvent $event) {
        // to prevent counting
        // $event->isValid = false;
    }
);
```

 ## EVENT_AFTER_COUNT
   
```php
use vnali\counter\services\counterService;
use vnali\counter\events\CountEvent;
use yii\base\Event;

Event::on(
    CounterService::class,
    CounterService::EVENT_AFTER_COUNT,
    function(CountEvent $event) {
    //	
    }
);
```
   
## Passed Event Items

```php
public string $page; // The requested page, trimmed to 2048 characters or 3072 bytes
public string $untrimmedPage; // The untrimmed requested page
public int $siteId; // The siteId that page belong to
public ?int $userId;  // The user who requested the page
public ?string $ip;  // IP of the user. It is passed only if `ipInEvent` config is set to true.
public ?string $anonymizedIp;  // The anonymized version of IP. It is passed only if `anonymizedIpInEvent` config is set to true.
public string $hashedIp; // The hashed version of IP
public ?string $userAgent; // The user agent who requested the page
public DateTime $time; // The time when page is requested in UTC
```
