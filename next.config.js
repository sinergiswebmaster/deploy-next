// const {
//     PHASE_DEVELOPMENT_SERVER,
//     PHASE_PRODUCTION_BUILD,
//   } = require('next/constants')
  
//   // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
//   module.exports = phase => {
//     // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
//     const isDev = phase === PHASE_DEVELOPMENT_SERVER
//     // when `next build` or `npm run build` is used
//     const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
//     // when `next build` or `npm run build` is used
//     const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
//     console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  
//     const env = {
//       BASE_URL_API: (() => {
//         if (isDev) return 'https://apivalidador.test'
//         if (isProd) {
//           return 'https://hcp.sinergis.mx'
//         }
//         if (isStaging) return 'http://localhost:11639'
//         return 'BASE_URL_API:not (isDev,isProd && !isStaging,isProd && isStaging)'
//       })(),
//       CLIENT_SECRET:(() => {
//         if (isDev) return 'dsSeApRBEPUdESwDjCp4b288rGTEiGSge4bwYu9m'
//         if (isProd) {
//           return 'LtaI22GWLR7IROvGvBplYHEd0S6ZSKmtH6km2Zp5'
//         }
//         if (isStaging) return 'http://localhost:11639'
//         return 'CLIENT_SECRET:not (isDev,isProd && !isStaging,isProd && isStaging)'
//       })(),
//       CLIENT_ID:(() => {
//         if (isDev) return 'e6d77c60-47c5-11ea-b9da-afe5004c791b'
//         if (isProd) {
//           return '5012ae40-4793-11ea-bf73-576012e6aa84'
//         }
//         if (isStaging) return 'http://localhost:11639'
//         return 'CLIENT_SECRET:not (isDev,isProd && !isStaging,isProd && isStaging)'
//       })(),
//     }
  
//     // next.config.js object
//     return {
//       env,
//     }
//   }