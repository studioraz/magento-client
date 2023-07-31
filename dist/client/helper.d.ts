export declare function wrapCall<T>(tag: String, fn: () => Promise<T>): Promise<T>;
export declare function wrapException<T>(fn: () => Promise<T>): Promise<T>;
export interface Result<T> {
    content?: T;
    error?: {
        statusCode: number;
        message: string;
    };
}
export declare function wrapResult<T>(fn: () => Promise<T>): Promise<Result<T>>;
