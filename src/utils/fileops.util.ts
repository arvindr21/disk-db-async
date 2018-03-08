/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */

import Logger from '../logger/log';
import * as fs from 'async-file';

import IConnOpts from '../models/connection-options.model';
import Tools from './tools.util';
import Store from '../store/Store';

import Collection from '../lib/collection.lib';

import { EMPTY_CONTENT } from '../Globals';

export default class Utils {
	public static existsPath(path: string): Promise<any> {
		const promise = new Promise(async (resolve, reject) => {
			try {
				const stats = await fs.stat(path);
				if (stats && stats.birthtime) {
					resolve(stats);
				} else {
					reject(stats);
				}
			} catch (err) {
				reject(err);
			}
		});
		return promise;
	}

	public static async existsCollection(path: string, collections: Array<string>, options: IConnOpts): Promise<any> {
		const promise = new Promise(async (resolve, reject) => {
			await Promise.all(collections.map(async (file) => {
				const fPath = path + '/' + file + '.db';
				let contents = EMPTY_CONTENT;
				try {
					contents = await fs.readFile(fPath, 'utf8');
					if (!Tools.IsJsonString(contents)) {
						if (options.overRideInvalidJSON) {
							// update file contents
							await fs.writeFile(fPath, EMPTY_CONTENT);

						} else {
							// File contents are not valid
							// What should we do? Abort?
							throw new Error(fPath + ' has invalid JSON content');
						}
					}

					const coll: Collection = new Collection(
						fPath,
						file,
						contents,
						true,
					);
					Store.setData(coll);

				} catch (err) {
					Logger.logError(err);
					if (err) {
						if (options.createMissing) {
							// create file
							contents = EMPTY_CONTENT;
							await fs.writeFile(fPath, EMPTY_CONTENT);

							const coll: Collection = new Collection(
								fPath,
								file,
								contents,
								false,
							);
							Store.setData(coll);
						}
					}
				}
			}));
			resolve();
		});

		return promise;
	}
}
