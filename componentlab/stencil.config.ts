import { Config } from '@stencil/core';



export const config: Config = {
  namespace: 'componentlab',
  globalStyle:'www/tailwind.css'
  outputTargets: [
    {
      type: 'www',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
