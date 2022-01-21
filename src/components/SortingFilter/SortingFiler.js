import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useStateParams } from "../../ParamsContext";

function SortingFiler() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { params, setParams } = useStateParams();

  useEffect(() => {
    setSearchParams(params);
  }, [params, setSearchParams]);

  const changeSorting = (param) => {
    if (param === "") {
      setSearchParams({});
      setParams({});
    } else {
      setSearchParams({ sort: param });
      setParams({ sort: param });
    }
  };
  return (
    <select
      className="form-select mt-3"
      aria-label="Default"
      defaultValue={searchParams}
      onChange={(event) => {
        let filter = event.target.value;
        changeSorting(filter);
      }}
    >
      <option value="">Default</option>
      <option value="desc">Ascendente</option>
      <option value="asc">Descendente</option>
    </select>
  );
}

export default SortingFiler;
