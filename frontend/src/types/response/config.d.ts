type Transitional = {
  clarifyTimeoutError: boolean
  forcedJSONParsing: boolean
  silentJSONParsing: boolean
}

export type ResponseConfig = {
  adapter: (config: any) => void;
  data: string;
  headers: Headers;
  maxBodyLength: number;
  maxContentLength: number;
  method: string;
  timeout: number;
  transformRequest: () => void;
  transformResponse: () => void;
  transitional: Transitional;
  url: string;
  validateStatus: (status: any) => void;
  xsrfCookieName: string;
  xsrfHeaderName: string;
};
