import React from 'react'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import { PageAnimation } from '../../shared/components/animations/Animation'

import OrderFilter from './components/OrderFilter/OrderFilter'
import OrderTable from './components/Table/OrderTable'

const OrderPage = () => {
    return (
        <PageAnimation>
            <PageWrapper title={'Orders'}>
                <OrderFilter />
                <div className="overflow-x-auto">
                    <OrderTable />
                </div>
            </PageWrapper>
        </PageAnimation>
    )
}

export default OrderPage