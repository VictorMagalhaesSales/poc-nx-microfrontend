import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'employee',
  remotes: [
    [
      'login',
      'http://localhost:4201/mf-manifest.json',
    ],
  ],
};

export default config;
