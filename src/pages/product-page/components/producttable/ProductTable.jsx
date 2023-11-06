import React, { useContext } from 'react'
import { TableDefault } from '../../../../shared/components/tables/Table'
import { ProductCard } from '../../../../shared/components/cards/Card'
import { GetGlobalContext } from '../../../../context/GlobalContext'

const ProductTable = () => {
    const globalContext = useContext(GetGlobalContext)
    return (
        <div className='mt-4 '>
            <div className={`w-full ${globalContext.sidebarStatus ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'} grid  gap-4`}>

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductTable