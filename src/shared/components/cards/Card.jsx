import { Link } from 'react-router-dom';
import img from '../../assets/headphone.png';
import style from './card.module.scss';
import { ImStarFull, ImStarHalf } from 'react-icons/im'
import { FaCartPlus } from 'react-icons/fa6'
import { AiFillEye, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'
import { FiEdit } from 'react-icons/fi';


export const ProductCard = () => {
    return (
        <div className={`product-card flex sm:block xs:max-w-[100%]  ${style.ProductCardStyle} bg-white shadow-2 rounded-[10px] sm:pb-2.5`}>
            <div className={`product-img  md:min-h-[300px] cursor-pointer relative ${style.productImgWrapper}`}>
                <div className="absolute top-0 left-0 z-[30] ml-2">
                    <input type="checkbox" name="" id="" />
                </div>
                <img src={img} alt="" className='rounded-[10px] w-full' />
                <div className={`${style.OverLay2} py-3 px-4 w-full h-full hidden sm:flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                </div>
                <div className={`${style.OverLay} hidden z-[20] py-3 overflow-hidden px-4 w-full h-full sm:flex justify-between flex-col  absolute top-0  rounded-[10px]`}>

                    <div className="overlay-top flex justify-end flex-col items-end gap-2">
                        <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-DarkGray bg-white rounded-full`}><HiOutlineTrash /> </button>
                        <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-DarkGray bg-white rounded-full`}><AiOutlineEye /> </button>
                        <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-DarkGray bg-white rounded-full`}><FiEdit /> </button>
                    </div>
                    <div className="overlay-bottom overflow-hidden w-full flex items-center justify-center">
                        <button className={`${style.FadeUp} bg-White px-4 rounded-md text-Green font-Roboto text-sm font-medium py-2 w-full`}>Manage stock</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between xs:justify-center xs:gap-4">
                <div className="">
                    <div className="product-info px-3">
                        <Link to={'/products/a4tech-gaming-keyboard'}>
                            <h2 className="title hover:text-sky-500 text-DarkGray font-WorkSans text-sm mt-[14px]">Uiisii C100 Super Bass Stereo In Ear Headphone - Black...</h2>
                        </Link>
                        <p className="price text-Red font-Poppins pt-2 font-medium text-lg"><span className=''>৳ </span>1400</p>
                        <p className='text-xs font-WorkSans text-DarkGray'><span>৳</span> <strike>2800</strike> <span className='ml-2'>-</span> <span>50%</span> </p>
                    </div>
                    <div className="product-footer flex-col xs:flex-row  px-2 mt-1 flex justify-between sm:items-center">
                        <p className='flex items-center'>
                            <ImStarFull className='text-YellowDark text-sm' />
                            <ImStarFull className='text-YellowDark text-sm' />
                            <ImStarFull className='text-YellowDark text-sm' />
                            <ImStarFull className='text-YellowDark text-sm' />
                            <ImStarHalf className='text-YellowDark text-sm' />
                            <span className='ml-2 text-xs'>(250)</span>
                        </p>
                        <p className='text-xs text-DarkGray'>Free Shipping</p>

                    </div>
                </div>
                <div className="sm:hidden pb-4 flex gap-2 px-4">
                    <button className={`${style.cartFooterButton}`}>
                        <AiFillEye />
                    </button>
                    <button className={`${style.cartFooterButton}`}>
                        <AiOutlineHeart />
                    </button>
                    <button className={`${style.cartFooterButton}`}>
                        <FaCartPlus />
                    </button>
                </div>
            </div>
        </div>

    )
}

