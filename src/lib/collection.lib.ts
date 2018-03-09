/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */

import { join } from 'path';
import { v4 } from 'uuid';

import ICollection from '../models/collection.model';

const UUID = () => v4().replace(/-/g, '');

export default class Collection implements ICollection {
	constructor(public path: string, public name: string, public contents: string, public existing: boolean) { }

	public find(query: any): any {
		return query;
	}
}