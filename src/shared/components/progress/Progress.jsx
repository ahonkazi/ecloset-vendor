import React from 'react'

export const ProgressBlueLight = ({ count, enableCountText }) => {
    return (
        <div className="progress flex gap-4 items-center  progressBlue">
            <div className="h-3 w-full bg-[#F0F0F0] rounded-3xl">
                <div style={{ 'width': count + '%' }} className="line h-full rounded-3xl bg-LightBlue "></div>
            </div>
            {enableCountText && (
                <span className='shrink-0 text-Green font-Domine'>{count}%</span>

            )}
        </div>)
}

