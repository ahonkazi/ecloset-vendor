import React from 'react'
import EditProduct from '../Edit/EditProduct'
import ChangeImage from '../Edit/ChangeImage'

const ProductDetailsLayout = () => {
    return (
        <div className="flex site-container md:gap-4 py-4 md:py-8">
            <div className="w-full ">
                <EditProduct />
                <div className="h-4"></div>
                <ChangeImage />
            </div>
            <div className="w-[350px]  shrink-0 translate-x-full md:translate-x-0 right-0 top-[90px] z-[-10] fixed  md:static">
                <div className="h-screen"></div>
            </div>
        </div>
    )
}

export default ProductDetailsLayout