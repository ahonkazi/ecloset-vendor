import React from 'react'
import { SelectField, TextField } from '../../../../shared/components/input-fields/SelectField'
import { Button } from '@mui/material'

const ProductPageFilter = () => {
    return (
        <section className='section-style mt-4'>
            <div className="grid grid-cols-4 gap-4">
                <div className="search">
                    <TextField placeholder={'Search Product'} variant={'filled'} />
                </div>
                <div className="category">
                    <SelectField placeholder={'Select Category'} data={['Electronics Devices', 'Home and applience']} variant={'filled'} />
                </div>
                <div className="price">
                    <TextField placeholder={'Max price'} variant={'filled'} />
                </div>
                <div className="actions grid grid-cols-2 gap-4">
                    <button className='bg-LightBlue px-2 py-2 rounded text-white uppercase font-medium'>Filter</button>
                    <button className='bg-WhiteShade px-2 py-2 rounded text-Green uppercase font-medium'>Reset</button>
                </div>

            </div>
        </section>
    )
}

export default ProductPageFilter