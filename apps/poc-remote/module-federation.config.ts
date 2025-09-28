import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'poc-remote',
  exposes: {
    './Routes': 'apps/poc-remote/src/app/entry.routes.ts',
  },
};

export default config;
