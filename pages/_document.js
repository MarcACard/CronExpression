import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Cron Schedules Simplified" key="title"/>
        <meta property="og:description" content="Easily create and understand cron schedules with CronSchedule.xyz. Our user-friendly platform generates cron expressions in plain English, making it simple to schedule tasks and scripts on your server." key="description"/>
        <meta property="og:site_name" content="CronSchedule.xyz" key="site_name"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body className="bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
