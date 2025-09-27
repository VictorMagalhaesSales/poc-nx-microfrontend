import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'poc_remote',
  exposes: {
    './Routes': 'apps/poc_remote/src/app/entry.routes.ts',
  },
};

export default config;
