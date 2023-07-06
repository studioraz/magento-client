import {
    FetchParams,
    Middleware,
    ResponseContext,
} from './generated';

export class ApiMiddleware implements Middleware {
    public async pre(context: ResponseContext): Promise<FetchParams | void> {

        const accessToken = this.acquireToken();
        return {
            url: context.url,
            init: {
                ...context.init,
                headers: new Headers({
                    ...context.init.headers,
                    Authorization: `Bearer ${accessToken}`,
                }),
            },
        };
    }

    private acquireToken(): Promise<string> {
        return Promise.resolve().then(() => {
            return 'eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjEsInV0eXBpZCI6MiwiaWF0IjoxNjg4NjY3MDQ3LCJleHAiOjE2ODg2NzA2NDd9.sNb4hAyV4beAng8A7NN01McA25PvxQBNMkOj0FJY9h4';
        });
    }
}