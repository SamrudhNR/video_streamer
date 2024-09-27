import React from 'react'

const Shimmer = () => {
    return (
        <div className="bg-white pt-3">
     
      <div className="flex flex-wrap justify-around   gap-[16px] mx-6">
        {Array(40)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="flex flex-wrap  p-4 h-[300px] w-[270px] shadow-lg
                bg-slate-50 rounded-md"
            >
              <div className="w-[240px] h-[140px] bg-slate-200  animate-pulse rounded-md"></div>
              <h3 className="w-full h-6 bg-slate-200 my-3 rounded-md"></h3>
              <h4 className="w-3/4 h-8 bg-slate-200 rounded-md"></h4>
              <div className="w-full mt-4 mb-2 h-8 grid grid-cols-3 gap-4">
                <div className="h-6 bg-slate-200 rounded col-span-1"></div>
                <div className="h-6 bg-slate-200 rounded col-span-1"></div>
                <div className="h-6 bg-slate-200 rounded col-span-1"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Shimmer