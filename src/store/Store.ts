/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */

import Collection from '../lib/collection.lib';

const storage: Array<Collection> = [];

export default class Store {

	public static setData(data: Collection): boolean {
		try {
			storage.push(data);
		} catch (ex) {

			return false;
		}
		return true;
	}

	public static getData(sendContents: boolean = false): Array<Collection> {
		if (sendContents) {
			return storage;
		} else {
			const stgClone: Array<Collection> = JSON.parse(JSON.stringify(storage));
			stgClone.forEach((c) => { delete c.contents; });
			return stgClone;
		}
	}
}