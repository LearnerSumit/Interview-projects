import React from "react";

function InformationData({ title, desc, aTag = false, aTagText, href }) {
  if (aTag === true) {
    return (
      <p className="flex items-center">
        <div className="w-[27%] lg:w-[15%]">
          <strong className=" font-bold text-light-header opacity-[.9]">
            {title}
          </strong>
        </div>
        <a href={href} className="text-primary text-sm mt-1">
          {aTagText}
        </a>
      </p>
    );
  }
  return (
    <p className="flex items-center">
      <div className="w-[27%] lg:w-[15%]">
        <strong className=" font-bold text-light-header opacity-[.9] whitespace-normal">
          {title}
        </strong>
      </div>
      <span className="text-sm mt-1 text-light-text">{desc}</span>
    </p>
  );
}

export default InformationData;
