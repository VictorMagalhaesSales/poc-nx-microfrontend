import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'poc-host',
  remotes: [
    [
      'poc-remote',
      'poc-remote@http://localhost:4202/mf-manifest.json',
    ],
  ],
};

export default config;
