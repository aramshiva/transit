> [!NOTE]  
> This project is a WIP, the app is not fully developed and more will come in the near future.

# 🚝 Transit
This is an open-source tool to allow seattleites riding transit in the puget sound to have a nice all-in-one app to track their transit. This data is based off real time REST APIs provided by [Puget Sound](https://www.soundtransit.org/help-contacts/business-information/open-transit-data-otd) in a collabration with [OneBusAway](https://onebusaway.org/).

## APIs
For this project, I have made a Next.js API Route wrapper for all the OneBusAway REST APIs. It can be found in [`/src/pages/api/pugetsound`](https://github.com/aramshiva/transit/tree/main/src/pages/api/pugetsound), aswell as `README.md` documents for documentation.

## Stack
This app is written in [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). I deploy the project using [Vercel](https://vercel.com). I may add a [Expo](https://expo.dev/) mobile app for android and iOS at a later date.

## Self Hosting
Currently, Transit is not able to self-host to adapt to another city however I may add documentation later
