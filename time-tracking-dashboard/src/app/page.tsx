import Dashboard from "./dashboard/page";
import React from "react";
import { promises as fs } from 'fs'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');
  const data = JSON.parse(file);
  return (
    <div className="bg-veryDarkBlue">
      <div>
        <Dashboard data={data}></Dashboard>
      </div>
    </div>
  );
}
