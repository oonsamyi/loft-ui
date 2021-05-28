/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface IAddClientRequest {
  phone: string;
  name?: string | null;
}

export interface IBookingResult {
  /** @format date-time */
  from?: string;

  /** @format date-time */
  to?: string;

  /** @format double */
  price?: number;
  clientName?: string | null;
  title?: string | null;

  /** @format int32 */
  id?: number;
  description?: string | null;
  image?: string | null;
}

export interface IBookingViewModel {
  /** @format date-time */
  from?: string;

  /** @format date-time */
  to?: string;
}

export interface ICreateBooking {
  /** @format int32 */
  objectId?: number;

  /** @format int32 */
  clientId?: number;

  /** @format date-time */
  from?: string;

  /** @format date-time */
  to?: string;
}

export interface ICreateBookingResult {
  isSuccess?: boolean;

  /** @format double */
  price?: number;
  errorText?: string | null;
}

export interface IDateFilter {
  /** @format date-time */
  from?: string;

  /** @format date-time */
  to?: string;
}

export interface IEventType {
  /** @format int32 */
  id?: number;
  name?: string | null;
  objects?: IRealtyObject[] | null;
}

export interface IObjectImage {
  /** @format int32 */
  id?: number;
  url?: string | null;

  /** @format int32 */
  priority?: number;

  /** @format int32 */
  realtyObjectId?: number;
}

export interface IObjectsFilter {
  square?: ISquareFilter[] | null;
  price?: IPriceFilter;
  date?: IDateFilter;
  regions?: string[] | null;
}

/**
 * @format int32
 */
export type IObjectType = 1;

export interface IPriceFilter {
  /** @format double */
  from?: number | null;

  /** @format double */
  to?: number | null;
}

export interface IRealtyBooking {
  /** @format int32 */
  id?: number;

  /** @format int32 */
  objectId?: number;

  /** @format int32 */
  clientId?: number;

  /** @format date-time */
  from?: string;

  /** @format date-time */
  to?: string;

  /** @format double */
  price?: number;
  client?: IRealtyClient;
  object?: IRealtyObject;
}

export interface IRealtyClient {
  /** @format int32 */
  id?: number;
  name?: string | null;
  phone?: string | null;
  bookings?: IRealtyBooking[] | null;
}

export interface IRealtyObject {
  /** @format int32 */
  id?: number;
  description?: string | null;
  title?: string | null;
  objectType?: IObjectType;
  availableEventTypes?: IEventType[] | null;

  /** @format int32 */
  rating?: number;
  region?: string | null;

  /** @format double */
  totalSpace?: number;

  /** @format int32 */
  capacity?: number;
  address?: string | null;

  /** @format double */
  lat?: number | null;

  /** @format double */
  lon?: number | null;
  images?: IObjectImage[] | null;
  bookings?: IRealtyBooking[] | null;
  prices?: IRealtyPrice[] | null;
  services?: IService[] | null;
}

export interface IRealtyObjectViewModel {
  /** @format int32 */
  id?: number;
  description?: string | null;
  title?: string | null;
  objectType?: IObjectType;
  availableEventTypes?: string[] | null;

  /** @format int32 */
  rating?: number;
  region?: string | null;

  /** @format double */
  totalSpace?: number;

  /** @format int32 */
  capacity?: number;
  address?: string | null;

  /** @format double */
  lat?: number | null;

  /** @format double */
  lon?: number | null;
  images?: string[] | null;
  bookings?: IBookingViewModel[] | null;

  /** @format double */
  price?: number;
  services?: string[] | null;
}

export interface IRealtyPrice {
  /** @format int32 */
  id?: number;

  /** @format int32 */
  objectId?: number;

  /** @format double */
  amount?: number;

  /** @format int32 */
  day?: number | null;
  startTime?: ITimeSpan;
  endTime?: ITimeSpan;
  object?: IRealtyObject;
}

export interface IService {
  /** @format int32 */
  id?: number;
  title?: string | null;
  objects?: IRealtyObject[] | null;
}

export interface ISquareFilter {
  /** @format double */
  from?: number | null;

  /** @format double */
  to?: number | null;
}

export interface ITimeSpan {
  /** @format int64 */
  ticks?: number;

  /** @format int32 */
  days?: number;

  /** @format int32 */
  hours?: number;

  /** @format int32 */
  milliseconds?: number;

  /** @format int32 */
  minutes?: number;

  /** @format int32 */
  seconds?: number;

  /** @format double */
  totalDays?: number;

  /** @format double */
  totalHours?: number;

  /** @format double */
  totalMilliseconds?: number;

  /** @format double */
  totalMinutes?: number;

  /** @format double */
  totalSeconds?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title HourlyRate
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Booking
     * @name BookingDetail
     * @request GET:/api/Booking/{id}
     */
    bookingDetail: (id: number, params: RequestParams = {}) =>
      this.request<IBookingResult[], any>({
        path: `/api/Booking/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingDelete
     * @request DELETE:/api/Booking/{id}
     */
    bookingDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Booking/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingCreate
     * @request POST:/api/Booking
     */
    bookingCreate: (data: ICreateBooking, params: RequestParams = {}) =>
      this.request<ICreateBookingResult, any>({
        path: `/api/Booking`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ClientList
     * @request GET:/api/Client
     */
    clientList: (params: RequestParams = {}) =>
      this.request<IRealtyClient, any>({
        path: `/api/Client`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ClientCreate
     * @request POST:/api/Client
     */
    clientCreate: (data: IAddClientRequest, params: RequestParams = {}) =>
      this.request<IRealtyClient, any>({
        path: `/api/Client`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Object
     * @name ObjectGetAllList
     * @request GET:/api/Object/get-all
     */
    objectGetAllList: (params: RequestParams = {}) =>
      this.request<IRealtyObjectViewModel[], any>({
        path: `/api/Object/get-all`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Object
     * @name ObjectFindCreate
     * @request POST:/api/Object/find
     */
    objectFindCreate: (data: IObjectsFilter, params: RequestParams = {}) =>
      this.request<IRealtyObjectViewModel[], any>({
        path: `/api/Object/find`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Object
     * @name ObjectDetail
     * @request GET:/api/Object/{id}
     */
    objectDetail: (id: number, params: RequestParams = {}) =>
      this.request<IRealtyObject, any>({
        path: `/api/Object/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Price
     * @name PriceDetail
     * @request GET:/api/Price/{id}
     */
    priceDetail: (id: number, params: RequestParams = {}) =>
      this.request<IRealtyPrice[], any>({
        path: `/api/Price/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  controller = {
    /**
     * No description
     *
     * @tags Owner
     * @name Calendar
     * @request GET:/{controller}/object/{id}/bookings
     */
    calendar: (id: number, controller: string, query?: { date?: string }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/${controller}/object/${id}/bookings`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
}
