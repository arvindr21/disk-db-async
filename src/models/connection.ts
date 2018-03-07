/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */

import IConnOpts from './connection-options';

export default interface IConnection {
	path: string;
	collections: Array<string>;
	options?: IConnOpts;
}