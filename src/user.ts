import { proxyWithComputed } from "valtio/utils"

class User {
  search = ''
  featureFlags = false

  updateSearch(search: string) {
    this.search = search
  }
}

export const userStore = proxyWithComputed(new User(), {
  isData: ({search, featureFlags}) => {
    return search.length > 0 || featureFlags
  },
  another: ({search, featureFlags}) => {
    return search.length > 0 || featureFlags
  }
})