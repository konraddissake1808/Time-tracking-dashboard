import Dashboard from "./dashboard/page";
import React from "react";
import { promises as fs } from 'fs'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');
  const data = JSON.parse(file);

  if (!data) {
    return {
      notFound: true,
    }
  }
  return (
    <div className="bg-veryDarkBlue font-rubik xl:h-screen">
      <div className="xl:w-full xl:h-full xl:flex xl:justify-center xl:items-center">
        <Dashboard data={data}></Dashboard>
      </div>
    </div>
  );
}
