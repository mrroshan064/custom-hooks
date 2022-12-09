import React from "react";
import { useMutation } from "@tanstack/react-query";
import Axios from "axios";

const About = () => {
  const { data, isLoading, isError, refetch} = useMutation(["cat"], () => {
    return Axios.post({}).then(
      (res) => res.data.fact
    );
  });
  if (isError) {
    return <h1>Your page has been hacked</h1>;
  }

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={refetch}>update</button>
    </div>
  );
};

export default About;
