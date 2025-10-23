export const TOP_PAGES_QUERY = `
  query TopPagesCounter($t: String) {
    topPages(dateRange: "thisWeek", siteId: "3", limit: 10, t: $t) {
      page
      visits
    }
  }
`