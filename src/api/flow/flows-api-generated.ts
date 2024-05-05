import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../../sdk/configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject,
    setSearchParams, serializeDataIfNeeded,
    toPathString, createRequestFunction, isBrowser,
    setJwtToObject
} from '../../sdk/common';
// @ts-ignore
import { RequestArgs, BASE_PATH, BaseAPI } from '../../sdk/base';
// @ts-ignore
import { FlowsAuthorizeResponse } from '../../modules/models';
// @ts-ignore
import { FlowsCancelRequest } from '../../modules/models';
// @ts-ignore
import { FlowsCancelResponse } from '../../modules/models';
// @ts-ignore
import { FlowsLongPollingRequest } from '../../modules/models';
// @ts-ignore
import { FlowsPingRequest } from '../../modules/models';
// @ts-ignore
import { FlowsPingResponse } from '../../modules/models';
import { requestBeforeHook } from '../../sdk/components/requestBeforeHook';

/**
 * FlowsApi - axios parameter creator
 * @export
 */
export const FlowsApiAxiosParamCreator = function (configuration: Configuration) {
    return {
        /**
         *  This endpoint sends an HTTP GET request to retrieve authorization for a specific flow. The request should include the \'sub\' parameter for the organization and the \'app\' parameter for the app ID. Upon a successful execution, the response will have a status code of 200 and a JSON body with the keys \'status\', \'reason\', and \'data\'. The \'data\' object contains a \'token\' which can be used for further authentication or authorization purposes. 
         * @summary flow:authorization
         * @param {string} [sub] This can be found in your consumer service.json file with the identifier clientid.
         * @param {string} [app] This can be found in Console and your app's generated service.json file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorize: async (sub: string, app: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/${configuration.versioning}/flow/authorize`;
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
            // authentication app secret key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-access-secret", keyParamName: "appSecretKey", configuration })
            
            if (sub !== undefined) {
                localVarQueryParameter['sub'] = sub;
            }

            if (app !== undefined) {
                localVarQueryParameter['app'] = app;
            }

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/flow/authorize`,
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ### Flow Cancel  This endpoint is used to cancel a flow using an HTTP POST request.  #### Request Body  - The request body should be in raw format with a JSON object.     - `request`: (string) The request to cancel.  #### Response  - Status: 201 - Content-Type: application/json - `status`: (string) The status of the cancellation. - `reason`: (string) The reason for the cancellation. - `data`: (object) The data object containing model details.          - `id`: (string) The ID of the model.     - `consumer`: (string) The consumer of the model.     - `app`: (string) The app related to the model.     - `mode`: (string) The mode of the model.     - `action`: (string) The action related to the model.     - `payload`: (string) The payload of the model.     - `iat`: (integer) The issued at timestamp.     - `exp`: (integer) The expiration timestamp.     - `user`: (string) The user related to the model.     - `ip`: (string) The IP address related to the model.     - `useragent`: (string) The user agent related to the model.     - `name`: (string) App name.              - `acquireClaims`: (array) Array of acquire claims related to this flow.           - `version`: (string) The version of the response.
         * @summary flow:cancel
         * @param {FlowsCancelRequest} flowsCancelRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancel: async (flowsCancelRequest: FlowsCancelRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'flowsCancelRequest' is not null or undefined
            assertParamExists('cancel', 'flowsCancelRequest', flowsCancelRequest)
            const localVarPath = `/api/${configuration.versioning}/flow/cancel`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apikeyAuth", configuration })
            // authentication app secret key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-access-secret", keyParamName: "appSecretKey", configuration })

            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: flowsCancelRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/flow/cancel`,
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(flowsCancelRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ## Flow Polling  This endpoint allows you to poll for flow status.  ### Request  - Method: POST - URL: `https://{base_url}/api/{version}/polling` - Headers:     - Content-Type: application/json - Body:          ``` json       {           \"request\": \"\"       }           ```       ### Response  - Status: 200 - Content-Type: application/json - Body:          ``` json       {           \"status\": \"\",           \"reason\": \"\",           \"data\": {               \"request\": {                   \"reference\": \"\",                   \"requester\": \"\",                   \"requestee\": \"\",                   \"mode\": \"\",                   \"data\": \"\",                   \"cancelled\": true,                   \"onsession\": true,                   \"iat\": 0,                   \"claims\": {},                   \"signature\": \"\",                   \"signedAt\": 0               }           }       }           ```
         * @summary flow:poll
         * @param {FlowsLongPollingRequest} flowsLongPollingRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        longPolling: async (flowsLongPollingRequest: FlowsLongPollingRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'flowsLongPollingRequest' is not null or undefined
            assertParamExists('longPolling', 'flowsLongPollingRequest', flowsLongPollingRequest)
            const localVarPath = `/api/${configuration.versioning}/flow/polling`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apikeyAuth", configuration })
            // authentication app secret key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-access-secret", keyParamName: "appSecretKey", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: flowsLongPollingRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/flow/polling`,
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(flowsLongPollingRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  # Flow Ping  This endpoint allows you to ping the flow and retrieve the status of the request.  ## Request Body - The request body should be in raw format. - The request body should contain a JSON object with a key \"request\".  ## Response - Status: 200 - Content-Type: application/json  ### Response Body The response contains a JSON object with the following keys: - status (string): The status of the request. - reason (string): The reason for the status. - data (object): An object containing details of the request, including reference, requester, requestee, mode, data, cancelled, onsession, iat, claims, signature, and signedAt. - version (string): The version of the response.  #### Example Response ```json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"request\": {             \"reference\": \"\",             \"requester\": \"\",             \"requestee\": \"\",             \"mode\": \"\",             \"data\": \"\",             \"cancelled\": true,             \"onsession\": true,             \"iat\": 0,             \"claims\": {}         }     },     \"version\": \"\" } ``` 
         * @summary flow:ping
         * @param {FlowsPingRequest} flowsPingRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ping: async (flowsPingRequest: FlowsPingRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'flowsPingRequest' is not null or undefined
            assertParamExists('ping', 'flowsPingRequest', flowsPingRequest)
            const localVarPath = `/api/${configuration.versioning}/flow/ping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apikeyAuth", configuration })
            // authentication app secret key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-access-secret", keyParamName: "appSecretKey", configuration })
    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: flowsPingRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/flow/ping`,
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(flowsPingRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FlowsApi - functional programming interface
 * @export
 */
export const FlowsApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = FlowsApiAxiosParamCreator(configuration)
    return {
        /**
         *  This endpoint sends an HTTP GET request to retrieve authorization for a specific flow. The request should include the \'sub\' parameter for the organization and the \'app\' parameter for the app ID. Upon a successful execution, the response will have a status code of 200 and a JSON body with the keys \'status\', \'reason\', and \'data\'. The \'data\' object contains a \'token\' which can be used for further authentication or authorization purposes. 
         * @summary flow:authorization
         * @param {FlowsApiAuthorizeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authorize(requestParameters: FlowsApiAuthorizeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlowsAuthorizeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authorize(requestParameters.sub, requestParameters.app, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ### Flow Cancel  This endpoint is used to cancel a flow using an HTTP POST request.  #### Request Body  - The request body should be in raw format with a JSON object.     - `request`: (string) The request to cancel.  #### Response  - Status: 201 - Content-Type: application/json - `status`: (string) The status of the cancellation. - `reason`: (string) The reason for the cancellation. - `data`: (object) The data object containing model details.          - `id`: (string) The ID of the model.     - `consumer`: (string) The consumer of the model.     - `app`: (string) The app related to the model.     - `mode`: (string) The mode of the model.     - `action`: (string) The action related to the model.     - `payload`: (string) The payload of the model.     - `iat`: (integer) The issued at timestamp.     - `exp`: (integer) The expiration timestamp.     - `user`: (string) The user related to the model.     - `ip`: (string) The IP address related to the model.     - `useragent`: (string) The user agent related to the model.     - `name`: (string) App name.              - `acquireClaims`: (array) Array of acquire claims related to this flow.           - `version`: (string) The version of the response.
         * @summary flow:cancel
         * @param {FlowsApiCancelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancel(requestParameters: FlowsApiCancelRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlowsCancelResponse>> {
            const flowsCancelRequest: FlowsCancelRequest = {
                request: requestParameters.request
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancel(flowsCancelRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ## Flow Polling  This endpoint allows you to poll for flow status.  ### Request  - Method: POST - URL: `https://{base_url}/api/{version}/polling` - Headers:     - Content-Type: application/json - Body:          ``` json       {           \"request\": \"\"       }           ```       ### Response  - Status: 200 - Content-Type: application/json - Body:          ``` json       {           \"status\": \"\",           \"reason\": \"\",           \"data\": {               \"request\": {                   \"reference\": \"\",                   \"requester\": \"\",                   \"requestee\": \"\",                   \"mode\": \"\",                   \"data\": \"\",                   \"cancelled\": true,                   \"onsession\": true,                   \"iat\": 0,                   \"claims\": {},                   \"signature\": \"\",                   \"signedAt\": 0               }           }       }           ```
         * @summary flow:poll
         * @param {FlowsApiLongPollingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async longPolling(requestParameters: FlowsApiLongPollingRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const flowsLongPollingRequest: FlowsLongPollingRequest = {
                request: requestParameters.request
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.longPolling(flowsLongPollingRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *  # Flow Ping  This endpoint allows you to ping the flow and retrieve the status of the request.  ## Request Body - The request body should be in raw format. - The request body should contain a JSON object with a key \"request\".  ## Response - Status: 200 - Content-Type: application/json  ### Response Body The response contains a JSON object with the following keys: - status (string): The status of the request. - reason (string): The reason for the status. - data (object): An object containing details of the request, including reference, requester, requestee, mode, data, cancelled, onsession, iat, claims, signature, and signedAt. - version (string): The version of the response.  #### Example Response ```json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"request\": {             \"reference\": \"\",             \"requester\": \"\",             \"requestee\": \"\",             \"mode\": \"\",             \"data\": \"\",             \"cancelled\": true,             \"onsession\": true,             \"iat\": 0,             \"claims\": {}         }     },     \"version\": \"\" } ``` 
         * @summary flow:ping
         * @param {FlowsApiPingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ping(requestParameters: FlowsApiPingRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlowsPingResponse>> {
            const flowsPingRequest: FlowsPingRequest = {
                request: requestParameters.request
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.ping(flowsPingRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FlowsApi - factory interface
 * @export
 */
export const FlowsApiFactory = function (configuration: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FlowsApiFp(configuration)
    return {
        /**
         *  This endpoint sends an HTTP GET request to retrieve authorization for a specific flow. The request should include the \'sub\' parameter for the organization and the \'app\' parameter for the app ID. Upon a successful execution, the response will have a status code of 200 and a JSON body with the keys \'status\', \'reason\', and \'data\'. The \'data\' object contains a \'token\' which can be used for further authentication or authorization purposes. 
         * @summary flow:authorization
         * @param {FlowsApiAuthorizeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorize(requestParameters: FlowsApiAuthorizeRequest, options?: AxiosRequestConfig): AxiosPromise<FlowsAuthorizeResponse> {
            return localVarFp.authorize(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * ### Flow Cancel  This endpoint is used to cancel a flow using an HTTP POST request.  #### Request Body  - The request body should be in raw format with a JSON object.     - `request`: (string) The request to cancel.  #### Response  - Status: 201 - Content-Type: application/json - `status`: (string) The status of the cancellation. - `reason`: (string) The reason for the cancellation. - `data`: (object) The data object containing model details.          - `id`: (string) The ID of the model.     - `consumer`: (string) The consumer of the model.     - `app`: (string) The app related to the model.     - `mode`: (string) The mode of the model.     - `action`: (string) The action related to the model.     - `payload`: (string) The payload of the model.     - `iat`: (integer) The issued at timestamp.     - `exp`: (integer) The expiration timestamp.     - `user`: (string) The user related to the model.     - `ip`: (string) The IP address related to the model.     - `useragent`: (string) The user agent related to the model.     - `name`: (string) App name.              - `acquireClaims`: (array) Array of acquire claims related to this flow.           - `version`: (string) The version of the response.
         * @summary flow:cancel
         * @param {FlowsApiCancelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancel(requestParameters: FlowsApiCancelRequest, options?: AxiosRequestConfig): AxiosPromise<FlowsCancelResponse> {
            return localVarFp.cancel(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * ## Flow Polling  This endpoint allows you to poll for flow status.  ### Request  - Method: POST - URL: `https://{base_url}/api/{version}/polling` - Headers:     - Content-Type: application/json - Body:          ``` json       {           \"request\": \"\"       }           ```       ### Response  - Status: 200 - Content-Type: application/json - Body:          ``` json       {           \"status\": \"\",           \"reason\": \"\",           \"data\": {               \"request\": {                   \"reference\": \"\",                   \"requester\": \"\",                   \"requestee\": \"\",                   \"mode\": \"\",                   \"data\": \"\",                   \"cancelled\": true,                   \"onsession\": true,                   \"iat\": 0,                   \"claims\": {},                   \"signature\": \"\",                   \"signedAt\": 0               }           }       }           ```
         * @summary flow:poll
         * @param {FlowsApiLongPollingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        longPolling(requestParameters: FlowsApiLongPollingRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.longPolling(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *  # Flow Ping  This endpoint allows you to ping the flow and retrieve the status of the request.  ## Request Body - The request body should be in raw format. - The request body should contain a JSON object with a key \"request\".  ## Response - Status: 200 - Content-Type: application/json  ### Response Body The response contains a JSON object with the following keys: - status (string): The status of the request. - reason (string): The reason for the status. - data (object): An object containing details of the request, including reference, requester, requestee, mode, data, cancelled, onsession, iat, claims, signature, and signedAt. - version (string): The version of the response.  #### Example Response ```json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"request\": {             \"reference\": \"\",             \"requester\": \"\",             \"requestee\": \"\",             \"mode\": \"\",             \"data\": \"\",             \"cancelled\": true,             \"onsession\": true,             \"iat\": 0,             \"claims\": {}         }     },     \"version\": \"\" } ``` 
         * @summary flow:ping
         * @param {FlowsApiPingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ping(requestParameters: FlowsApiPingRequest, options?: AxiosRequestConfig): AxiosPromise<FlowsPingResponse> {
            return localVarFp.ping(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for authorize operation in FlowsApi.
 * @export
 * @interface FlowsApiAuthorizeRequest
 */
export type FlowsApiAuthorizeRequest = {
    
    /**
    * This can be found in your consumer service.json file with the identifier clientid.
    * @type {string}
    * @memberof FlowsApiAuthorize
    */
    readonly sub: string
    
    /**
    * This can be found in Console and your app\'s generated service.json file
    * @type {string}
    * @memberof FlowsApiAuthorize
    */
    readonly app: string
    
}

/**
 * Request parameters for cancel operation in FlowsApi.
 * @export
 * @interface FlowsApiCancelRequest
 */
export type FlowsApiCancelRequest = {
    
} & FlowsCancelRequest

/**
 * Request parameters for longPolling operation in FlowsApi.
 * @export
 * @interface FlowsApiLongPollingRequest
 */
export type FlowsApiLongPollingRequest = {
    
} & FlowsLongPollingRequest

/**
 * Request parameters for ping operation in FlowsApi.
 * @export
 * @interface FlowsApiPingRequest
 */
export type FlowsApiPingRequest = {
    
} & FlowsPingRequest

/**
 * FlowsApiGenerated - object-oriented interface
 * @export
 * @class FlowsApiGenerated
 * @extends {BaseAPI}
 */
export class FlowsApiGenerated extends BaseAPI {
    /**
     *  This endpoint sends an HTTP GET request to retrieve authorization for a specific flow. The request should include the \'sub\' parameter for the organization and the \'app\' parameter for the app ID. Upon a successful execution, the response will have a status code of 200 and a JSON body with the keys \'status\', \'reason\', and \'data\'. The \'data\' object contains a \'token\' which can be used for further authentication or authorization purposes. 
     * @summary flow:authorization
     * @param {FlowsApiAuthorizeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApiGenerated
     */
    private authorize(requestParameters: FlowsApiAuthorizeRequest, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).authorize(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ### Flow Cancel  This endpoint is used to cancel a flow using an HTTP POST request.  #### Request Body  - The request body should be in raw format with a JSON object.     - `request`: (string) The request to cancel.  #### Response  - Status: 201 - Content-Type: application/json - `status`: (string) The status of the cancellation. - `reason`: (string) The reason for the cancellation. - `data`: (object) The data object containing model details.          - `id`: (string) The ID of the model.     - `consumer`: (string) The consumer of the model.     - `app`: (string) The app related to the model.     - `mode`: (string) The mode of the model.     - `action`: (string) The action related to the model.     - `payload`: (string) The payload of the model.     - `iat`: (integer) The issued at timestamp.     - `exp`: (integer) The expiration timestamp.     - `user`: (string) The user related to the model.     - `ip`: (string) The IP address related to the model.     - `useragent`: (string) The user agent related to the model.     - `name`: (string) App name.              - `acquireClaims`: (array) Array of acquire claims related to this flow.           - `version`: (string) The version of the response.
     * @summary flow:cancel
     * @param {FlowsApiCancelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApiGenerated
     */
    public cancel(requestParameters: FlowsApiCancelRequest, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).cancel(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ## Flow Polling  This endpoint allows you to poll for flow status.  ### Request  - Method: POST - URL: `https://{base_url}/api/{version}/flow/polling` - Headers:     - Content-Type: application/json - Body:          ``` json       {           \"request\": \"\"       }           ```       ### Response  - Status: 200 - Content-Type: application/json - Body:          ``` json       {           \"status\": \"\",           \"reason\": \"\",           \"data\": {               \"request\": {                   \"reference\": \"\",                   \"requester\": \"\",                   \"requestee\": \"\",                   \"mode\": \"\",                   \"data\": \"\",                   \"cancelled\": true,                   \"onsession\": true,                   \"iat\": 0,                   \"claims\": {},                   \"signature\": \"\",                   \"signedAt\": 0               }           }       }           ```
     * @summary flow:poll
     * @param {FlowsApiLongPollingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApiGenerated
     */
    private longPolling(requestParameters: FlowsApiLongPollingRequest, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).longPolling(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  # Flow Ping  This endpoint allows you to ping the flow and retrieve the status of the request.  ## Request Body - The request body should be in raw format. - The request body should contain a JSON object with a key \"request\".  ## Response - Status: 200 - Content-Type: application/json  ### Response Body The response contains a JSON object with the following keys: - status (string): The status of the request. - reason (string): The reason for the status. - data (object): An object containing details of the request, including reference, requester, requestee, mode, data, cancelled, onsession, iat, claims, signature, and signedAt. - version (string): The version of the response.  #### Example Response ```json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"request\": {             \"reference\": \"\",             \"requester\": \"\",             \"requestee\": \"\",             \"mode\": \"\",             \"data\": \"\",             \"cancelled\": true,             \"onsession\": true,             \"iat\": 0,             \"claims\": {}         }     },     \"version\": \"\" } ``` 
     * @summary flow:ping
     * @param {FlowsApiPingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApiGenerated
     */
    public ping(requestParameters: FlowsApiPingRequest, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).ping(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
