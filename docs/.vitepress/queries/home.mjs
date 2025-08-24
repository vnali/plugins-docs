export const HOME_QUERY = `
  query HomeCounter($t: String) {
    counter(dateRange: "thisWeek", siteId: "3", onlineThreshold: 100, t: $t) {
      visits,
      onlineVisitors
    }
  }
`