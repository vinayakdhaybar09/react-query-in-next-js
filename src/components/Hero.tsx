"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getData } from "@/app/page";

const Hero = ({ userData }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user-data"],
    queryFn: getData,
    initialData: userData,
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading ...!</p>;
  }

  if (error) {
    console.log(error);
    return <p>try again....</p>;
  }

  return (
    <>
      <div>
        {data.posts.map((item) => {
          return (
            <div key={item.id}>
              <h5>{item.id}</h5>
              <p>{item.title}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Hero;
