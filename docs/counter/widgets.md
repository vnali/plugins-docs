
# Widgets
Some useful widgets are available in the control panel to users with the `Access plugin widgets` permission.

![widget1](https://github.com/user-attachments/assets/3fcaa805-ea4f-4213-be3f-c0c0db77c58a)

## Visits
  - It shows the number of visits in a given date range.
  - You can enable `show visitors` to display visitors' data on the chart; this data will only appear if the chart interval is set to daily or less.
  - There is an option called Ignore visits interval. By selecting this option, the total number of visits will include those that are ignored by the visit interval setting.

## Visitors
  - It shows the number of unique visitors in a given date range.
  - This plugin calculates visitors on a daily basis, so the number of visitors is limited to the previous hour, the current hour, today, yesterday, or a specific day.
  - The anonymized value of the visitor's IP is kept in the database by default. You can disable this option by setting the `anonymizeIp` option to false in the plugin config file.

## Average Daily Visitors
  - It shows the average number of unique visitors in a given date range.

## Online Visitors
  - It shows the number of online visitors based on the time you consider a visitor online after a visit.
  - You can specify the time you consider a visitor online via `Online threshold in seconds` in the widget setting.
    - This number can not be higher than the `Online threshold in seconds` set in the plugin settings.
  - When you specify the site as `all` in the widget setting, it counts a user who is online in site A and site B once.
 ![widget2](https://github.com/user-attachments/assets/caae18a4-a348-4a35-8f96-0e802719c302)

## Max Online
   - It shows the maximum number of online site visitors and when it happened in a given date range on a chart.

## Top Pages
  - It shows a list of top visited pages in a given date range for a site.

## Trending Pages
  - It shows a list of trending pages in a given date range and site.
  - When the growth of the pages is displayed as a percentage, pages that did not receive any visits in the previous date ranges—such as yesterday, the past week, and the past month—are not shown.

## Declining Pages
  - It displays a list of declining pages in terms of visits within a specified date range and site.
  - If a page does not have a visit in the current date range -today, this week, this month, this year- it does not show up in the result.
  - Obviously, this widget data can be more helpful when the current date range getting closer to the end -end of the day, end of the week, ....-

## Not Visited Pages
  - You can see a list of pages that are not visited in a specified date range but visited earlier.

## Pages Visits Statistics
  - By using this widget, you can view the latest statistics for every desired page of your site.

## Next Visited Pages
  - This widget allows you to analyze which pages users visit after a specific page within a defined number of seconds.
    - This widget requires a considerable amount of time to load, so it's best to apply it to shorter date ranges only on small to medium-sized websites.

##
::: tip
- The user preference for the `Week Start Day` only affects the `visits`, `visitors`, `average daily visitors`, `online visitors`, and `max online` widgets for the `thisWeek` date range.  
It does not impact page-related widgets such as `Top Pages`, `Trending Pages`, `Declining Pages`, `Not Visited Pages`, `Pages Visits Statistics`, and `Next Visited Pages`.  
The calculations for this week and the previous week for page-related widgets are always based on the selected `start of the week` specified in the plugin settings.
:::
