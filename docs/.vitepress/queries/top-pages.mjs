export const TOP_PAGES_QUERY = `
  query TopPagesCounter($t: String) {
    topPages(dateRange: "thisWeek", siteId: "*", limit: 10, t: $t) {
      page
      visits
    }
  }
`