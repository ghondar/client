import ReactDOM from 'react-dom/client'
import { FlagProvider, IConfig, UnleashClient } from '@unleash/proxy-client-react'
import App from './App'
import './index.css'
import theme from './theme'

const config: IConfig = {
  url: 'https://flags.referwell.com/proxy',
  clientKey: 'p2baZxJeJdt72Y4K7YFzjxZq6eNaLFVmNht8',
  refreshInterval: 15,
  appName: 'react-client',
  environment: 'development',
  disableMetrics: true,
};

const client = new UnleashClient(config);

client.updateContext({ userId: 'development' })

ReactDOM.createRoot(document.getElementById('root')!).render(
    <FlagProvider unleashClient={client}>
        <App />
    </FlagProvider>
)
