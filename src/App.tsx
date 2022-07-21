import { useState } from 'react'
import { useFlag, useFlagsStatus, useVariant, useUnleashClient, useUnleashContext } from '@unleash/proxy-client-react'
import logo from './logo.svg'
import './App.css'

import { useSnapshot } from 'valtio'
import { userStore } from './user'
import { prueba } from './counter'
import Button from './Button'

const Search = () => {
  const { search } = useSnapshot(userStore, {sync: true})

  console.log('search', search)

  const _handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    userStore.updateSearch(ev.target.value)
  }

  return (
    <input type="text" value={search} onChange={_handleChange} />
  )
}

function App() {
  const { featureFlags, another } = useSnapshot(userStore)
  const { isData } = useSnapshot(prueba)

  const [count, setCount] = useState(0)
  
  console.log('featureFlags', featureFlags)
  console.log('isData', isData)
  console.log('another', another)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Search />
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          
          <Button />
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
