import { poppins } from "@/fonts/font"
import Link from "next/link"

type PortoProps = {
  img_url: string
  desc1: string
  desc2: string
}

export default function Porto ({ img_url, desc1, desc2 }: PortoProps) {
    return(
        <div className="hover:scale-102 transition ease-in-out duration-200 bg-cover w-[340px] h-[252px] flex items-end rounded-lg shadow-xl"
         style={{ backgroundImage: `url(${img_url})` }}>
            <div className={`bg-[#2CC295]/75 w-[340px] h-[124px] rounded-lg ${poppins.className} text-white`}>
                <Link href={`https://${desc1}`} className="mx-5 mt-4 line-clamp-2">{desc1}</Link>
                <p className="text-[14px] mx-5 line-clamp-3">{desc2}</p>
            </div>
        </div>
    )
}