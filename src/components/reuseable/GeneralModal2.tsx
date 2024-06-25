import React, { ReactNode, MouseEvent } from "react";
import Image from "next/image";

interface GeneralModalProps2 {
    close: (e: MouseEvent<HTMLDivElement>) => void;
    handleClose: (e: MouseEvent<HTMLDivElement>) => void;
    content: React.ReactNode;
    heading: string;
}

const GeneralModal2: React.FC<GeneralModalProps2> = ({ handleClose, content, heading,close }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-[500] modal-overlay w-full overflow-y-scroll backdrop-blur`}
        >
            <div
                onClick={handleClose}
                className={`modal bg-black z-[500]  bg-opacity-40 fixed inset-0 flex items-center justify-center`}
            >
                <div
                    className={`modal-content z-[2000] bg-[#252731] lg:w-[44%] py-6 lg:overflow-hidden px-12 shadow-xl shadow-[#1A1C24] w-full rounded-3xl overflow-y-auto transform transition-transform duration-300 ease-in-out bounce`}
                >
                    <div className="flex justify-between  p-6 items-center">
                        <h2 className=" capitalize text-white lg:text-[20px] text-[18px] font-semibold">{heading}</h2>
                        <span
                            onClick={close}
                            className="text-xl cursor-pointer text-[var(--text-color)]"
                        >
                            <Image src={"/img/cancel.svg"} alt="" width={30} height={30}/>
                        </span>
                    </div>
                    <div className="text-white overflow-y-auto rounded-3xl z-[5000]">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralModal2;
