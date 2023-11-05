import React, { useContext } from 'react'
import DefaultModal from '../../../../shared/components/modals/DefaultModal'
import { SelectField } from '../../../../shared/components/input-fields/SelectField'
import { GetProductcontext } from '../../../../context/ProductContext'

const ProductAddModal = () => {
    const productContext = useContext(GetProductcontext)
    return (
        <DefaultModal modalFunction={productContext.setProductAddModalStatus}>
            <div style={{ scrollbarWidth: 'none' }} className="modal-body my-8 h-full overflow-y-auto">
                <form action="" onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-2'>
                    <div className="input-item md:flex items-center">
                        <div className="label shrink-0 min-w-[150px] ">Product Name</div>
                        <input type="text" className='w-full border-[2px] text-DarkGray border-[#c6c6c6] rounded outline-none py-2 px-2' placeholder='Type here..' />
                    </div>
                    <div className="input-item md:flex items-center">
                        <div className="label shrink-0 min-w-[150px] ">Description</div>
                        <textarea className='w-full border-[2px] resize-y min-h-[80px] text-DarkGray border-[#c6c6c6] rounded outline-none py-2 px-2'></textarea>
                    </div>
                    <div className="input-item md:flex items-center">
                        <div className="label shrink-0 min-w-[150px] ">Image</div>
                        <div className="w-full border-[2px]  min-h-[150px] flex items-center justify-center text-DarkGray border-[#c6c6c6] rounded outline-none py-2 px-2">
                            <div className="text-center flex items-center justify-center flex-col">
                                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_642_859)">
                                        <path d="M59.9387 25.9441C59.9387 31.6716 55.1624 36.3308 49.2912 36.3308H38.4139C37.752 36.3308 37.2148 35.8067 37.2148 35.1609C37.2148 34.5145 37.752 33.991 38.4139 33.991H49.2912C53.8397 33.991 57.5404 30.3811 57.5404 25.9441C57.5404 21.5182 53.8583 17.9154 49.3253 17.8973C49.3008 17.899 49.2768 17.9002 49.2522 17.9008C48.9044 17.9096 48.5687 17.7692 48.3342 17.5176C48.0998 17.2655 47.9894 16.9262 48.032 16.5887C48.11 15.971 48.1459 15.4591 48.1459 14.9771C48.1459 11.5036 46.7597 8.23886 44.2426 5.78316C41.7249 3.32746 38.378 1.97501 34.8182 1.97501C32.0427 1.97501 29.3841 2.80099 27.1302 4.36344C24.9261 5.89196 23.2658 8.00487 22.3298 10.4734C22.1877 10.8478 21.8604 11.1251 21.461 11.2105C21.0617 11.2953 20.645 11.176 20.356 10.894C19.2257 9.78844 17.7226 9.18008 16.1229 9.18008C12.8227 9.18008 10.1377 11.799 10.1377 15.0181C10.1377 15.0362 10.1401 15.0742 10.1431 15.1111C10.1467 15.1637 10.1503 15.2158 10.1521 15.269C10.1719 15.8101 9.80853 16.2939 9.27309 16.4384C7.37718 16.9496 5.66714 18.0704 4.45776 19.5949C3.20941 21.1678 2.54925 23.0538 2.54925 25.0491C2.54925 29.9792 6.66186 33.991 11.7158 33.991H21.6757C22.3376 33.991 22.8749 34.5145 22.8749 35.1609C22.8749 35.8067 22.3376 36.3308 21.6757 36.3308H11.7158C5.33916 36.3308 0.150879 31.2697 0.150879 25.0491C0.150879 22.5308 0.984314 20.1494 2.56065 18.1623C3.89714 16.4787 5.7187 15.1848 7.75852 14.4571C8.05532 10.2085 11.6931 6.8402 16.1229 6.8402C17.7861 6.8402 19.375 7.30993 20.7313 8.18504C21.8831 5.906 23.5932 3.94519 25.7409 2.45644C28.4031 0.610276 31.542 -0.364868 34.8182 -0.364868C39.0189 -0.364868 42.9678 1.23093 45.9382 4.12828C48.9086 7.02622 50.5443 10.8788 50.5443 14.9771C50.5443 15.1889 50.5383 15.4041 50.5269 15.627C55.8183 16.226 59.9387 20.6244 59.9387 25.9441Z" fill="#40D7E1" />
                                        <path d="M36.5218 26.191C36.2984 26.3694 36.0051 26.459 35.7118 26.459C35.4184 26.459 35.1251 26.3694 34.9017 26.191L31.146 23.193V39.2247C31.146 39.73 30.6332 40.1394 30.0002 40.1394C29.3672 40.1394 28.8545 39.73 28.8545 39.2247V23.193L25.0987 26.191C24.6513 26.5482 23.926 26.5482 23.4786 26.191C23.0312 25.8338 23.0312 25.2543 23.4786 24.8971L29.1902 20.3376C29.6376 19.9804 30.3628 19.9804 30.8103 20.3376L36.5218 24.8971C36.9692 25.2543 36.9692 25.8338 36.5218 26.191Z" fill="#40D7E1" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_642_859">
                                            <rect width="60" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className='text-sm mt-2'>Upload or Drag your Image</p>
                                <p className='text-sm text-[#c6c6c6]'>(Only jpg, png and webp will be accepted)</p>
                            </div>

                        </div>
                    </div>
                    <div className="input-item md:flex items-center">
                        <div className="label shrink-0 min-w-[150px]">Category</div>
                        <SelectField placeholder={'Category'} data={['Men\'s fashion', "Clothing"]} />
                    </div>
                    <div className="input-item md:flex items-center">
                        <div className="label shrink-0 min-w-[150px]">Sub Category</div>
                        <SelectField placeholder={'Sub Category'} data={['Men\'s fashion', "Clothing"]} />
                    </div>
                    <div className="input-item md:flex items-center">
                        <div className="label shrink-0 min-w-[150px]">Sub Sub Category</div>
                        <SelectField placeholder={'Sub Sub Category'} data={['Men\'s fashion', "Clothing"]} />
                    </div>
                    <div className="input-item md:flex items-center">
                        <div className="label shrink-0 min-w-[150px] ">Tags</div>
                        <textarea placeholder='Please separate by commas' className='w-full border-[2px] resize-y min-h-[80px] text-DarkGray border-[#c6c6c6] rounded outline-none py-2 px-2'></textarea>
                    </div>
                </form>
            </div>
        </DefaultModal>
    )
}

export default ProductAddModal