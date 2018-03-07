/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */

const TAG = 'disk-db-async';

import * as pino from 'pino';

const pretty = pino.pretty();
pretty.pipe(process.stdout);

const logger = pino({
	name: TAG,
	safe: true,
}, pretty);

let enabled: boolean = false;

export default class Logger {
	public static enableLogs(val) {
		enabled = val;
	}

	public static logInfo = (o) => {
		if (enabled) {
			logger.info(o);
		}
	}

	public static logWarn = (o) => {
		if (enabled) {
			logger.warn(o);
		}
	}

	public static logError = (o) => {
		if (enabled) {
			logger.error(o);
		}
	}
}