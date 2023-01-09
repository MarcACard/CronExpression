import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="CronSchedule.xyz"/>
        <meta property="og:title" content="Cron Schedules Simplified"/>
        <meta property="og:description" content="Easily create cron schedules with CronSchedule.xyz. Our user-friendly platform generates cron expressions in plain English, making it simple to schedule tasks and scripts on your server."/>
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
