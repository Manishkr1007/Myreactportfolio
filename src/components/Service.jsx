import React from "react";

const Service = ({ name, image, about, toolsHeader, tools }) => {
  return (
    <div className="text-center p-10 rounded-xl my-10 flex flex-col items-center">
      <img src={image} width={100} height={100} />
      <h3 className="font-burtons font-semibold text-xl pt-8 pb-2">{name}</h3>
      <p className="py-2 dark:text-teal-600">{about}</p>
      <h4 className="py-4 text-teal-600">{toolsHeader}</h4>
      <div className="flex flex-wrap justify-center">
        {tools.map((tool) => (
          <span className="text-xs py-2 px-2 m-2 dark:text-gray-100">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Service;
