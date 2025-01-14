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

  const workTitleValue = data[0].title;
  const playTitleValue = data[1].title;
  const studyTitleValue = data[2].title;
  const exerciseTitleValue = data[3].title;
  const socialTitleValue = data[4].title;
  const selfcareTitleValue = data[5].title;

  const workDailyCurrentTime = data[0].timeframes.daily.current;
  const playDailyCurrentTime = data[1].timeframes.daily.current;
  const studyDailyCurrentTime = data[2].timeframes.daily.current;
  const exerciseDailyCurrentTime = data[3].timeframes.daily.current;
  const socialDailyCurrentTime = data[4].timeframes.daily.current;
  const selfcareDailyCurrentTime = data[5].timeframes.daily.current;

  const workWeeklyCurrentTime = data[0].timeframes.weekly.current;
  const playWeeklyCurrentTime = data[1].timeframes.weekly.current;
  const studyWeeklyCurrentTime = data[2].timeframes.weekly.current;
  const exerciseWeeklyCurrentTime = data[3].timeframes.weekly.current;
  const socialWeeklyCurrentTime = data[4].timeframes.weekly.current;
  const selfcareWeeklyCurrentTime = data[5].timeframes.weekly.current;

  const workMonthlyCurrentTime = data[0].timeframes.monthly.current;
  const playMonthlyCurrentTime = data[1].timeframes.monthly.current;
  const studyMonthlyCurrentTime = data[2].timeframes.monthly.current;
  const exerciseMonthlyCurrentTime = data[3].timeframes.monthly.current;
  const socialMonthlyCurrentTime = data[4].timeframes.monthly.current;
  const selfcareMonthlyCurrentTime = data[5].timeframes.monthly.current;

  const workDailyPreviousTime = data[0].timeframes.daily.previous;
  const playDailyPreviousTime = data[1].timeframes.daily.previous;
  const studyDailyPreviousTime = data[2].timeframes.daily.previous;
  const exerciseDailyPreviousTime = data[3].timeframes.daily.previous;
  const socialDailyPreviousTime = data[4].timeframes.daily.previous;
  const selfcareDailyPreviousTime = data[5].timeframes.daily.previous;

  const workWeeklyPreviousTime = data[0].timeframes.weekly.previous;
  const playWeeklyPreviousTime = data[1].timeframes.weekly.previous;
  const studyWeeklyPreviousTime = data[2].timeframes.weekly.previous;
  const exerciseWeeklyPreviousTime = data[3].timeframes.weekly.previous;
  const socialWeeklyPreviousTime = data[4].timeframes.weekly.previous;
  const selfcareWeeklyPreviousTime = data[5].timeframes.weekly.previous;

  const workMonthlyPreviousTime = data[0].timeframes.monthly.previous;
  const playMonthlyPreviousTime = data[1].timeframes.monthly.previous;
  const studyMonthlyPreviousTime = data[2].timeframes.monthly.previous;
  const exerciseMonthlyPreviousTime = data[3].timeframes.monthly.previous;
  const socialMonthlyPreviousTime = data[4].timeframes.monthly.previous;
  const selfcareMonthlyPreviousTime = data[5].timeframes.monthly.previous;



  const titles = [
    workTitleValue,
    playTitleValue,
    studyTitleValue,
    exerciseTitleValue,
    socialTitleValue,
    selfcareTitleValue
  ]

  console.log(data[0].title);
  return (
    <div className="bg-veryDarkBlue font-rubik xl:h-screen">
      <div className="xl:w-full xl:h-full xl:flex xl:justify-center xl:items-center">
        <Dashboard workTitle={titles[0]} 
        playTitle={titles[1]}
        studyTitle={titles[2]}
        exerciseTitle={titles[3]}
        socialTitle={titles[4]}
        selfcareTitle={titles[5]}
        workDailyCurrentTime={workDailyCurrentTime}
        playDailyCurrentTime={playDailyCurrentTime}
        studyDailyCurrentTime={studyDailyCurrentTime}
        exerciseDailyCurrentTime={exerciseDailyCurrentTime}
        socialDailyCurrentTime={socialDailyCurrentTime}
        selfcareDailyCurrentTime={selfcareDailyCurrentTime}
        workWeeklyCurrentTime={workWeeklyCurrentTime}
        playWeeklyCurrentTime={playWeeklyCurrentTime}
        studyWeeklyCurrentTime={studyWeeklyCurrentTime}
        exerciseWeeklyCurrentTime={exerciseWeeklyCurrentTime}
        socialWeeklyCurrentTime={socialWeeklyCurrentTime}
        selfcareWeeklyCurrentTime={selfcareWeeklyCurrentTime}
        workMonthlyCurrentTime={workMonthlyCurrentTime}
        playMonthlyCurrentTime={playMonthlyCurrentTime}
        studyMonthlyCurrentTime={studyMonthlyCurrentTime}
        exerciseMonthlyCurrentTime={exerciseMonthlyCurrentTime}
        socialMonthlyCurrentTime={socialMonthlyCurrentTime}
        selfcareMonthlyCurrentTime={selfcareMonthlyCurrentTime}
        workDailyPreviousTime = {workDailyPreviousTime}
        playDailyPreviousTime = {playDailyPreviousTime}
        studyDailyPreviousTime = {studyDailyPreviousTime}
        exerciseDailyPreviousTime = {exerciseDailyPreviousTime}
        socialDailyPreviousTime = {socialDailyPreviousTime}
        selfcareDailyPreviousTime = {selfcareDailyPreviousTime}
        workWeeklyPreviousTime = {workWeeklyPreviousTime}
        playWeeklyPreviousTime = {playWeeklyPreviousTime}
        studyWeeklyPreviousTime = {studyWeeklyPreviousTime}
        exerciseWeeklyPreviousTime = {exerciseWeeklyPreviousTime}
        socialWeeklyPreviousTime = {socialWeeklyPreviousTime}
        selfcareWeeklyPreviousTime = {selfcareWeeklyPreviousTime}
        workMonthlyPreviousTime = {workMonthlyPreviousTime}
        playMonthlyPreviousTime = {playMonthlyPreviousTime}
        studyMonthlyPreviousTime = {studyMonthlyPreviousTime}
        exerciseMonthlyPreviousTime = {exerciseMonthlyPreviousTime}
        socialMonthlyPreviousTime = {socialMonthlyPreviousTime}
        selfcareMonthlyPreviousTime = {selfcareMonthlyPreviousTime}
        data={data}></Dashboard>
      </div>
    </div>
  );
}