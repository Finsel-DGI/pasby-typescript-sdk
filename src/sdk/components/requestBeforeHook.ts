import { AxiosRequestConfig } from "axios";
import { Configuration } from "../configuration";

export function requestBeforeHook({
  requestBody,
  queryParameters,
  path,
  requestConfig,
  configuration,
  pathTemplate,
  httpMethod
}: {
  requestBody?: any;
  queryParameters: Record<string, any>;
  path: string;
  requestConfig: AxiosRequestConfig;
  configuration?: Configuration;
  pathTemplate: string;
  httpMethod: string;
  [key: string]: any;
}): void {}
