import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../../sdk/configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import {
    DUMMY_BASE_URL, assertParamExists, setApiKeyToObject,
    setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser
} from '../../sdk/common';
// @ts-ignore
import { BASE_PATH, RequestArgs, BaseAPI } from '../../sdk/base';
// @ts-ignore
import { IdentificationDifferentDeviceRequest, IdentificationDifferentDeviceResponse } from '../../modules/models';
// @ts-ignore
import { IdentificationDifferentDeviceRequest } from '../../modules/models';
// @ts-ignore
import { IdentificationSameDeviceRequest } from '../../modules/models';
// @ts-ignore
import { IdentificationSameDeviceResponse } from '../../modules/models';
// @ts-ignore
import { IdentificationWildcardRequest } from '../../modules/models';
// @ts-ignore
import { IdentificationWildcardResponse } from '../../modules/models';
import { requestBeforeHook } from '../../sdk/components/requestBeforeHook';

/**
 * IdentificationApi - axios parameter creator
 * @export
 */
export const IdentificationApiAxiosParamCreator = function (configuration: Configuration) {
    return {

        /**
         * API Request Description  This API endpoint allows users to make an HTTP POST request to https://{base_url}/api/{version}/identification/different-device in order to perform a specific action related to identification on a different device. The request should include a JSON payload with the following parameters:  - `user` (string): The user\'s nin related to the action.      - `action` (string): The specific action to be performed. - `claims` (array of strings): Additional claims related to the action. - `payload` (string): Additional payload data for the action. API Response  Upon successful execution, the API returns a response with a status code of 201 and a content type of application/json. The response body contains the following fields:  - `status` (string): The status of the response. - `reason` (string): The reason for the response status. - `data` (object): An object containing detailed data related to the request.     - `token` (string): The token associated with the request.     - `request` (object): Details of the request including id, consumer, app, mode, action, payload, iat, exp, user, ip, useragent, name, acquireClaims, and signature. - `version` (string): The version of the response.
         * @summary identification:another
         * @param {IdentificationDifferentDeviceRequest} identificationDifferentDeviceRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        differentDevice: async (identificationDifferentDeviceRequest: IdentificationDifferentDeviceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identificationDifferentDeviceRequest' is not null or undefined
            assertParamExists('differentDevice', 'identificationDifferentDeviceRequest', identificationDifferentDeviceRequest)
            const localVarPath = `/api/${configuration.versioning}/identification/different-device`;
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
                requestBody: identificationDifferentDeviceRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/identification/different-device`,
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(identificationDifferentDeviceRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Same Device Identification  This endpoint allows you to perform same device identification by making an HTTP POST request to `https://{base_url}/api/{version}/identification/same-device`.  ## Request Payload  - `action` (string): Specifies the action to be performed. - `claims` (array of strings): Contains the claims for identification. - `payload` (string): Specifies the payload for identification.       Response  - Status: 201 - Content-Type: application/json       # Response Body  ``` json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"token\": \"\",         \"link\": \"\",         \"request\": {             \"id\": \"\",             \"consumer\": \"\",             \"app\": \"\",             \"mode\": \"\",             \"action\": \"\",             \"payload\": \"\",             \"iat\": 0,             \"exp\": 0,             \"user\": \"\",             \"ip\": \"\",             \"useragent\": \"\",             \"name\": \"\",             \"acquireClaims\": [\"\"],             \"signature\": \"\"         },         \"version\": \"\"     } }   ```   Example  ``` json {     \"action\": \"login\" | \"signup\" | \"link\",     \"claims\": [\"claim1\", \"claim2\"],     \"payload\": \"payloadData\" }   ```
         * @summary identification:same
         * @param {IdentificationSameDeviceRequest} identificationSameDeviceRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sameDevice: async (identificationSameDeviceRequest: IdentificationSameDeviceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identificationSameDeviceRequest' is not null or undefined
            assertParamExists('sameDevice', 'identificationSameDeviceRequest', identificationSameDeviceRequest)
            const localVarPath = `/api/${configuration.versioning}/identification/same-device`;
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
                requestBody: identificationSameDeviceRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/identification/same-device`,
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(identificationSameDeviceRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Identification Wildcard  This endpoint allows you to make an HTTP POST request to identify a user without any nin entry.  Wildcards are used with QR codes to create an authentication flow that relies on an unknown user authenticating through a scan only. This scope does not need a nin identifier. Thus the reason it is a wildcard.  Request  - Method: POST - URL: `https://{base_url}/api/{version}/identification/wildcard` - Payload Type: Raw    Request Body  | Key | Type | Description | | --- | --- | --- | | action | text | Action to be performed | | claims | array | Array of claims | | seeds | number | Number of requests ids to be generated | | payload | text | Payload data | # Response  - Status: 201 - Content-Type: application/json       # Response Body  ``` json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"request\": {             \"id\": \"\",             \"consumer\": \"\",             \"app\": \"\",             \"mode\": \"\",             \"action\": \"\",             \"payload\": \"\",             \"iat\": 0,             \"exp\": 0,             \"user\": \"\",             \"ip\": \"\",             \"useragent\": \"\",             \"name\": \"\",             \"acquireClaims\": [\"\"],             \"signature\": \"\"         },         \"seeds\": [\"\"]     },     \"version\": \"\" }   ```
         * @summary identification:wildcard
         * @param {IdentificationWildcardRequest} identificationWildcardRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wildcard: async (identificationWildcardRequest: IdentificationWildcardRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identificationWildcardRequest' is not null or undefined
            assertParamExists('wildcard', 'identificationWildcardRequest', identificationWildcardRequest)
            const localVarPath = `/api/${configuration.versioning}/identification/wildcard`;
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
                requestBody: identificationWildcardRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/identification/wildcard`,
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(identificationWildcardRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IdentificationApi - functional programming interface
 * @export
 */
export const IdentificationApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = IdentificationApiAxiosParamCreator(configuration)
    return {
        /**
         * API Request Description  This API endpoint allows users to make an HTTP POST request to https://{base_url}/api/{version}/identification/different-device in order to perform a specific action related to identification on a different device. The request should include a JSON payload with the following parameters:  - `user` (string): The user\'s nin related to the action.      - `action` (string): The specific action to be performed. - `claims` (array of strings): Additional claims related to the action. - `payload` (string): Additional payload data for the action.       ### API Response  Upon successful execution, the API returns a response with a status code of 201 and a content type of application/json. The response body contains the following fields:  - `status` (string): The status of the response. - `reason` (string): The reason for the response status. - `data` (object): An object containing detailed data related to the request.     - `token` (string): The token associated with the request.     - `request` (object): Details of the request including id, consumer, app, mode, action, payload, iat, exp, user, ip, useragent, name, acquireClaims, and signature. - `version` (string): The version of the response.       ### Additional Notes  The user can add more detailed documentation for this API endpoint based on specific use cases and requirements.
         * @summary identification:another
         * @param {IdentificationDifferentDeviceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async differentDevice(requestParameters: IdentificationDifferentDeviceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdentificationDifferentDeviceResponse>> {
            const identificationDifferentDeviceRequest: IdentificationDifferentDeviceRequest = {
                user: requestParameters.user,
                action: requestParameters.action,
                claims: requestParameters.claims,
                payload: requestParameters.payload
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.differentDevice(identificationDifferentDeviceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Same Device Identification  This endpoint allows you to perform same device identification by making an HTTP POST request to `https://{base_url}/api/{version}/identification/same-device`.  ## Request Payload  - `action` (string): Specifies the action to be performed. - `claims` (array of strings): Contains the claims for identification. - `payload` (string): Specifies the payload for identification.       ## Response  - Status: 201 - Content-Type: application/json       ### Response Body  ``` json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"token\": \"\",         \"link\": \"\",         \"request\": {             \"id\": \"\",             \"consumer\": \"\",             \"app\": \"\",             \"mode\": \"\",             \"action\": \"\",             \"payload\": \"\",             \"iat\": 0,             \"exp\": 0,             \"user\": \"\",             \"ip\": \"\",             \"useragent\": \"\",             \"name\": \"\",             \"acquireClaims\": [\"\"],             \"signature\": \"\"         },         \"version\": \"\"     } }   ```  ## Example  ``` json {     \"action\": \"login\" | \"signup\" | \"link\",     \"claims\": [\"claim1\", \"claim2\"],     \"payload\": \"payloadData\" }   ```
         * @summary identification:same
         * @param {IdentificationApiSameDeviceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sameDevice(requestParameters: IdentificationApiSameDeviceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdentificationSameDeviceResponse>> {
            const identificationSameDeviceRequest: IdentificationSameDeviceRequest = {
                action: requestParameters.action,
                claims: requestParameters.claims,
                payload: requestParameters.payload
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.sameDevice(identificationSameDeviceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Identification Wildcard  This endpoint allows you to make an HTTP POST request to identify a user without any nin entry.  Wildcards are used with QR codes to create an authentication flow that relies on an unkown user authenticating through a scan only. This scope does not need a nin identifier. Thus the reason it is a wildcard.  ## Request  - Method: POST - URL: `https://{base_url}/api/{version}/identification/wildcard` - Payload Type: Raw       ### Request Body  | Key | Type | Description | | --- | --- | --- | | action | text | Action to be performed | | claims | array | Array of claims | | seeds | number | Number of requests ids to be generated | | payload | text | Payload data |  ## Response  - Status: 201 - Content-Type: application/json       ### Response Body  ``` json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"request\": {             \"id\": \"\",             \"consumer\": \"\",             \"app\": \"\",             \"mode\": \"\",             \"action\": \"\",             \"payload\": \"\",             \"iat\": 0,             \"exp\": 0,             \"user\": \"\",             \"ip\": \"\",             \"useragent\": \"\",             \"name\": \"\",             \"acquireClaims\": [\"\"],             \"signature\": \"\"         },         \"seeds\": [\"\"]     },     \"version\": \"\" }   ```
         * @summary identification:wildcard
         * @param {IdentificationApiWildcardRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wildcard(requestParameters: IdentificationApiWildcardRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdentificationWildcardResponse>> {
            const identificationWildcardRequest: IdentificationWildcardRequest = {
                action: requestParameters.action,
                claims: requestParameters.claims,
                seeds: requestParameters.seeds,
                payload: requestParameters.payload
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.wildcard(identificationWildcardRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * IdentificationApi - factory interface
 * @export
 */
export const IdentificationApiFactory = function (configuration: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IdentificationApiFp(configuration)
    return {
        /**
         * API Request Description  This API endpoint allows users to make an HTTP POST request to https://{base_url}/api/{version}/identification/different-device in order to perform a specific action related to identification on a different device. The request should include a JSON payload with the following parameters:  - `user` (string): The user\'s nin related to the action.      - `action` (string): The specific action to be performed. - `claims` (array of strings): Additional claims related to the action. - `payload` (string): Additional payload data for the action.       ### API Response  Upon successful execution, the API returns a response with a status code of 201 and a content type of application/json. The response body contains the following fields:  - `status` (string): The status of the response. - `reason` (string): The reason for the response status. - `data` (object): An object containing detailed data related to the request.     - `token` (string): The token associated with the request.     - `request` (object): Details of the request including id, consumer, app, mode, action, payload, iat, exp, user, ip, useragent, name, acquireClaims, and signature. - `version` (string): The version of the response.       ### Additional Notes  The user can add more detailed documentation for this API endpoint based on specific use cases and requirements.
         * @summary identification:another
         * @param {IdentificationApiDifferentDeviceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        differentDevice(requestParameters: IdentificationApiDifferentDeviceRequest, options?: AxiosRequestConfig): AxiosPromise<IdentificationDifferentDeviceResponse> {
            return localVarFp.differentDevice(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Same Device Identification  This endpoint allows you to perform same device identification by making an HTTP POST request to `https://{base_url}/api/{version}/identification/same-device`.  ## Request Payload  - `action` (string): Specifies the action to be performed. - `claims` (array of strings): Contains the claims for identification. - `payload` (string): Specifies the payload for identification.       ## Response  - Status: 201 - Content-Type: application/json       ### Response Body  ``` json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"token\": \"\",         \"link\": \"\",         \"request\": {             \"id\": \"\",             \"consumer\": \"\",             \"app\": \"\",             \"mode\": \"\",             \"action\": \"\",             \"payload\": \"\",             \"iat\": 0,             \"exp\": 0,             \"user\": \"\",             \"ip\": \"\",             \"useragent\": \"\",             \"name\": \"\",             \"acquireClaims\": [\"\"],             \"signature\": \"\"         },         \"version\": \"\"     } }   ```  ## Example  ``` json {     \"action\": \"login\" | \"signup\" | \"link\",     \"claims\": [\"claim1\", \"claim2\"],     \"payload\": \"payloadData\" }   ```
         * @summary identification:same
         * @param {IdentificationApiSameDeviceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sameDevice(requestParameters: IdentificationApiSameDeviceRequest, options?: AxiosRequestConfig): AxiosPromise<IdentificationSameDeviceResponse> {
            return localVarFp.sameDevice(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Identification Wildcard  This endpoint allows you to make an HTTP POST request to identify a user without any nin entry.  Wildcards are used with QR codes to create an authentication flow that relies on an unkown user authenticating through a scan only. This scope does not need a nin identifier. Thus the reason it is a wildcard.  ## Request  - Method: POST - URL: `https://{base_url}/api/{version}/identification/wildcard` - Payload Type: Raw       ### Request Body  | Key | Type | Description | | --- | --- | --- | | action | text | Action to be performed | | claims | array | Array of claims | | seeds | number | Number of requests ids to be generated | | payload | text | Payload data |  ## Response  - Status: 201 - Content-Type: application/json       ### Response Body  ``` json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"request\": {             \"id\": \"\",             \"consumer\": \"\",             \"app\": \"\",             \"mode\": \"\",             \"action\": \"\",             \"payload\": \"\",             \"iat\": 0,             \"exp\": 0,             \"user\": \"\",             \"ip\": \"\",             \"useragent\": \"\",             \"name\": \"\",             \"acquireClaims\": [\"\"],             \"signature\": \"\"         },         \"seeds\": [\"\"]     },     \"version\": \"\" }   ```
         * @summary identification:wildcard
         * @param {IdentificationApiWildcardRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wildcard(requestParameters: IdentificationApiWildcardRequest, options?: AxiosRequestConfig): AxiosPromise<IdentificationWildcardResponse> {
            return localVarFp.wildcard(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for differentDevice operation in IdentificationApi.
 * @export
 * @interface IdentificationApiDifferentDeviceRequest
 */
export type IdentificationApiDifferentDeviceRequest = {
    
} & IdentificationDifferentDeviceRequest

/**
 * Request parameters for sameDevice operation in IdentificationApi.
 * @export
 * @interface IdentificationApiSameDeviceRequest
 */
export type IdentificationApiSameDeviceRequest = {
    
} & IdentificationSameDeviceRequest

/**
 * Request parameters for wildcard operation in IdentificationApi.
 * @export
 * @interface IdentificationApiWildcardRequest
 */
export type IdentificationApiWildcardRequest = {
    
} & IdentificationWildcardRequest

/**
 * IdentificationApiGenerated - object-oriented interface
 * @export
 * @class IdentificationApiGenerated
 * @extends {BaseAPI}
 */
export class IdentificationApiGenerated extends BaseAPI {
    /**
     * API Request Description  This API endpoint allows users to make an HTTP POST request to https://{base_url}/api/{version}/identification/different-device in order to perform a specific action related to identification on a different device. The request should include a JSON payload with the following parameters:  - `user` (string): The user\'s nin related to the action.      - `action` (string): The specific action to be performed. - `claims` (array of strings): Additional claims related to the action. - `payload` (string): Additional payload data for the action.       ### API Response  Upon successful execution, the API returns a response with a status code of 201 and a content type of application/json. The response body contains the following fields:  - `status` (string): The status of the response. - `reason` (string): The reason for the response status. - `data` (object): An object containing detailed data related to the request.     - `token` (string): The token associated with the request.     - `request` (object): Details of the request including id, consumer, app, mode, action, payload, iat, exp, user, ip, useragent, name, acquireClaims, and signature. - `version` (string): The version of the response.       ### Additional Notes  The user can add more detailed documentation for this API endpoint based on specific use cases and requirements.
     * @summary identification:another v2
     * @param {IdentificationApiDifferentDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IdentificationApiGenerated
     */
    public differentDevice(requestParameters: IdentificationApiDifferentDeviceRequest, options?: AxiosRequestConfig) {
        return IdentificationApiFp(this.configuration).differentDevice(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Same Device Identification  This endpoint allows you to perform same device identification by making an HTTP POST request to `https://{base_url}/api/{version}/identification/same-device`.  ## Request Payload  - `action` (string): Specifies the action to be performed. - `claims` (array of strings): Contains the claims for identification. - `payload` (string): Specifies the payload for identification.       ## Response  - Status: 201 - Content-Type: application/json       ### Response Body  ``` json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"token\": \"\",         \"link\": \"\",         \"request\": {             \"id\": \"\",             \"consumer\": \"\",             \"app\": \"\",             \"mode\": \"\",             \"action\": \"\",             \"payload\": \"\",             \"iat\": 0,             \"exp\": 0,             \"user\": \"\",             \"ip\": \"\",             \"useragent\": \"\",             \"name\": \"\",             \"acquireClaims\": [\"\"],             \"signature\": \"\"         },         \"version\": \"\"     } }   ```  ## Example  ``` json {     \"action\": \"login\" | \"signup\" | \"link\",     \"claims\": [\"claim1\", \"claim2\"],     \"payload\": \"payloadData\" }   ```
     * @summary identification:same
     * @param {IdentificationApiSameDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IdentificationApiGenerated
     */
    public sameDevice(requestParameters: IdentificationApiSameDeviceRequest, options?: AxiosRequestConfig) {
        return IdentificationApiFp(this.configuration).sameDevice(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Identification Wildcard  This endpoint allows you to make an HTTP POST request to identify a user without any nin entry.  Wildcards are used with QR codes to create an authentication flow that relies on an unkown user authenticating through a scan only. This scope does not need a nin identifier. Thus the reason it is a wildcard.  ## Request  - Method: POST - URL: `https://{base_url}/api/{version}/identification/wildcard` - Payload Type: Raw       ### Request Body  | Key | Type | Description | | --- | --- | --- | | action | text | Action to be performed | | claims | array | Array of claims | | seeds | number | Number of requests ids to be generated | | payload | text | Payload data |  ## Response  - Status: 201 - Content-Type: application/json       ### Response Body  ``` json {     \"status\": \"\",     \"reason\": \"\",     \"data\": {         \"request\": {             \"id\": \"\",             \"consumer\": \"\",             \"app\": \"\",             \"mode\": \"\",             \"action\": \"\",             \"payload\": \"\",             \"iat\": 0,             \"exp\": 0,             \"user\": \"\",             \"ip\": \"\",             \"useragent\": \"\",             \"name\": \"\",             \"acquireClaims\": [\"\"],             \"signature\": \"\"         },         \"seeds\": [\"\"]     },     \"version\": \"\" }   ```
     * @summary identification:wildcard
     * @param {IdentificationApiWildcardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IdentificationApiGenerated
     */
    public wildcard(requestParameters: IdentificationApiWildcardRequest, options?: AxiosRequestConfig) {
        return IdentificationApiFp(this.configuration).wildcard(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
