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
          <svg className="w-10 h-10 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"/></svg>
          <p className="text-[13px] text-[#6B6560] mt-2" style={{fontFamily:'Inter,sans-serif'}}>UPI QR Code</p>
          <p className="text-[11px] text-[#6B6560]/60 px-4 mt-1" style={{fontFamily:'Inter,sans-serif'}}>Add qr-code.png to /public/assets/</p>
        </div>
      )}
    </div>
  )
}
