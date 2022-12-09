import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Axios from "axios";

const testApi = () => {
  const { data, loading, error, setData } = useFetch("todos");

  useEffect(() => {
    setData();
  });
  return (
    <div>
      {data.map((item, key) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </div>
  );
};

export default testApi;


