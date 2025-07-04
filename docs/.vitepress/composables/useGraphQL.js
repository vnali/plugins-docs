export function useGraphQL() {

  const query = async (query, variables = {}, options = {}) => {
    try {

      const CRAFT_API_URL = import.meta.env.VITE_CRAFT_API_URL
      const GRAPHQL_TOKEN = import.meta.env.VITE_GRAPHQL_TOKEN 

      if (!CRAFT_API_URL) {
        throw new Error('CRAFT_API_URL is not configured')
      }

      let apiUrl = `${CRAFT_API_URL}/api`

      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

      // Add auth header if private flag is true
      if (options.private) {
        headers['Authorization'] = `Bearer ${GRAPHQL_TOKEN}`
      }

      if (options.previewToken) {
        headers['X-Craft-Token'] = options.previewToken
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query,
          variables
        }),
        credentials: 'include'
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
      }

      const result = await response.json()
      if (!result || typeof result !== 'object') {
        throw new Error('Invalid response format')
      }

      if (result.errors) {
        throw new Error(result.errors[0]?.message || 'GraphQL error')
      }

      return JSON.parse(JSON.stringify(result.data))
    } catch (err) {
      console.log(err);
      console.error('GraphQL Error:', {
        message: err.message,
      })
      throw err
    }
  }

  return { query }
}
