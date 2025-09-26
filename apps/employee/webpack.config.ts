import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

const dts = { 
    displayErrorInTerminal: true,
    generateTypes: true,
    consumeTypes: true
};

module.exports = (webpackCfg) => {
    return withModuleFederation(config, { dts })
    .then((apply) => apply(webpackCfg))
    .then((cfg) => {
        cfg.watchOptions = {
            ...cfg.watchOptions,
            ignored: ['**/node_modules/**', '**/@mf-types/**'],
        };
        return cfg;
    });
}
