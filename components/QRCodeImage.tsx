'use client'
import { useState } from 'react'
import Image from 'next/image'

interface QRCodeImageProps {
  size?: number
  className?: string
}

export default function QRCodeImage({ size = 192, className = '' }: QRCodeImageProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="w-full h-full flex items-center justify-center">
      {!imageError ? (
        <Image 
          src="/assets/qr-code.png" 
          alt="UPI QR Code for Temple Donations"
          width={size}
          height={size}
          className={className}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="text-center flex flex-col items-center justify-center w-full h-full">
          <span className="text-[3rem]">📱</span>
          <p className="text-[13px] text-[#6B6560] mt-2" style={{fontFamily:'Inter,sans-serif'}}>UPI QR Code</p>
          <p className="text-[11px] text-[#6B6560]/60 px-4 mt-1" style={{fontFamily:'Inter,sans-serif'}}>Add qr-code.png to /public/assets/</p>
        </div>
      )}
    </div>
  )
}
