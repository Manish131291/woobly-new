import { Button } from '../../../core-components/atoms/button/Button.component'
import React from 'react'

function Modal() {
    return (
        <div className=" grid place-items-center">
            <div className='w-[400px] h-[344px] rounded-xl gap-[32px] bg-static-background shadow-xl p-3 flex flex-col justify-between'>
                <div className='flex flex-row justify-between'>
                    <div className='w-[44px] h-[44px] grid items-center rounded-full border border-gray-200'>
                        <button className="rounded-full">Z</button>
                    </div>
                    <div className=" w-[44px] h-[44px] grid items-center rounded-full border border-gray-200">
                        <button>&#x2715;</button>
                    </div>
                </div>

                <div className="w-[368px] h-[156px] gap-[20px]">
                    <div className="w-[368px] h-[28px] text-500 text-[18px] text-neutral-900 text-left">Paid via</div>
                    <div className="w-[100%] h-[120px] gap-[12px]">

                        123455

                    </div>
                </div>


                <Button dataTestId="" btnType="primary" children="Confirm" classes="w-[100%] h-[44px] border-[1px] p-[10px] gap-[4px]" />
            </div>
        </div>
    )
}

export default Modal
