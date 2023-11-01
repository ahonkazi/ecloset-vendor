import React from 'react'
import { MapPointDot, OverviewCardSmall, OverviewCardTargetSale } from '../../../../shared/components/cards/CardSmalls'
import foodIcon from '../../assets/food-icon.svg'
import map from '../../assets/map.svg'
import { MapPointIcon } from '../../../../assets/icons/PointIcon'
const Overview = () => {
    return (
        <section className='grid grid-cols-1 xs:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-4 auto-rows-[120px] '>
            <div className="bg-white shadow-box flex items-center justify-center rounded item-1">
                <div className="">
                    <OverviewCardSmall title={'Lifetime Order'} count={'11.7'} prefix={'k'} bgColor={'#FAEFFF'}>
                        <svg className='h-[30px] w-[28px] xl:h-[36px] xl:w-[32px]' viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_576_359)">
                                <path d="M13.3017 27.4479C13.3017 20.0602 18.9824 14.0717 25.9904 14.0717C27.1464 14.0717 28.2654 14.2345 29.3294 14.5428V2.80729C29.3294 1.25414 28.1316 -0.00857162 26.6583 -0.00857162H2.6162C1.14288 -0.00857162 -0.0549316 1.25414 -0.0549316 2.80729V32.376C-0.0549316 33.9292 1.14288 35.1919 2.6162 35.1919H15.6433C14.17 33.0054 13.3017 30.3345 13.3017 27.4479ZM6.62314 5.62364H22.6514C23.3901 5.62364 23.9872 6.25302 23.9872 7.03182C23.9872 7.81062 23.3901 8.44 22.6514 8.44H6.62314C5.88436 8.44 5.28734 7.81062 5.28734 7.03182C5.28734 6.25302 5.88436 5.62364 6.62314 5.62364ZM6.62314 14.0717H11.9659C12.7046 14.0717 13.3017 14.7011 13.3017 15.4799C13.3017 16.2587 12.7046 16.8881 11.9659 16.8881H6.62314C5.88436 16.8881 5.28734 16.2587 5.28734 15.4799C5.28734 14.7011 5.88436 14.0717 6.62314 14.0717ZM9.29474 25.3361H6.62361C5.88483 25.3361 5.28781 24.7068 5.28781 23.928C5.28781 23.1492 5.88483 22.5198 6.62361 22.5198H9.29474C10.0335 22.5198 10.6305 23.1492 10.6305 23.928C10.6305 24.7068 10.0335 25.3361 9.29474 25.3361ZM25.9904 16.8876C20.4599 16.8876 15.9728 21.6178 15.9728 27.4479C15.9728 33.278 20.4599 38.0083 25.9904 38.0083C31.5209 38.0083 36.008 33.278 36.008 27.4479C36.008 21.6178 31.5213 16.8876 25.9904 16.8876ZM30.4733 24.6538L26.4663 31.6942C26.2786 32.0242 25.9697 32.2573 25.6149 32.3454C25.5187 32.3671 25.4187 32.3805 25.3225 32.3805C25.0596 32.3805 24.8006 32.3013 24.5795 32.143L20.5725 29.3271C19.9591 28.8957 19.792 28.0204 20.2013 27.3737C20.6106 26.727 21.4409 26.5509 22.0543 26.9823L24.8968 28.9798L28.1818 23.2066C28.5615 22.5376 29.3839 22.3224 30.0142 22.7227C30.6488 23.1229 30.8534 23.9854 30.4733 24.6538Z" fill="#7A51FF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_576_359">
                                    <rect className='h-[38px] w-[36px]' fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </OverviewCardSmall>
                </div>
            </div>

            <div className="bg-white shadow-box flex items-center justify-center rounded item-1">
                <div className="">
                    <OverviewCardSmall title={'Lifetime Order'} count={'11.7'} prefix={'k'} bgColor={'#ECFFF4'}>
                        <img src={foodIcon} alt="" />
                    </OverviewCardSmall>
                </div>
            </div>

            <div className="bg-white shadow-box flex items-center justify-center rounded item-1">
                <div className="">
                    <OverviewCardSmall title={'Today\'s Sales'} count={'18.7'} prefix={'k'} bgColor={'#FFF3F1'}>
                        <svg className='h-[30px] w-[28px] xl:h-[36px] xl:w-[32px]' viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.3359 35.5021C33.3359 36.6203 32.9471 37.6927 32.2549 38.4834C31.5627 39.2741 30.624 39.7183 29.6451 39.7183C28.6662 39.7183 27.7274 39.2741 27.0353 38.4834C26.3431 37.6927 25.9542 36.6203 25.9542 35.5021C25.9542 34.3839 26.3431 33.3114 27.0353 32.5207C27.7274 31.73 28.6662 31.2858 29.6451 31.2858C30.624 31.2858 31.5627 31.73 32.2549 32.5207C32.9471 33.3114 33.3359 34.3839 33.3359 35.5021Z" fill="#FD2B10" />
                            <path d="M17.9248 35.6429C17.9248 36.7985 17.5319 37.9067 16.8325 38.7238C16.1331 39.5409 15.1845 40 14.1954 40C13.2063 40 12.2578 39.5409 11.5584 38.7238C10.859 37.9067 10.4661 36.7985 10.4661 35.6429C10.4661 34.4873 10.859 33.3791 11.5584 32.562C12.2578 31.7449 13.2063 31.2858 14.1954 31.2858C15.1845 31.2858 16.1331 31.7449 16.8325 32.562C17.5319 33.3791 17.9248 34.4873 17.9248 35.6429Z" fill="#FD2B10" />
                            <path d="M3.32613 0C5.1677 0 6.65739 1.7575 6.65739 3.92577L7.09917 7.86621H39.6105C40.4272 7.86621 41 8.70828 41 9.78508C41 10.1929 40.9743 10.5773 40.8151 10.8854L37.7047 26.8877C37.602 27.3924 37.2732 27.765 36.8545 27.9704C36.6519 28.1222 36.4162 28.2065 36.1739 28.2139H9.29518L9.74209 31.4208H34.4556C35.2749 31.4208 35.7424 31.5851 35.7424 32.6619C35.7424 33.7387 35.2749 34.0527 34.4556 34.0527L6.74215 34.0556L3.76276 7.80166C3.61636 7.8222 3.47767 7.85447 3.32613 7.85447C1.4897 7.85447 0 6.09404 0 3.9287C0 1.7575 1.49226 0 3.32613 0ZM8.30376 16.9354H12.7883V10.6536H7.45104L8.30376 16.9354ZM35.4676 25.4001L36.2612 19.4293H30.6569V25.4001H35.4676ZM20.5732 10.6565H15.3156V16.6625H20.5732V10.6565ZM22.9824 16.7535H28.3196V10.6095H22.9824V16.7535ZM30.6877 16.7241H36.3306L37.1371 10.6624H30.6851V16.7241H30.6877ZM28.2785 19.4587H22.9824V25.5556H28.2785V19.4587ZM20.5732 19.4117H15.2771V25.5556H20.5732V19.4117ZM12.8679 25.5087V19.5027H7.97243L8.71471 25.5087H12.8679Z" fill="#FD2B10" />
                        </svg>
                    </OverviewCardSmall>
                </div>
            </div>

            <div className="bg-white shadow-box flex items-center justify-center rounded item-4 col-start-1  xs:row-start-2 xs:col-end-3 md:col-end-2 lg:col-end-3 col-end-2 row-span-2 xl:col-start-4 xl:col-end-6 xl:row-start-1 xl:row-end-3">
                <div className="py-2">
                    <p className='text-center text-lg font-Literata mt-2'>Our Daily Customers</p>
                    <div className="py-2 mapArea relative">
                        <img src={map} alt="" />
                        <MapPointDot top={'55%'} left={'65%'} country={'Bangladesh'} />
                        <MapPointDot top={'60%'} left={'80%'} country={'Australia'} />
                        <MapPointDot top={'20%'} left={'5%'} country={'Canada'} />
                        <MapPointDot top={'42%'} left={'68%'} country={'India'} />
                        <MapPointDot top={'40%'} left={'75%'} country={'China'} />

                    </div>
                    <div className="box flex justify-center  items-center gap-2">
                        <div className="h-3 w-10 bg-red-600 rounded"></div>
                        <p className='font-Domine text-DarkGray text-sm'>Country</p>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-box flex items-center justify-center rounded item-5">
                <div className="">
                    <OverviewCardSmall title={'Today\'s Customer'} count={'7'} prefix={'k'} bgColor={'#FFEFFB'}>
                        <svg className='h-[30px] w-[28px] xl:h-[36px] xl:w-[32px]' viewBox="0 0 47 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_576_378)">
                                <path d="M32.0258 12.8649C33.2875 12.8649 34.521 12.4883 35.5701 11.7827C36.6192 11.0771 37.4369 10.0742 37.9198 8.90084C38.4026 7.72748 38.529 6.43635 38.2828 5.19072C38.0367 3.94509 37.4291 2.8009 36.5368 1.90285C35.6446 1.0048 34.5079 0.393224 33.2704 0.145453C32.0328 -0.102319 30.7501 0.0248465 29.5844 0.510867C28.4187 0.996888 27.4223 1.81993 26.7213 2.87593C26.0203 3.93192 25.6461 5.17344 25.6461 6.44347C25.6461 8.14653 26.3183 9.77984 27.5147 10.9841C28.7111 12.1883 30.3338 12.8649 32.0258 12.8649ZM15.0081 12.8649C16.2698 12.8649 17.5033 12.4883 18.5524 11.7827C19.6015 11.0771 20.4192 10.0742 20.9021 8.90084C21.385 7.72748 21.5113 6.43635 21.2651 5.19072C21.019 3.94509 20.4114 2.8009 19.5192 1.90285C18.6269 1.0048 17.4902 0.393224 16.2527 0.145453C15.0151 -0.102319 13.7324 0.0248465 12.5667 0.510867C11.401 0.996888 10.4046 1.81993 9.7036 2.87593C9.00259 3.93192 8.62843 5.17344 8.62843 6.44347C8.62843 7.2881 8.79397 8.12442 9.11557 8.90455C9.43718 9.68468 9.90853 10.3933 10.5026 10.9898C11.0967 11.5863 11.8019 12.0589 12.5777 12.3807C13.3536 12.7025 14.1849 12.867 15.024 12.8649H15.0081ZM15.0081 17.1512C10.0479 17.1512 0.127563 19.6555 0.127563 24.6482V29.994H29.9045V24.6321C29.9045 19.6395 19.9682 17.1351 15.024 17.1351L15.0081 17.1512ZM32.0258 17.1512C31.4037 17.1512 30.702 17.1512 29.9683 17.2635C31.2137 18.0519 32.2476 19.1362 32.979 20.421C33.7104 21.7059 34.117 23.152 34.1629 24.6321V29.9779H46.9222V24.6321C46.9222 19.6395 36.9859 17.1351 32.0258 17.1351V17.1512Z" fill="#AE2ECE" />
                            </g>
                            <defs>
                                <clipPath id="clip0_576_378">
                                    <rect width="47" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </OverviewCardSmall>
                </div>
            </div>
            <div className="bg-white shadow-box flex items-center justify-center rounded item-6 xs:col-start-1 xs:col-end-3 lg:row-start-3 lg:col-start-3 xl:row-span-1 xl:col-start-2 xl:col-end-4">
                <div className="w-full">
                    <OverviewCardTargetSale title={'Target Sale'} count={80} bgColor={'#EAFEFF'}>
                        <svg className='h-[30px] w-[28px] xl:h-[36px] xl:w-[32px]' viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 1.79138C24.178 1.79138 26.7325 2.31168 29.1635 3.35228C31.5944 4.39288 33.6894 5.79268 35.4483 7.55166C37.2073 9.31065 38.6071 11.4056 39.6477 13.8365C40.6883 16.2675 41.2086 18.822 41.2086 21.5C41.2086 24.178 40.6883 26.7325 39.6477 29.1635C38.6071 31.5944 37.2073 33.6894 35.4483 35.4483C33.6894 37.2073 31.5944 38.6071 29.1635 39.6477C26.7325 40.6883 24.178 41.2086 21.5 41.2086C18.822 41.2086 16.2675 40.6883 13.8365 39.6477C11.4056 38.6071 9.31065 37.2073 7.55166 35.4483C5.79268 33.6894 4.39288 31.5944 3.35228 29.1635C2.31168 26.7325 1.79138 24.178 1.79138 21.5C1.79138 18.822 2.31168 16.2675 3.35228 13.8365C4.39288 11.4056 5.79268 9.31065 7.55166 7.55166C9.31065 5.79268 11.4056 4.39288 13.8365 3.35228C16.2675 2.31168 18.822 1.79138 21.5 1.79138ZM21.5 5.375C19.3162 5.375 17.2281 5.80185 15.2358 6.65554C13.2434 7.50924 11.5289 8.65476 10.0921 10.0921C8.65533 11.5294 7.50981 13.244 6.65554 15.2358C5.80128 17.2275 5.37443 19.3156 5.375 21.5C5.37558 23.6844 5.80242 25.7725 6.65554 27.7642C7.50866 29.756 8.65418 31.4706 10.0921 32.9079C11.53 34.3452 13.2446 35.4908 15.2358 36.3445C17.2269 37.1982 19.315 37.625 21.5 37.625C23.685 37.625 25.7731 37.1982 27.7642 36.3445C29.7554 35.4908 31.47 34.3452 32.9079 32.9079C34.3458 31.4706 35.4913 29.756 36.3445 27.7642C37.1976 25.7725 37.6244 23.6844 37.625 21.5C37.6256 19.3156 37.1987 17.2275 36.3445 15.2358C35.4902 13.244 34.3447 11.5294 32.9079 10.0921C31.4711 8.65476 29.7566 7.50924 27.7642 6.65554C25.7719 5.80185 23.6838 5.375 21.5 5.375ZM21.5 8.95862C23.1982 8.95862 24.8219 9.29001 26.371 9.95278C27.9202 10.6156 29.2546 11.5068 30.3743 12.6265C31.4941 13.7462 32.3853 15.0807 33.0481 16.6298C33.7109 18.179 34.0422 19.8026 34.0422 21.5009C34.0422 23.1991 33.7109 24.8228 33.0481 26.3719C32.3853 27.921 31.4941 29.2555 30.3743 30.3752C29.2546 31.4949 27.9202 32.3862 26.371 33.0489C24.8219 33.7117 23.1982 34.0431 21.5 34.0431C19.8018 34.0431 18.1781 33.7117 16.629 33.0489C15.0798 32.3862 13.7454 31.4949 12.6257 30.3752C11.5059 29.2555 10.6147 27.921 9.95192 26.3719C9.28915 24.8228 8.95776 23.1991 8.95776 21.5009C8.95776 19.8026 9.28915 18.179 9.95192 16.6298C10.6147 15.0807 11.5059 13.7462 12.6257 12.6265C13.7454 11.5068 15.0798 10.6156 16.629 9.95278C18.1781 9.29001 19.8018 8.95862 21.5 8.95862ZM21.5 12.5414C20.2868 12.5414 19.1273 12.7793 18.0213 13.2552C16.9153 13.731 15.9636 14.368 15.1661 15.1661C14.3686 15.9642 13.7316 16.9159 13.2552 18.0213C12.7787 19.1267 12.5408 20.2863 12.5414 21.5C12.542 22.7137 12.7799 23.8733 13.2552 24.9787C13.7305 26.0841 14.3674 27.0358 15.1661 27.8339C15.9648 28.632 16.9165 29.269 18.0213 29.7448C19.1261 30.2207 20.2857 30.4586 21.5 30.4586C22.7143 30.4586 23.8739 30.2207 24.9787 29.7448C26.0835 29.269 27.0352 28.632 27.8339 27.8339C28.6326 27.0358 29.2695 26.0841 29.7448 24.9787C30.2201 23.8733 30.458 22.7137 30.4586 21.5C30.4592 20.2863 30.2213 19.1267 29.7448 18.0213C29.2684 16.9159 28.6314 15.9642 27.8339 15.1661C27.0364 14.368 26.0847 13.731 24.9787 13.2552C23.8727 12.7793 22.7132 12.5414 21.5 12.5414ZM21.5 16.125C22.9838 16.125 24.2506 16.6499 25.3003 17.6997C26.3501 18.7494 26.875 20.0162 26.875 21.5C26.875 22.9838 26.3501 24.2506 25.3003 25.3003C24.2506 26.3501 22.9838 26.875 21.5 26.875C20.0162 26.875 18.7494 26.3501 17.6997 25.3003C16.6499 24.2506 16.125 22.9838 16.125 21.5C16.125 20.0162 16.6499 18.7494 17.6997 17.6997C18.7494 16.6499 20.0162 16.125 21.5 16.125ZM21.5 19.7086C21.0052 19.7086 20.583 19.8835 20.2332 20.2332C19.8835 20.583 19.7086 21.0052 19.7086 21.5C19.7086 21.9948 19.8835 22.417 20.2332 22.7668C20.583 23.1165 21.0052 23.2914 21.5 23.2914C21.9948 23.2914 22.417 23.1165 22.7668 22.7668C23.1165 22.417 23.2914 21.9948 23.2914 21.5C23.2914 21.0052 23.1165 20.583 22.7668 20.2332C22.417 19.8835 21.9948 19.7086 21.5 19.7086Z" fill="#40D7E1" />
                        </svg>
                    </OverviewCardTargetSale>
                </div>
            </div>
        </section>
    )
}

export default Overview