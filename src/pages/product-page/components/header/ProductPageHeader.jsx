import { Button } from '@mui/material'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import { ButtonAdd, ButtonDelete } from '../../../../shared/components/buttons/Button'

const ProductPageHeader = ({ setModal }) => {

    return (
        <section className='section-style flex-col flex gap-2 sm:flex-row sm:justify-between  '>
            <div className="flex gap-2">
                <div className="w-full sm:w-auto">
                    <Button fullWidth variant="outlined" style={{ borderColor: '#6B6B6B', color: '#6B6B6B' }}>Export</Button>

                </div>
                <div className="w-full sm:w-auto">
                    <Button fullWidth variant="contained" style={{ background: '#6B6B6B', color: '#fff' }}>Select All</Button>

                </div>
            </div>
            <div className=" grid grid-cols-2 gap-2 sm:flex">
                <div className="">
                    <ButtonDelete />
                </div>
                <div className="">
                    <span onClick={() => setModal(true)}>
                        <ButtonAdd bg={'#034B47'}>
                            Add Product
                        </ButtonAdd>
                    </span>
                </div>

            </div>
        </section>
    )
}

export default ProductPageHeader