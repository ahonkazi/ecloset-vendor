import { IconButton, Switch } from '@mui/material'
import React from 'react'
import { FiEye } from 'react-icons/fi'
export const TableDefault = () => {
    return (
        <table class="border-collapse w-full">
            <thead>
                <tr>
                    <th class="px-3 py-3 font-bold text-sm uppercase bg-Green text-white hidden text-start lg:table-cell">
                        <input type="checkbox" name="" id="" />
                    </th>
                    <th class="px-3 py-3 font-bold text-sm uppercase bg-Green text-white hidden text-start lg:table-cell">Product name</th>
                    <th class="px-3 py-3 font-bold text-sm uppercase bg-Green text-white hidden text-start lg:table-cell">Category</th>
                    <th class="px-3 py-3 font-bold text-sm uppercase bg-Green text-white hidden text-start lg:table-cell">Status</th>
                    <th class="px-3 py-3 font-bold text-sm uppercase bg-Green text-white hidden text-start lg:table-cell">View</th>
                    <th class="px-3 py-3 font-bold text-sm uppercase bg-Green text-white hidden text-start lg:table-cell">Published</th>
                    <th class="px-3 py-3 font-bold text-sm uppercase bg-Green text-white hidden text-start lg:table-cell">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    [...new Array(10)].map(item =>
                        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td class="w-full lg:w-auto px-3 py-1 text-gray-800 text-start block lg:table-cell relative lg:static">
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td class="w-full lg:w-auto px-3 py-1 text-gray-800 text-start block lg:table-cell relative lg:static">
                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                                <div className='flex items-center gap-2'>
                                    <img className='w-7 h-7 rounded-full' src="https://res.cloudinary.com/ahossain/image/upload/v1682058933/product/CMTHP-COR12-deep-ash-920x920.webp" alt="" />
                                    <span> Premium Everbee shirt</span>
                                </div>
                            </td>
                            <td class="w-full lg:w-auto px-3 py-1 text-gray-800  text-start block lg:table-cell relative lg:static">
                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                                Men's fahions
                            </td>
                            <td class="w-full lg:w-auto px-3 py-1 text-gray-800  text-start block lg:table-cell relative lg:static">
                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Published</span>
                                <span class="rounded-3xl bg-red-400 py-1 px-3 text-xs font-bold">Sold out</span>
                            </td>
                            <td class="w-full lg:w-auto px-3 py-1 text-gray-800  text-start block lg:table-cell relative lg:static">
                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                                <IconButton>
                                    <FiEye />
                                </IconButton>
                            </td>
                            <td class="w-full lg:w-auto px-3 py-1 text-gray-800  text-start block lg:table-cell relative lg:static">
                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">View</span>
                                <Switch defaultChecked color='default' />

                            </td>


                            <td class="w-full lg:w-auto px-3 py-1 text-gray-800  text-start block lg:table-cell relative lg:static">
                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                                <IconButton>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.2082 5.22188L8.70131 10.7287L9.91681 11.4582L10.6456 12.6737L16.1524 7.16681L14.2082 5.22188ZM15.181 4.24975L17.1252 6.194L17.6113 5.70794C17.7402 5.57901 17.8126 5.40418 17.8126 5.22188C17.8126 5.03957 17.7402 4.86474 17.6113 4.73581L16.6392 3.76437C16.5103 3.63549 16.3354 3.56308 16.1531 3.56308C15.9708 3.56308 15.796 3.63549 15.6671 3.76437L15.181 4.25044V4.24975ZM7.7285 11.7016L7.40263 12.0281V13.9724H9.34688L9.67344 13.6458L8.94469 12.431L7.72919 11.7016H7.7285ZM17.1259 2.3055L19.0702 4.24975C19.328 4.5076 19.4728 4.85727 19.4728 5.22188C19.4728 5.58648 19.328 5.93615 19.0702 6.194L9.9175 15.3474H6.02831V11.4582L15.181 2.3055C15.4389 2.04773 15.7885 1.90292 16.1531 1.90292C16.5177 1.90292 16.8674 2.04773 17.1252 2.3055H17.1259ZM11.375 1.0625C11.375 1.24484 11.3026 1.4197 11.1736 1.54864C11.0447 1.67757 10.8698 1.75 10.6875 1.75H2.4375C2.05731 1.75 1.75 2.05525 1.75 2.432V17.568C1.75 17.9372 2.058 18.25 2.4375 18.25H17.5625C17.9427 18.25 18.25 17.9447 18.25 17.568V12.0625C18.25 11.8802 18.3224 11.7053 18.4514 11.5764C18.5803 11.4474 18.7552 11.375 18.9375 11.375C19.1198 11.375 19.2947 11.4474 19.4236 11.5764C19.5526 11.7053 19.625 11.8802 19.625 12.0625V18.2466C19.625 19.0076 19.0063 19.625 18.2562 19.625H1.74312C0.987563 19.625 0.375 19.0083 0.375 18.2466V1.75344C0.375 0.992375 0.99375 0.375 1.74381 0.375H10.6875C10.8698 0.375 11.0447 0.447433 11.1736 0.576364C11.3026 0.705295 11.375 0.880164 11.375 1.0625Z" fill="#6B6B6B" />
                                    </svg>
                                </IconButton>
                                <IconButton>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5002 20.5026H6.49946C5.57147 20.5012 4.68196 20.1316 4.02616 19.475C3.37035 18.8184 3.00183 17.9285 3.00146 17.0005V3.00024H18.9996V17.0005C18.9989 17.9286 18.63 18.8186 17.974 19.4751C17.318 20.1316 16.4283 20.5012 15.5002 20.5026ZM3.99971 4.00399V17.0019C4.00044 17.6646 4.26404 18.3 4.73268 18.7687C5.20131 19.2373 5.83671 19.5009 6.49946 19.5016H15.5016C16.1643 19.5013 16.7998 19.2377 17.2683 18.769C17.7368 18.3002 18 17.6646 18 17.0019V4.00399H3.99971Z" fill="#6B6B6B" />
                                        <path d="M14.498 4.004H7.50195V2.002C7.50195 0.89925 8.39708 0 9.49983 0H12.5001C13.6042 0 14.498 0.89925 14.498 2.002V4.004ZM8.5002 3.00025H13.4983V2.002C13.4983 1.73688 13.393 1.48262 13.2055 1.29516C13.0181 1.10769 12.7638 1.00237 12.4987 1.00237H9.49983C9.23482 1.00274 8.98078 1.10817 8.79339 1.29556C8.606 1.48295 8.50057 1.73699 8.5002 2.002V3.00025Z" fill="#6B6B6B" />
                                        <path d="M21.4993 4.00399H0.501719C0.375031 3.99461 0.256579 3.93766 0.170134 3.84457C0.0836878 3.75149 0.0356445 3.62915 0.0356445 3.50212C0.0356445 3.37508 0.0836878 3.25275 0.170134 3.15966C0.256579 3.06658 0.375031 3.00963 0.501719 3.00024H21.4993C21.7785 3.00024 21.9998 3.22574 21.9998 3.50212C21.9998 3.77849 21.7785 4.00399 21.4993 4.00399ZM10.9998 16.0022C10.8671 16.0019 10.7399 15.9491 10.6458 15.8553C10.5518 15.7616 10.4987 15.6345 10.498 15.5017V7.00012C10.498 6.72374 10.7235 6.50237 10.9998 6.50237C11.2762 6.50237 11.5017 6.72512 11.5017 7.00012V15.5004C11.5014 15.6334 11.4484 15.7608 11.3543 15.8548C11.2603 15.9489 11.1328 16.0019 10.9998 16.0022ZM6.99997 15.0026C6.86721 15.0023 6.73997 14.9495 6.64597 14.8557C6.55197 14.762 6.49882 14.6349 6.49809 14.5021V8.00249C6.49809 7.86957 6.5509 7.74209 6.64489 7.6481C6.73888 7.55411 6.86636 7.50131 6.99928 7.50131C7.1322 7.50131 7.25968 7.55411 7.35367 7.6481C7.44766 7.74209 7.50047 7.86957 7.50047 8.00249V14.5021C7.50047 14.5678 7.48752 14.6329 7.46237 14.6937C7.43722 14.7544 7.40035 14.8096 7.35388 14.856C7.3074 14.9025 7.25222 14.9394 7.1915 14.9645C7.13078 14.9897 7.0657 15.0026 6.99997 15.0026ZM14.4978 15.0026C14.3657 15.0019 14.2392 14.9488 14.1462 14.855C14.0531 14.7612 14.0011 14.6343 14.0015 14.5021V8.00249C14.0015 7.87012 14.0541 7.74316 14.1477 7.64956C14.2413 7.55596 14.3682 7.50337 14.5006 7.50337C14.633 7.50337 14.7599 7.55596 14.8535 7.64956C14.9471 7.74316 14.9997 7.87012 14.9997 8.00249V14.5021C14.9997 14.7771 14.777 15.0026 14.4978 15.0026Z" fill="#6B6B6B" />
                                    </svg>
                                </IconButton>
                            </td>
                        </tr>

                    )
                }


            </tbody>
        </table>)
}

