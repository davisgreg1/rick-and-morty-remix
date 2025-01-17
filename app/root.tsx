import { Links, LiveReload, Meta, Outlet } from 'remix'
import { Header } from '~/components/Layout/Header'
import styles from '~/tailwind.css'

export function links () {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App () {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        {process.env.NODE_ENV === 'development' ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  )
}
