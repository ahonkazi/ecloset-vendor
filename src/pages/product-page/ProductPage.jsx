import React from 'react'
import { PageAnimation } from '../../shared/components/animations/Animation'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import ProductPageHeader from './components/header/ProductPageHeader'
import ProductPageFilter from './components/filter/ProductPageFilter'
import ProductTable from './components/producttable/ProductTable'

const ProductPage = () => {
    return (
        <PageAnimation>
            <PageWrapper title={'Products'}>
                <ProductPageHeader />
                <ProductPageFilter />
                <div className="overflow-x-auto">
                    <ProductTable />
                </div>
            </PageWrapper>
        </PageAnimation>
    )
}

export default ProductPage