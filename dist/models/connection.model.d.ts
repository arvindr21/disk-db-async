import IConnOpts from './connection-options.model';
export default interface IConnection {
    path: string;
    collections: Array<string>;
    options?: IConnOpts;
}
