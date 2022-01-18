import React from 'react';
import { useSearchParams } from "react-router-dom";

function SortingFiler(){
  let [searchParams, setSearchParams] = useSearchParams();
  const changeSorting = (param) => {
    if(param === "")
      setSearchParams({});
    else
      setSearchParams({sort: param});
  }
  return(
    <select 
      className="form-select mt-3" 
      aria-label="Default" 
      defaultValue={searchParams}
      onChange={event => {
        let filter = event.target.value;
        changeSorting(filter);
      }}
      >
      <option value="" >Default</option>
      <option value="desc">De mayor a menos</option>
      <option value="asc">De menor a mayor</option>
    </select>
  )
}

export default SortingFiler;
