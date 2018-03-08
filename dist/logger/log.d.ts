export default class Logger {
    static enableLogs(val: any): void;
    static logInfo: (o: any) => void;
    static logWarn: (o: any) => void;
    static logError: (o: any) => void;
}
