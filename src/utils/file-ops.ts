/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */

import * as fs from 'fs';
import IConnOpts from '../models/connection-options';
import Tools from './tools';

export default class Utils {
	public static existsPath(path: string): Promise<any> {
		const promise = new Promise((resolve, reject) => {
			fs.stat(path, (err, stats) => {
				!err || (stats && stats.birthtime) ? resolve(stats) : reject(err);
			});
		});
		return promise;
	}

	public static async existsCollection(path: string, collections: Array<string>, options: IConnOpts): Promise<any> {
		const promise = new Promise(async (resolve, reject) => {
			await collections.forEach(async (file) => {
				const fPath = path + '/' + file + '.json';
				await fs.readFile(fPath, 'utf-8', async (err, contents) => {
					if (err) {
						if (options.createMissing) {
							// create file
							await fs.writeFileSync(fPath, '[]');
						}
					} else {
						if (!Tools.IsJsonString(contents)) {
							if (options.overRideInvalidJSON) {
								// update file contents
								await fs.writeFileSync(fPath, '[]');
							} else {
								// File contents are not valid
								// What should we do? Abort?
							}
						}
					}
				});
			});
			resolve();
		});

		return promise;
	}
}
