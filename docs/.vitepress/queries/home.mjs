export const HOME_QUERY = `
  query HomeCounter($t: String) {
    counter(dateRange: "thisWeek", onlineThreshold: 100, t: $t) {
      visits,
      onlineVisitors
    }
  }
`