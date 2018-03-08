/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */

import IConnection from './models/connection';
import IConnOpts from './models/connection-options';

import Utils from './utils/file-ops';

import Logger from './logger/log';
import * as Path from 'path';

const defaultOptions: IConnOpts = {
	createMissing: true,
	enableLogs: false,
	overRideInvalidJSON: false,
};

class DiskDBAsync implements IConnection {

	private isPathValid: boolean = false;
	private isCollectionsValid: boolean = false;
	private connection: IConnection = {
		collections: [''],
		options: defaultOptions,
		path: '',
	};

	constructor(public path: string, public collections: Array<string>, public options: IConnOpts = defaultOptions) {
		// Validate params
		if (!this.path || typeof this.path !== 'string') {
			throw new Error('Invalid Path provided');
		}

		if (!this.collections || !(typeof this.collections === 'object'
			&& this.collections.length && this.collections.length > 0)) {
			throw new Error('Invalid Collections provided');
		}

		this.options = Object.assign(defaultOptions, this.options);

		this.connection.path = Path.resolve(this.path);
		this.connection.collections = this.collections;
		this.connection.options = this.options;

		Logger.enableLogs(this.options.enableLogs);
		Logger.logInfo('Init completed with below configuration.');
		Logger.logInfo(this.connection);
	}

	public connect(): Promise<any> {
		const finalResult: Promise<any> = new Promise((resolve, reject) => {
			Utils
				.existsPath(this.connection.path)
				.then(async (stats) => {
					this.isPathValid = true;
					Logger.logInfo('DB Path found.');
					await Utils.existsCollection(this.connection.path, this.connection.collections, this.connection.options);
					Logger.logInfo('done processing');
					resolve();
				}).catch((err) => {
					this.isPathValid = false;
					Logger.logError('DB path not found');
					reject('Invalid File System path provided');
				});
		});
		return finalResult;
	}

	public static passTests(): boolean {
		return true;
	}
}

module.exports = DiskDBAsync;