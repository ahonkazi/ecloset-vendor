import React from 'react'
import { PageAnimation } from '../../shared/components/animations/Animation'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import ProductPageHeader from './components/header/ProductPageHeader'
import ProductPageFilter from './components/filter/ProductPageFilter'

const ProductPage = () => {
    return (
        <PageAnimation>
            <PageWrapper title={'Products'}>
                <ProductPageHeader />
                <ProductPageFilter />
            </PageWrapper>
        </PageAnimation>
    )
}

export default ProductPage