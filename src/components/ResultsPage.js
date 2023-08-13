import React from "react";
import { useSearchParams } from "react-router-dom";

function ResultsPage() {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("search_query"));

  return (
    <div className="flex justify-center align-middle mt-40 w-full">
      {searchParam.get("search_query")}
    </div>
  );
}

export default ResultsPage;
