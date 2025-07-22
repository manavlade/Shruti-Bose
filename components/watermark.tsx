import Image from "next/image"

export function Watermark() {
  return (
    <div className="fixed top-6 left-6 z-40 opacity-25 pointer-events-none">
      <Image src="/images/watermark.png" alt="SB Watermark" width={60} height={30} className="object-contain" />
    </div>
  )
}
