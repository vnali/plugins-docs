export const HOME_QUERY = `
  query HomeCounter($t: String) {
    counter(dateRange: "all", siteId: "3", onlineThreshold: 100, t: $t) {
      visits,
      onlineVisitors
    }
  }
`