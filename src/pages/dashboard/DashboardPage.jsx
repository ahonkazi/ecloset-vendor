import React from 'react'
import { PageAnimation } from '../../shared/components/animations/Animation'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import Overview from './components/overview/Overview'

const DashboardPage = () => {
    return (
        <PageAnimation>
            <PageWrapper title={'Dashboard Overview'}>
                <Overview />
            </PageWrapper>
        </PageAnimation>
    )
}

export default DashboardPage