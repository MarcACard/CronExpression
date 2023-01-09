import '../styles/globals.css'
import Script from 'next/script'

function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FX2H1HXZ7X"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FX2H1HXZ7X', cookie_flags: 'SameSite=None;Secure');
        `}
      </Script>
      <Component {...pageProps} />
    </>)
}
export default App;
