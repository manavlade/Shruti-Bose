"use client"

import t1 from "@/assets/t1 (1).jpg"
import t2 from "@/assets/t1 (2).jpg"
import t3 from "@/assets/t1 (3).jpg"
import Image from "next/image"
export default function Galleries() {
    return (
        <div className="bg-transparent py-20" >
             <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-taupe-800 text-center p-2">
                Gallery</h2>
            <div className=" w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >

                <Image src={t2} alt="Gallery" width={500} height={500} />
                <Image src={t1} alt="Gallery" width={500} height={500} />
                <Image src={t3} alt="Gallery" width={500} height={500} />
            </div>
        </div>
    )
}