/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */ 

export default interface ICollection {
    path: string;
    name: Array<string>;
    contents: any
}