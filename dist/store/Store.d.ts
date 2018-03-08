import Collection from '../lib/collection.lib';
export default class Store {
    static setData(data: Collection): boolean;
    static getData(sendContents?: boolean): Array<Collection>;
}
