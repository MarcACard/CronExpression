import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Facebook Meta Tags*/}
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="CronExpression.com"/>
        <meta property="og:title" content="Cron Expressions Simplified"/>
        <meta property="og:description" content="Effortlessly create cron expressions with natural language and AI. Simply describe your schedule in plain English and let our AI do the rest."/>
        <meta property="og:url" content="https://cronexpression.com/"/>
        <meta property="og:image" content="https://cronexpression.com/cronexpression-og-image.png" />
        
        {/* Twitter Meta Tags*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://cronexpression.com/cronexpression-og-image.png" / >
        <meta name="twitter:creator" content="@marcard" />

        {/* Misc Meta Tags*/}
        <meta name="description" content="Effortlessly create cron expressions with natural language and AI. Simply describe your schedule in plain English and let our AI do the rest."/>
      </Head>
      <body className="bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
