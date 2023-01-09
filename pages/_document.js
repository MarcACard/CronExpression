import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="CronSchedule.xyz"/>
        <meta property="og:title" content="Cron Schedules Simplified"/>
        <meta property="og:description" content="Effortlessly create cron expressions with CronSchedule.xyz, powered by AI. Simply describe your schedule in plain English and let our AI do the rest."/>
        <meta property="og:url" content="https://cronschedule.xyz"/>
        <meta property="og:image" content="https://cronschedule.xyz/cronschedule-og-web-image.png"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:creator" content="@marcard"></meta>
      </Head>
      <body className="bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
