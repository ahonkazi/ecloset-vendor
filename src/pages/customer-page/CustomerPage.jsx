import React from 'react'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import { PageAnimation } from '../../shared/components/animations/Animation'

import CustomerPageHeader from './components/CustomerPageHeader/CustomerPageHeader'
import CustomerFilter from './components/CustomerFilter/CustomerFilter'
import CustomerTable from './components/Table/CustomerTable'

const CustomerPage = () => {
    return (
        <PageAnimation>
            <PageWrapper title={'Customers'}>
                <CustomerPageHeader />
                <CustomerFilter />
                <div className="overflow-x-auto">
                    <CustomerTable />
                </div>
            </PageWrapper>
        </PageAnimation>
    )
}

export default CustomerPage