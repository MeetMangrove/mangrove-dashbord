import App from 'src/routes/App'
import config from 'kit/config'
import LocalStorageManager from 'src/utils/LocalStorageManager'

import './framework.global.css'

config.setGraphQLEndpoint('https://api.graph.cool/simple/v1/cj78t448l01n00132a5m3q928/')

if (!SERVER) {
  config.setApolloNetworkOptions({
    credentials: 'include'
  })

  config.addApolloMiddleware((req, next) => {
    const jwt = LocalStorageManager.getUserToken()
    req.options.headers = {
      ...req.options.headers,
      authorization: `Bearer ${jwt}` || null
    }
    next()
  })
}
export default App
