import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'login',
  exposes: {
    './Routes': 'apps/login/src/app/remote-entry/entry.routes.ts',
    './Types': 'apps/login/src/app/remote-entry/types.ts',
  },
};

export default config;
