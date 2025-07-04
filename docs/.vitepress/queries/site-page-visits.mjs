export const SITE_PAGE_VISITS_QUERY = `
  query SiteAndPageCounter($t: String, $page: String!) {
    counter(dateRange: "today", t: $t) {
      visits
    }
    pageVisits(page: $page, siteId:"*") {
      today
    }
  }
`