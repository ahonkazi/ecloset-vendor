import React from 'react'

export const SelectField = () => {
    return (
        <button className='flex items-center gap-2 border border-DarkGray text-DarkGray font-Roboto px-2 py-2 rounded'>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5544 15.0096H2.72238C1.27213 15.0096 0 13.6944 0 12.1918V3.88814C0 2.39273 1.20463 1.13043 2.63144 1.13043C2.72239 1.13551 2.80808 1.17832 2.8708 1.25002C2.93352 1.32172 2.96849 1.41684 2.96849 1.51574C2.96849 1.61463 2.93352 1.70975 2.8708 1.78145C2.80808 1.85316 2.72239 1.89597 2.63144 1.90104C1.58993 1.90104 0.710593 2.81112 0.710593 3.88814V12.1918C0.710593 13.2638 1.66867 14.239 2.72238 14.239H12.5544C13.6259 14.239 14.2034 13.1844 14.2034 12.1918V3.88814C14.2034 2.77345 13.4188 1.90104 12.4185 1.90104C12.3298 1.89246 12.2474 1.84816 12.1873 1.77685C12.1272 1.70554 12.0939 1.61239 12.0939 1.51574C12.0939 1.41909 12.1272 1.32594 12.1873 1.25463C12.2474 1.18332 12.3298 1.13901 12.4185 1.13043C13.8162 1.13043 14.9121 2.34183 14.9121 3.88814V12.1918C14.9112 13.7992 13.8987 15.0096 12.5544 15.0096Z" fill="#6B6B6B" />
                <path d="M4.26123 6.52771H3.19534C3.10557 6.52062 3.0216 6.4769 2.9603 6.40532C2.89901 6.33375 2.86494 6.23963 2.86494 6.14189C2.86494 6.04415 2.89901 5.95004 2.9603 5.87846C3.0216 5.80689 3.10557 5.76316 3.19534 5.75608H4.26123C4.351 5.76316 4.43498 5.80689 4.49627 5.87846C4.55757 5.95004 4.59164 6.04415 4.59164 6.14189C4.59164 6.23963 4.55757 6.33375 4.49627 6.40532C4.43498 6.4769 4.351 6.52062 4.26123 6.52771ZM7.81232 6.52771H6.74643C6.65666 6.52062 6.57269 6.4769 6.51139 6.40532C6.4501 6.33375 6.41602 6.23963 6.41602 6.14189C6.41602 6.04415 6.4501 5.95004 6.51139 5.87846C6.57269 5.80689 6.65666 5.76316 6.74643 5.75608H7.81138C7.90561 5.75594 7.99603 5.79646 8.06275 5.86872C8.12947 5.94098 8.16702 6.03906 8.16715 6.14138C8.16727 6.24371 8.12996 6.3419 8.06342 6.41434C7.99687 6.48679 7.90655 6.52757 7.81232 6.52771ZM11.7178 6.52771H10.6509C10.5612 6.52062 10.4772 6.4769 10.4159 6.40532C10.3546 6.33375 10.3205 6.23963 10.3205 6.14189C10.3205 6.04415 10.3546 5.95004 10.4159 5.87846C10.4772 5.80689 10.5612 5.76316 10.6509 5.75608H11.7178C11.812 5.75608 11.9024 5.79673 11.969 5.86908C12.0356 5.94143 12.0731 6.03957 12.0731 6.14189C12.0731 6.24422 12.0356 6.34235 11.969 6.4147C11.9024 6.48706 11.812 6.52771 11.7178 6.52771ZM4.26123 8.84056H3.19534C3.10111 8.84056 3.01074 8.79991 2.94411 8.72756C2.87748 8.6552 2.84005 8.55707 2.84005 8.45475C2.84005 8.35242 2.87748 8.25429 2.94411 8.18193C3.01074 8.10958 3.10111 8.06893 3.19534 8.06893H4.26123C4.351 8.07602 4.43498 8.11974 4.49627 8.19132C4.55757 8.26289 4.59164 8.35701 4.59164 8.45475C4.59164 8.55248 4.55757 8.6466 4.49627 8.71818C4.43498 8.78975 4.351 8.83347 4.26123 8.84056ZM7.81232 8.84056H6.74643C6.6522 8.84056 6.56183 8.79991 6.4952 8.72756C6.42857 8.6552 6.39113 8.55707 6.39113 8.45475C6.39113 8.35242 6.42857 8.25429 6.4952 8.18193C6.56183 8.10958 6.6522 8.06893 6.74643 8.06893H7.81138C7.90561 8.0688 7.99603 8.10931 8.06275 8.18157C8.12947 8.25383 8.16702 8.35191 8.16715 8.45424C8.16727 8.55656 8.12996 8.65475 8.06342 8.7272C7.99687 8.79965 7.90655 8.84043 7.81232 8.84056ZM11.7178 8.84056H10.6509C10.5567 8.84056 10.4663 8.79991 10.3997 8.72756C10.3331 8.6552 10.2956 8.55707 10.2956 8.45475C10.2956 8.35242 10.3331 8.25429 10.3997 8.18193C10.4663 8.10958 10.5567 8.06893 10.6509 8.06893H11.7178C11.812 8.06893 11.9024 8.10958 11.969 8.18193C12.0356 8.25429 12.0731 8.35242 12.0731 8.45475C12.0731 8.55707 12.0356 8.6552 11.969 8.72756C11.9024 8.79991 11.812 8.84056 11.7178 8.84056ZM4.26123 11.1534H3.19534C3.10111 11.1534 3.01074 11.1128 2.94411 11.0404C2.87748 10.9681 2.84005 10.8699 2.84005 10.7676C2.84005 10.6653 2.87748 10.5671 2.94411 10.4948C3.01074 10.4224 3.10111 10.3818 3.19534 10.3818H4.26123C4.351 10.3889 4.43498 10.4326 4.49627 10.5042C4.55757 10.5757 4.59164 10.6699 4.59164 10.7676C4.59164 10.8653 4.55757 10.9595 4.49627 11.031C4.43498 11.1026 4.351 11.1463 4.26123 11.1534ZM7.81232 11.1534H6.74643C6.69977 11.1534 6.65357 11.1434 6.61046 11.124C6.56736 11.1047 6.52819 11.0762 6.4952 11.0404C6.46221 11.0046 6.43604 10.9621 6.41818 10.9152C6.40032 10.8684 6.39113 10.8183 6.39113 10.7676C6.39113 10.7169 6.40032 10.6668 6.41818 10.62C6.43604 10.5731 6.46221 10.5306 6.4952 10.4948C6.52819 10.459 6.56736 10.4305 6.61046 10.4112C6.65357 10.3918 6.69977 10.3818 6.74643 10.3818H7.81138C7.90561 10.3816 7.99603 10.4222 8.06275 10.4944C8.12947 10.5667 8.16702 10.6648 8.16715 10.7671C8.16727 10.8694 8.12996 10.9676 8.06342 11.0401C7.99687 11.1125 7.90655 11.1533 7.81232 11.1534ZM11.7178 11.1534H10.6509C10.5567 11.1534 10.4663 11.1128 10.3997 11.0404C10.3331 10.9681 10.2956 10.8699 10.2956 10.7676C10.2956 10.6653 10.3331 10.5671 10.3997 10.4948C10.4663 10.4224 10.5567 10.3818 10.6509 10.3818H11.7178C11.812 10.3818 11.9024 10.4224 11.969 10.4948C12.0356 10.5671 12.0731 10.6653 12.0731 10.7676C12.0731 10.8699 12.0356 10.9681 11.969 11.0404C11.9024 11.1128 11.812 11.1534 11.7178 11.1534ZM12.0721 1.90098H2.48569C2.39158 1.90098 2.30133 1.86039 2.23479 1.78813C2.16824 1.71587 2.13086 1.61787 2.13086 1.51568C2.13086 1.41349 2.16824 1.31548 2.23479 1.24322C2.30133 1.17097 2.39158 1.13037 2.48569 1.13037H12.0721C12.1662 1.13037 12.2565 1.17097 12.323 1.24322C12.3896 1.31548 12.427 1.41349 12.427 1.51568C12.427 1.61787 12.3896 1.71587 12.323 1.78813C12.2565 1.86039 12.1662 1.90098 12.0721 1.90098Z" fill="#6B6B6B" />
                <path d="M4.26155 3.05746C4.16732 3.05746 4.07695 3.01681 4.01031 2.94445C3.94368 2.8721 3.90625 2.77397 3.90625 2.67164V0.358788C3.91278 0.261305 3.95304 0.170119 4.01895 0.103559C4.08487 0.0369988 4.17154 0 4.26155 0C4.35155 0 4.43823 0.0369988 4.50414 0.103559C4.57005 0.170119 4.61032 0.261305 4.61684 0.358788V2.67164C4.61684 2.88542 4.45748 3.05746 4.26155 3.05746ZM10.6513 3.05746C10.5572 3.05719 10.4671 3.01642 10.4006 2.94409C10.3342 2.87177 10.2969 2.77379 10.2969 2.67164V0.358788C10.3034 0.261305 10.3437 0.170119 10.4096 0.103559C10.4755 0.0369988 10.5622 0 10.6522 0C10.7422 0 10.8289 0.0369988 10.8948 0.103559C10.9607 0.170119 11.001 0.261305 11.0075 0.358788V2.67164C11.0075 2.88542 10.8491 3.05746 10.6513 3.05746Z" fill="#6B6B6B" />
            </svg>
            <p className=' text-sm'>This year 2023</p>
            <span><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.50293 1L4.00293 4L7.50293 1" stroke="#6B6B6B" stroke-linecap="round" />
            </svg></span>
        </button>
    )
}