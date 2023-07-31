// import all from './generated';

import {
  Configuration,
  FetchAPI,
  IntegrationCustomerTokenServiceV1Api, PostV1CartsMineItemsRequest,
  PostV1IntegrationCustomerTokenRequest, QuoteCartItemRepositoryV1Api,
  QuoteCartManagementV1Api, QuoteDataCartInterface, QuoteDataCartItemInterface,
} from './../generated';

export * from './../generated';


import {
  wrapCall,
  wrapException,
  wrapResult,
  Result
} from './helper';

/**
 * Magento Client config
 */
export type Config = {
  // optional attribution id (see sales)
  basePath: string;
  // optional fetch override
  fetchApi?: FetchAPI;

  headers?: { [key: string]: string };
  username: string;
  password: string;
};

export class MagentoCustomerClient {

  public readonly integrationCustomerTokenServiceV1Api : IntegrationCustomerTokenServiceV1Api;
  private quoteCartManagementV1Api: QuoteCartManagementV1Api;
  private quoteCartItemRepositoryV1Api: QuoteCartItemRepositoryV1Api;

  constructor(opts: Config) {
    // check options
    if (!opts.username) {
      throw 'admin username config is required';
    }
    if (!opts.password) {
      throw 'admin password config is required';
    }

    if (!opts.basePath) {
      throw 'base path config is required';
    }

    const _fetch: any = opts.fetchApi || fetch;

    // create credentials
    const clientConfiguration = new Configuration({
      username: opts.username,
      password: opts.password,
      basePath: opts.basePath
    });

    const args = [clientConfiguration, _fetch];

    this.integrationCustomerTokenServiceV1Api = new IntegrationCustomerTokenServiceV1Api(...args);

    const clientConfiguration1 = new Configuration({
      username: opts.username,
      password: opts.password,
      basePath: opts.basePath,
      accessToken : this.generateAccessToken({
        postV1IntegrationAdminTokenRequest : {
          username: opts.username,
          password: opts.password
        }
      })
    });

    let args1 = [clientConfiguration1, _fetch];

    this.quoteCartManagementV1Api = new QuoteCartManagementV1Api(...args1);
    this.quoteCartItemRepositoryV1Api = new QuoteCartItemRepositoryV1Api(...args1);

  };

  async generateAccessToken(requestParameters: PostV1IntegrationCustomerTokenRequest): Promise<string> {
    return wrapCall('generateAccessToken', () =>
      this.integrationCustomerTokenServiceV1Api.postV1IntegrationCustomerToken(requestParameters)
    );
  }

  async createQuote(): Promise<number> {
    return wrapCall('createQuote', () =>
      this.quoteCartManagementV1Api.postV1CartsMine()
    );
  }

  async getQuote(): Promise<QuoteDataCartInterface> {
    return wrapCall('getQuote', () =>
      this.quoteCartManagementV1Api.getV1CartsMine()
    );
  }

  async addQuoteItems(requestParameters: PostV1CartsMineItemsRequest): Promise<QuoteDataCartItemInterface> {
    return wrapCall('addQuoteItems', () =>
      this.quoteCartItemRepositoryV1Api.postV1CartsMineItems(requestParameters)
    );
  }
}

