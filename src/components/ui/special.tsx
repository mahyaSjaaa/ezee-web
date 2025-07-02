import { poppins, poppinsSB } from "@/fonts/font";
import { Check, X } from "lucide-react";
import Link from "next/link";

type handleCard = {
  url: string;
  labelAatas: string;
  harga: string;
  d1: string;
  d2: string;
  d3: string;
  d4: string;
  d5: string;
  d6: string;
  d7: string;
  d8: string;
  d9: string;
  d10: string;
  d11: string;
  d12: string;
  statDom: boolean;
  statRev: boolean;
};

export default function Special({
  url,
  labelAatas,
  harga,
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9,
  d10,
  d11,
  d12,
  statDom,
  statRev,
}: handleCard) {
  return (
    <div className="w-[350px] max-w-full">
      <div className="group bg-gradient-to-r from-[#00DF82] to-[#2CC295] block rounded-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-5">
        <h3 className={`${poppinsSB.className} text-[20px] flex justify-center py-5 shadow-xl`}>
          Penawaran Spesial!
        </h3>

        <div className="bg-[#042222] hover:bg-[#00DF82] transition ease-in-out duration-200 hover:text-[#030F0F] text-white flex flex-col justify-between rounded-lg min-h-[500px] px-4 py-6 border border-[#2CC297]">

          <div className="flex flex-col text-center">
            <p className={`${poppinsSB.className} text-[16px] mb-1`}>{labelAatas}</p>
            <p className={`${poppins.className} text-[16px] mb-6`}>{harga}</p>

            <div className={`${poppins.className} text-left`}>
              {[d1, d2, d3, d4, d5].map((item, idx) => (
                <div key={idx} className="flex gap-3 mb-1">
                  <Check size={16} className="mt-[1.5px] flex-shrink-0"/>
                  <p className="text-[14px]">{item}</p>
                </div>
              ))}

              <div className="flex gap-3 mb-1">
                <Check size={16} className="mt-[1.5px] flex-shrink-0"/>
                <div>
                  <p className="text-[14px]">{d6}</p>
                  <p className="text-[14px]">{d7}</p>
                </div>
              </div>

              <div className="flex gap-3 mb-1">
                <Check size={16} className="mt-[1.5px] flex-shrink-0"/>
                <p className="text-[14px]">{d8}</p>
              </div>

              <div className="flex gap-3 mb-1">
                <Check size={16} className="mt-[1.5px] flex-shrink-0" />
                <p className="text-[14px]">{d11}</p>
              </div>

              <div className="flex gap-3 mb-1 items-start">
                {statRev ? (
                  <Check size={16} className="mt-[1.5px] flex-shrink-0" />
                ) : (
                  <X size={16} className="mt-[1.5px] flex-shrink-0" />
                )}
                <p className="text-[14px]">{d10}</p>
              </div>

              <div className="flex gap-3 mb-1 items-start">
                {statDom ? (
                  <Check size={16} className="mt-[1.5px] flex-shrink-0" />
                ) : (
                  <X size={16} className="mt-[1.5px] flex-shrink-0" />
                )}
                <p className="text-[14px]">{d9}</p>
              </div>

              {d12 && (
                <div className="flex gap-3 mb-1 items-start">
                  <Check size={16} className="mt-[1.5px] " />
                  <p className="text-[14px]">{d12}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Link href={url}>
              <button
                className={`
                  ${poppins.className}
                  flex justify-center px-8 py-2 rounded-lg
                  bg-gradient-to-r from-[#03624C] to-[#03624C] border border-[#2CC297] text-white text-[14px]
                  transition-all duration-300
                  group-hover:from-[#030F0F] group-hover:to-[#030F0F] group-hover:text-[#2CC295] hover:scale-107
                `}
              >
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
