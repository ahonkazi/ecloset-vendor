import React, { useContext, useState } from 'react'
import { PageAnimation } from '../../shared/components/animations/Animation'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import ProductPageHeader from './components/header/ProductPageHeader'
import ProductPageFilter from './components/filter/ProductPageFilter'
import ProductTable from './components/producttable/ProductTable'
import ProductAddModal from './components/modal/ProductAddModal'
import { AnimatePresence, motion } from 'framer-motion'
import { GetProductcontext, ProductContext } from '../../context/ProductContext'

const ProductPage = () => {
    const productContext = useContext(GetProductcontext)
    return (
        <>
            <PageAnimation>
                <PageWrapper title={'Products'}>
                    <ProductPageHeader setModal={productContext.setProductAddModalStatus} />
                    <ProductPageFilter />
                    <div className="overflow-x-auto">
                        <ProductTable />
                    </div>
                </PageWrapper>
            </PageAnimation>

            {productContext.productAddModalStatus && (

                <ProductAddModal />

            )}

        </>
    )
}

export default ProductPage