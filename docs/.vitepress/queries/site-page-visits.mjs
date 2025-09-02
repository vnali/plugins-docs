export const SITE_PAGE_VISITS_QUERY = `
  query SiteAndPageCounter($page: String!) {
    counter(dateRange: "today", siteId: "3") {
      visits
    }
    pageVisits(page: $page, siteId:"*") {
      all
    }
  }
`