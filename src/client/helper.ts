// helper
export async function wrapCall<T>(tag: String, fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (e) {
    throw e.json ? await e.json() : e;
  }
}

export async function wrapException<T>(fn: () => Promise<T>): Promise<T> {
  return wrapCall('wrapped exception', fn);
}


export interface Result<T> {
  content?: T;
  error?: {
    statusCode: number;
    message: string;
  };
}

export async function wrapResult<T>(fn: () => Promise<T>): Promise<Result<T>> {
  try {
    const content = await fn();
    return {
      content,
    };
  } catch (e) {
    const statusCode = e.status ? e.status : 500;
    const message = e.json ? await e.json() : e;
    return {
      error: {
        statusCode,
        message,
      },
    };
  }
}