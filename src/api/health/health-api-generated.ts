import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../../sdk/configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction, isBrowser } from '../../sdk/common';
// @ts-ignore
import { BASE_PATH, RequestArgs, BaseAPI } from '../../sdk/base';
import { requestBeforeHook } from '../../sdk/components/requestBeforeHook';

/**
 * HealthApi - axios parameter creator
 * @export
 */
export const HealthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Simply returns status code 200 if online.
         * @summary health:check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthCheck: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/health/check`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apikeyAuth", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/health/check',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HealthApi - functional programming interface
 * @export
 */
export const HealthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HealthApiAxiosParamCreator(configuration)
    return {
        /**
         * Simply returns status code 200 if online.
         * @summary health:check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async healthCheck(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.healthCheck(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HealthApi - factory interface
 * @export
 */
export const HealthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HealthApiFp(configuration)
    return {
        /**
         * Simply returns status code 200 if online.
         * @summary health:check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthCheck(options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.healthCheck(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HealthApiGenerated - object-oriented interface
 * @export
 * @class HealthApiGenerated
 * @extends {BaseAPI}
 */
export class HealthApiGenerated extends BaseAPI {
    /**
     * Simply returns status code 200 if online.
     * @summary health:check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public healthCheck(options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).healthCheck(options).then((request) => request(this.axios, this.basePath));
    }
}
