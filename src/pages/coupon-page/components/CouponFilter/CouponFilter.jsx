import React, { useContext } from 'react'
import { GetGlobalContext } from '../../../../context/GlobalContext'
import { SelectField, TextField } from '../../../../shared/components/input-fields/SelectField'

const CouponFilter = () => {
    const globalContext = useContext(GetGlobalContext)
    return (
        <section className='section-style mt-4'>
            <div className={`grid grid-cols-1  gap-4 ${globalContext.sidebarStatus ? 'lg:grid-cols-3 xl:grid-cols-4' : ' md:grid-cols-3 lg:grid-cols-4'}`}>
                <div className="search">
                    <TextField placeholder={'Search Product'} variant={'filled'} />
                </div>
                <div className="category">
                    <SelectField placeholder={'Select Category'} data={['Electronics Devices', 'Home and applience']} variant={'filled'} />
                </div>
                <div className="price">
                    <TextField placeholder={'Max price'} variant={'filled'} />
                </div>
                <div className={`actions grid grid-cols-2 gap-4 ${globalContext.sidebarStatus ? 'lg:col-start-3 xl:col-start-auto' : 'md:col-start-3 lg:col-start-auto'}`}>
                    <button className='bg-LightBlue px-2 py-2 rounded text-white uppercase font-medium'>Filter</button>
                    <button className='bg-WhiteShade px-2 py-2 rounded text-Green uppercase font-medium'>Reset</button>
                </div>

            </div>
        </section>
    )
}

export default CouponFilter