import React, { useState } from 'react'
import { ProgressBlueLight } from '../progress/Progress'
import { MapPointIcon } from '../../../assets/icons/PointIcon'
import { AnimatePresence, motion } from 'framer-motion'

export const OverviewCardSmall = ({ count, title, bgColor, children, prefix }) => {
    return (
        <div className="gap-2 md:gap-6 px-4 flex items-center">
            <div style={{ 'backgroundColor': bgColor }} className={`overview-card-icon h-fit w-fit p-2 lg:p-4 rounded`}>
                {children}
            </div>
            <div className="">
                <p className='text-xl md:text-2xl font-Domine text-Green'>{count}{prefix}</p>
                <p className='text-DarkGray text-sm  2xl:text-base font-Poppins'>{title}</p>
            </div>
        </div>

    )
}
export const OverviewCardTargetSale = ({ count, title, bgColor, children, prefix }) => {
    return (
        <div className="gap-2 md:gap-6 px-4 flex items-center justify-center">
            <div style={{ 'backgroundColor': bgColor }} className={`overview-card-icon shrink-0 h-fit w-fit p-2 lg:p-4 rounded`}>
                {children}
            </div>
            <div className="w-full flex flex-col gap-2 ">
                <p className='text-base md:text-xl font-Domine text-Green'>{title}</p>
                <div className="w-full h-5">
                    <ProgressBlueLight count={count} enableCountText={true} />
                </div>
            </div>
        </div>

    )
}

export const MapPointDot = ({ top, left, country }) => {
    const [active, setActive] = useState(false);
    return (
        <div onMouseLeave={() => setActive(false)} style={{ 'top': top, 'left': left }} className="select-none absolute">
            <div className="relative">
                <div className="point ">
                    <button onMouseEnter={() => setActive(true)}>  <MapPointIcon /></button>
                </div>
                <AnimatePresence>
                    {
                        active && (
                            <motion.div initial={{ scale: 0.8, x: '-50%', opacity: 0 }} animate={{ scale: 1, x: '-50%', opacity: 1 }} exit={{ scale: 0.8, x: '-50%', opacity: 0 }} className="absolute top-8 ] left-[50%]">
                                <div className="relative before:absolute before:content-[''] before:bottom-full before:left-[50%] before:rotate-45 before:-translate-x-[50%] before:translate-y-[50%] before:bg-[#252424] before:h-3 before:w-3">
                                    <p className="location-name text-sm bg-[#252424] text-white px-2 py-1 font-WorkSans rounded-sm">{country}</p>
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}