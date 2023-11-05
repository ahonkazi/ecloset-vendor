import React from 'react'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import { PageAnimation } from '../../shared/components/animations/Animation'
import CouponPageHeader from './components/CouponPageHeader/CouponPageHeader'
import CouponFilter from './components/CouponFilter/CouponFilter'
import CouponTable from './components/Table/CouponTable'

const CouponPage = () => {
    return (
        <PageAnimation>
            <PageWrapper title={'Coupons'}>
                <CouponPageHeader />
                <CouponFilter />
                <div className="overflow-x-auto">
                    <CouponTable />
                </div>
            </PageWrapper>
        </PageAnimation>
    )
}

export default CouponPage