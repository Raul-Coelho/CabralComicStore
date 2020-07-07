// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  marvelAPI: {
    baseAPI: `https://gateway.marvel.com/v1/public`,
    apiKey: '?format=comic&apikey=e45b8e2e1aad094a4a2115918c7473f8',
    hash: '4b82c9dd37100044f6f1e8859397eabb',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
