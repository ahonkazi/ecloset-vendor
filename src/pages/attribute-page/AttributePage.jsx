import React from 'react'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import { PageAnimation } from '../../shared/components/animations/Animation'
import AttributePageHeader from './components/AttributePageHeader/AttributePageHeader'
import AttributeFilter from './components/AttributeFilter/AttributeFilter'
import AttributeTable from './components/Table/AttributeTable'

const AttributePage = () => {
    return (
        <PageAnimation>
            <PageWrapper title={'Attributes'}>
                <AttributePageHeader />
                <AttributeFilter />
                <div className="overflow-x-auto">
                    <AttributeTable />
                </div>
            </PageWrapper>
        </PageAnimation>
    )
}

export default AttributePage