import Header from "@/components/Header";
import Box from "@/components/Box";
import Layout from "@/components/Layout";
import { useJobQuery } from "@/graphql/generated/schema";
import { Job } from "@/types";

// import JobsData from "../componenets/jobs";
// import { Job01 } from "../componenets/job-data";
// import React, { useState } from 'react';

// import Header from "../componenets/Header";
const colors = ["blue", "green", "red", "gray", "yellow", "sky"];
// const colors = {blue:'blue',green:'green',red:'red',gray:'gray',yellow:'yellow',sky:'sky'};

export default function Jobs() {
  const { data, error, loading } = useJobQuery({
    errorPolicy: "ignore",
  });
  console.log(data || error);
  const jobs = data?.Job || [];

  return (
    <Layout pageTitle={"opportunities"}>
      {loading ? <h1>Loading...</h1> : []}

      {/* <div className="flex justify-center">
  <div className="bg-slate-500 w-3/4 h-72 max-w-6xl text-center text-cyan-300 relative  z-40 ">qsdqsdqsdsdqqsd </div>
</div> */}
      <section>
        <div className="py-16 mt-20 ">
          <div className="mx-auto px-6 max-w-6xl text-gray-500">
            <div className="text-center">
              <h2 className="text-3xl text-gray-950 dark:text-white font-semibold  animate-fade-down  animate-duration-[2000ms] ">
                OPPORTUNITÉS
              </h2>
              <p className="mt-6 text-gray-700 dark:text-gray-300">
                Explorer les postes récents.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {jobs.map((e, idx) => {
                return (
                  <Box
                    location={e.location}
                    title={e.jobTitle}
                    jobDescription={e.jobDescription}
                    color={colors[Math.floor(Math.random() * colors.length)]}
                  />

                  // <h1>{e.jobTitle}</h1>
                );
              })}
              {/* <Box location="Marseille"  title={"CHEF DE PROJET AMO H/F – CONDUITE D’OPÉRATIONS |PROPS$$|"} jobDescription={<Job01 />} color={colors.blue}/> */}
              {/* {jobs.map((e)=>{
console.log(e);
               })} */}
              {/* <Box location={data.jobB.location} title={data.jobB.location} jobDescription={data.jobB.location} color={colors[Math.floor(Math.random() * colors.length)]} />
                <Box location={data.jobB.location} title={data.jobB.location} jobDescription={data.jobB.location} color={colors[Math.floor(Math.random() * colors.length)]} />
                <Box location={data.jobB.location} title={data.jobB.location} jobDescription={data.jobB.location} color={colors[Math.floor(Math.random() * colors.length)]} />
                <Box location={data.jobB.location} title={data.jobB.location} jobDescription={data.jobB.location} color={colors[Math.floor(Math.random() * colors.length)]} />
                <Box location={data.jobB.location} title={data.jobB.location} jobDescription={data.jobB.location} color={colors[Math.floor(Math.random() * colors.length)]} />
                <Box location={data.jobB.location} title={data.jobB.location} jobDescription={data.jobB.location} color={colors[Math.floor(Math.random() * colors.length)]} />
               */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
