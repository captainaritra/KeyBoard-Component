import React from 'react'

export const SuperSPKeys = ({ top, down, size=14}) => {
  return (
    <div className={`h-14 w-${size} rounded-keys bg-keys cursor-pointer shadow-2xl shadow-neutral-100 transition duration-200 border-neutral-600 border-t hover:shadow-neutral-100/15 hover:scale-95 hover:border-r hover:border-b hover:border-t-0 hover:border-l-0`}>
      <div className="h-full w-full p-2 flex flex-col justify-between">
        <div className="text-keySize self-end">{top}</div>
        <div className="text-keySize self-start">{down}</div>
      </div>
    </div>
  )
}
