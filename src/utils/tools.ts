/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */

export default class Tools {
	public static IsJsonString(jsonStr: string): boolean {
		try {
			JSON.parse(jsonStr);
		} catch (e) {
			return false;
		}
		return true;
	}
}