import { proxy } from "valtio"
import { derive } from "valtio/utils"
import { userStore } from "./user"

class Counter {
  count = 0

  setCount() {
    this.count = this.count + 1
  }
}

export const counterStore = proxy(new Counter())

export const prueba = derive({
  isData: (get) => {
    const { another } = get(userStore)
    const { count } = get(counterStore)

    return another || count > 0
  }
})