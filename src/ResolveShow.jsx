import React, { useEffect, useState } from "react";

const ResolveShow = ({ completedIds }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
  
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
    
  }, []);

  
  const filteredData = data.filter((item) =>
    completedIds.includes(item.id)
  );

  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div key={item.id} className="p-3 mb-2 rounded-sm border-0 bg-[#ccfddd]">
            <h2 className="text-black font-medium ">{item.title}</h2>
           <div className="flex justify-between">
             <p className="text-[#0B5E06] font-medium">Completed</p>
            <p>Click To Remove</p>
           </div>
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default ResolveShow;
