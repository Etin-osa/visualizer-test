// import config from '../firebase/config.js';
import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import config from '../firebase/config'

export default function Home () {
  React.useEffect(() => {
    const app = initializeApp(config);
    const analytics = getAnalytics(app);
    console.log({ app, analytics })
  })

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      ESTUDIO CACTUS VISUALIZER TEST
    </div>
  )
}