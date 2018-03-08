import IConnOpts from '../models/connection-options.model';
export default class Utils {
    static existsPath(path: string): Promise<any>;
    static existsCollection(path: string, collections: Array<string>, options: IConnOpts): Promise<any>;
}
