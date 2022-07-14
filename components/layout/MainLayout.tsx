
import Head from 'next/head'
import { ElmentJSX } from './../../interfaces'
import { SideBar } from '../'

interface Props {
    children: ElmentJSX
    title?: string
}

export const MainLayout = ({ children, title = 'Open Jira' }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <SideBar>
                {children}
            </SideBar>
        </div>
    )
}
