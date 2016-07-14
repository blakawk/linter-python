/** Plugin initialization needed by Atom editor and linter plugin. */

declare var atom;

import { PluginConfig } from './config';
import { PluginLinter } from './linter';
import { Logger } from './logger';

const logger:Logger = Logger.getInstance();

export = {
    config:PluginConfig,

    activate(state) {
        logger.log(">>> PACKAGE \"python-linter\" ACTIVATED <<<");
    },

    deactivate() {
        logger.log(">>> PACKAGE \"python-linter\" DEACTIVATED <<<");
    },

    provideLinter() {
        const linter = new PluginLinter();
        const provider = {
            name: 'Python Linter',
            grammarScopes: ['source.python'],
            scope: 'file',
            lintOnFly: true,
            lint: linter.lint,
        };
        return provider;
    }
}
