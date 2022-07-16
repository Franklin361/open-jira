
import Head from 'next/head'
import { ElmentJSX } from './../../interfaces'
import { SideBar } from '../'

interface Props {
    children: ElmentJSX
    title?: string
    navTitle?: string
}

export const MainLayout = ({ children, title = 'Open Jira', navTitle = 'Home' }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <SideBar title={navTitle} />
            {children}
        </div>
    )
}
