import React from 'react'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import { PageAnimation } from '../../shared/components/animations/Animation'
import Heading from './components/heading/Heading'
import ProductDetailsLayout from './components/layout/ProductDetailsLayout'


const ProductDetails = () => {
    return (
        <PageAnimation>
            <Heading />
            <ProductDetailsLayout />
        </PageAnimation>
    )
}

export default ProductDetails