import { Button } from '@mui/material'
import React from 'react'
import { ButtonAdd, ButtonDelete } from '../../../../shared/components/buttons/Button'

const AttributePageHeader = () => {
    return (
        <section className='section-style flex-col flex gap-2 xs:flex-row xs:items-center xs:justify-between '>
            <div className="">
                <Button variant="outlined" style={{ borderColor: '#6B6B6B', color: '#6B6B6B' }}>Export</Button>
            </div>
            <div className="flex items-center justify-between gap-4">
                <ButtonDelete />

                <ButtonAdd bg={'#034B47'}>
                    Add Product
                </ButtonAdd>

            </div>
        </section>
    )
}

export default AttributePageHeader