import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'poc-remote',
  exposes: {
    './Routes': 'apps/poc-remote/src/app/remote/remote.routes.ts',
    './RemoteComponent': 'apps/poc-remote/src/app/remote/remote-component.ts',
    './RemoteDialog': 'apps/poc-remote/src/app/remote/remote-dialog.ts'
  },
};

export default config;
