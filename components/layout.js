
import { SiteHeader } from '../components/site-header'
import { SiteFooter } from '../components/site-footer'

export function Layout({ children }) {
    return (
        <>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
        </>
    )
}