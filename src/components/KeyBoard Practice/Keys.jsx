import React from "react";

export const Keys = ({ keyIcon, KeyTitle, spLKeys =false, spRKeys =false, space = false }) => {
  const hasIcon = !!keyIcon;

  return (
    <div className={`h-14 w-14 flex justify-center items-center  rounded-keys bg-keys cursor-pointer shadow-2xl shadow-neutral-100 transition duration-200 border-neutral-600 border-t hover:shadow-neutral-100/15  hover:scale-95 hover:border-r hover:border-b hover:border-t-0 hover:border-l-0  gap-1  ${ hasIcon ? "flex-col" : "" } ${ spLKeys ? "justify-start p-3 items-end w-25 flex-1" : "" } ${ spRKeys ? "justify-end p-3 items-end w-25 flex-1" : "" } ${ space ? "flex-1" : "" }`}>

      {hasIcon && <span className="text-keySize ">{keyIcon}</span> }
      <p className="text-keySize">{KeyTitle}</p>

      
    </div>
  );
};

