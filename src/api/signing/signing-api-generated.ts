import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../../sdk/configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import {
    DUMMY_BASE_URL, assertParamExists, setApiKeyToObject,
    setSearchParams, serializeDataIfNeeded, toPathString,
    createRequestFunction, isBrowser
} from '../../sdk/common';
// @ts-ignore
import { BASE_PATH, RequestArgs, BaseAPI } from '../../sdk/base';
// @ts-ignore
import { SigningDifferentDeviceRequest } from '../../modules/models';
// @ts-ignore
import { SigningDifferentDeviceResponse } from '../../modules/models';
// @ts-ignore
import { SigningSameDeviceRequest } from '../../modules/models';
// @ts-ignore
import { SigningSameDeviceResponse } from '../../modules/models';
import { requestBeforeHook } from '../../sdk/components/requestBeforeHook';
import { WildcardSigningRequest } from '../../modules/models/signing/signing-wildcard-request';
import { SigningWildcardResponse } from '../../modules/models/signing/signing-wildcard-response';
/**
 * SigningApi - axios parameter creator
 * @export
 */
export const SigningApiAxiosParamCreator = function (configuration: Configuration) {
    return {
        /**
         * This endpoint allows you to initiate a signing action on a different device by sending a POST request to https://{base_url}/api/{version}/signing/different-device.  Request Body  - `nin` (string, required): The National Identification Number. - `action` (string, required): The action to be performed. - `webhook` (object, required): An object containing webhook details.     - `host` (string, required): The host for the webhook.     - `reference` (string, required): The reference for the webhook. - `payload` (string, required): The payload for the signing action.   Response  - Status: 201 - Content-Type: application/json       #### Response Body  ``` json {   \"status\": \"\",   \"reason\": \"\",   \"data\": {     \"request\": {       \"id\": \"\",       \"consumer\": \"\",       \"app\": \"\",       \"mode\": \"\",       \"action\": \"\",       \"payload\": \"\",       \"iat\": 0,       \"exp\": 0,       \"user\": \"\",       \"ip\": \"\",       \"useragent\": \"\",       \"name\": \"\",       \"signature\": \"\"     },     \"version\": \"\"   } }   ```  The response contains the status, reason, data, and version information related to the signing action request.
         * @summary signing:another
         * @param {SigningDifferentDeviceRequest} signingDifferentDeviceRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        differentDevice: async (signingDifferentDeviceRequest: SigningDifferentDeviceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signingDifferentDeviceRequest' is not null or undefined
            assertParamExists('differentDevice', 'signingDifferentDeviceRequest', signingDifferentDeviceRequest)
            const localVarPath = `/api/${configuration.versioning}/signing/different-device`;
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
                requestBody: signingDifferentDeviceRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/signing/different-device`,
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(signingDifferentDeviceRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint allows you to make an HTTP POST request to https://{base_url}/api/{version}/signing/same-device in order to perform a specific action. The request should include a payload with the following parameters in raw JSON format:  - \"nin\": (string) National Identification number of signee      - \"action\": (string) What kind of signing action      - \"webhook\": (object) An object containing the following properties:          - \"host\": (string) Host url              - \"reference\": (string) Something to help you identify our response           - \"payload\": (string) information to be prsented during signing       Upon successful execution, the API will return a response with status code 201 and content type application/json. The response body will contain the following properties:  - \"status\": (string) The status of the response - \"reason\": (string) The reason for the response - \"data\": (object) An object containing the following properties:          - \"link\": (string) You use this link to open up the pasby™ mobile app automatically              - \"request\": (object) An object containing details about the request, including:                  - \"id\": (string) Reference ID                      - \"consumer\": (string) Organisation of app which created the flow                      - \"app\": (string) The app id requesting for a signing flow                      - \"mode\": (string) \\[Would always be signature for this kind of flows\\]                      - \"action\": (string) Action stipulated for this flow, during creation                      - \"payload\": (string)                      - \"iat\": (number) Time created                      - \"exp\": (number) When request expires                      - \"user\": (string) pasby™ user by nin                      - \"ip\": (string) where this flow was generated from                      - \"useragent\": (string)                      - \"name\": (string) app name                      - \"signature\": (string) This serves to verify that this response came from pasby™               - \"version\": (string) The version of the response
         * @summary signing:same
         * @param {SigningSameDeviceRequest} signingSameDeviceRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sameDevice: async (signingSameDeviceRequest: SigningSameDeviceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signingSameDeviceRequest' is not null or undefined
            assertParamExists('sameDevice', 'signingSameDeviceRequest', signingSameDeviceRequest)
            const localVarPath = `/api/${configuration.versioning}/signing/same-device`;
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
                requestBody: signingSameDeviceRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/signing/same-device`,
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(signingSameDeviceRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        
        /**
         * This endpoint allows you to make an HTTP POST request to https://{base_url}/api/{version}/signing/wildcard in order to perform a specific action. The request should include a payload with a number of seeds request. The seeds will then be used to present a QR code to your audience. 
         * @summary signing:wildcard
         * @param {WildcardApiSigningRequest} wildcardRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wildcard: async (wildcardRequest: WildcardApiSigningRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wildcardRequest' is not null or undefined
            assertParamExists('wildcard', 'wildcardRequest', wildcardRequest)
            const localVarPath = `/api/${configuration.versioning}/signing/wildcard`;
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
                requestBody: wildcardRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/signing/wildcard`,
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(wildcardRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SigningApi - functional programming interface
 * @export
 */
export const SigningApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = SigningApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint allows you to initiate a signing action on a different device by sending a POST request to https://{base_url}/api/{version}/signing/different-device.  ### Request Body  - `nin` (string, required): The National Identification Number. - `action` (string, required): The action to be performed. - `webhook` (object, required): An object containing webhook details.     - `host` (string, required): The host for the webhook.     - `reference` (string, required): The reference for the webhook. - `payload` (string, required): The payload for the signing action.      Response  - Status: 201 - Content-Type: application/json      Response Body  ``` json {   \"status\": \"\",   \"reason\": \"\",   \"data\": {     \"request\": {       \"id\": \"\",       \"consumer\": \"\",       \"app\": \"\",       \"mode\": \"\",       \"action\": \"\",       \"payload\": \"\",       \"iat\": 0,       \"exp\": 0,       \"user\": \"\",       \"ip\": \"\",       \"useragent\": \"\",       \"name\": \"\",       \"signature\": \"\"     },     \"version\": \"\"   } }   ```  The response contains the status, reason, data, and version information related to the signing action request.
         * @summary signing:another
         * @param {SigningApiDifferentDeviceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async differentDevice(requestParameters: SigningApiDifferentDeviceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SigningDifferentDeviceResponse>> {
            const signingDifferentDeviceRequest: SigningDifferentDeviceRequest = {
                nin: requestParameters.nin,
                action: requestParameters.action,
                webhook: requestParameters.webhook,
                payload: requestParameters.payload
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.differentDevice(signingDifferentDeviceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint allows you to make an HTTP POST request to https://{base_url}/api/{version}/signing/same-device in order to perform a specific action. The request should include a payload with the following parameters in raw JSON format:  - \"nin\": (string) National Identification number of signee      - \"action\": (string) What kind of signing action      - \"webhook\": (object) An object containing the following properties:          - \"host\": (string) Host url              - \"reference\": (string) Something to help you identify our response           - \"payload\": (string) information to be prsented during signing       Upon successful execution, the API will return a response with status code 201 and content type application/json. The response body will contain the following properties:  - \"status\": (string) The status of the response - \"reason\": (string) The reason for the response - \"data\": (object) An object containing the following properties:          - \"link\": (string) You use this link to open up the pasby™ mobile app automatically              - \"request\": (object) An object containing details about the request, including:                  - \"id\": (string) Reference ID                      - \"consumer\": (string) Organisation of app which created the flow                      - \"app\": (string) The app id requesting for a signing flow                      - \"mode\": (string) \\[Would always be signature for this kind of flows\\]                      - \"action\": (string) Action stipulated for this flow, during creation                      - \"payload\": (string)                      - \"iat\": (number) Time created                      - \"exp\": (number) When request expires                      - \"user\": (string) pasby™ user by nin                      - \"ip\": (string) where this flow was generated from                      - \"useragent\": (string)                      - \"name\": (string) app name                      - \"signature\": (string) This serves to verify that this response came from pasby™               - \"version\": (string) The version of the response
         * @summary signing:same
         * @param {SigningApiSameDeviceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sameDevice(requestParameters: SigningApiSameDeviceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SigningSameDeviceResponse>> {
            const signingSameDeviceRequest: SigningSameDeviceRequest = {
                nin: requestParameters.nin,
                action: requestParameters.action,
                webhook: requestParameters.webhook,
                payload: requestParameters.payload
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.sameDevice(signingSameDeviceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        
        /**
         * This endpoint allows you to make an HTTP POST request to https://{base_url}/api/{version}/signing/wildcard in order to perform a specific action. The request should include a payload with a number of seeds request. The seeds will then be used to present a QR code to your audience. 
         * @summary signing:wildcard
         * @param {WildcardApiSigningRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wildcard(requestParameters: WildcardApiSigningRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SigningWildcardResponse>> {
            const wildcardRequest: WildcardApiSigningRequest = {
                action: requestParameters.action,
                webhook: requestParameters.webhook,
                seeds: requestParameters.seeds,
                payload: requestParameters.payload
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.wildcard(wildcardRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        
    }
};

/**
 * SigningApi - factory interface
 * @export
 */
export const SigningApiFactory = function (configuration: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SigningApiFp(configuration)
    return {
        /**
         * This endpoint allows you to initiate a signing action on a different device by sending a POST request to https://{base_url}/api/{version}/signing/different-device.  ### Request Body  - `nin` (string, required): The National Identification Number. - `action` (string, required): The action to be performed. - `webhook` (object, required): An object containing webhook details.     - `host` (string, required): The host for the webhook.     - `reference` (string, required): The reference for the webhook. - `payload` (string, required): The payload for the signing action.     Response  - Status: 201 - Content-Type: application/json      Response Body  ``` json {   \"status\": \"\",   \"reason\": \"\",   \"data\": {     \"request\": {       \"id\": \"\",       \"consumer\": \"\",       \"app\": \"\",       \"mode\": \"\",       \"action\": \"\",       \"payload\": \"\",       \"iat\": 0,       \"exp\": 0,       \"user\": \"\",       \"ip\": \"\",       \"useragent\": \"\",       \"name\": \"\",       \"signature\": \"\"     },     \"version\": \"\"   } }   ```  The response contains the status, reason, data, and version information related to the signing action request.
         * @summary signing:another
         * @param {SigningApiDifferentDeviceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        differentDevice(requestParameters: SigningApiDifferentDeviceRequest, options?: AxiosRequestConfig): AxiosPromise<SigningDifferentDeviceResponse> {
            return localVarFp.differentDevice(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint allows you to make an HTTP POST request to https://{base_url}/api/{version}/signing/same-device in order to perform a specific action. The request should include a payload with the following parameters in raw JSON format:  - \"nin\": (string) National Identification number of signee      - \"action\": (string) What kind of signing action      - \"webhook\": (object) An object containing the following properties:          - \"host\": (string) Host url              - \"reference\": (string) Something to help you identify our response           - \"payload\": (string) information to be prsented during signing       Upon successful execution, the API will return a response with status code 201 and content type application/json. The response body will contain the following properties:  - \"status\": (string) The status of the response - \"reason\": (string) The reason for the response - \"data\": (object) An object containing the following properties:          - \"link\": (string) You use this link to open up the pasby™ mobile app automatically              - \"request\": (object) An object containing details about the request, including:                  - \"id\": (string) Reference ID                      - \"consumer\": (string) Organisation of app which created the flow                      - \"app\": (string) The app id requesting for a signing flow                      - \"mode\": (string) \\[Would always be signature for this kind of flows\\]                      - \"action\": (string) Action stipulated for this flow, during creation                      - \"payload\": (string)                      - \"iat\": (number) Time created                      - \"exp\": (number) When request expires                      - \"user\": (string) pasby™ user by nin                      - \"ip\": (string) where this flow was generated from                      - \"useragent\": (string)                      - \"name\": (string) app name                      - \"signature\": (string) This serves to verify that this response came from pasby™               - \"version\": (string) The version of the response
         * @summary signing:same
         * @param {SigningApiSameDeviceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sameDevice(requestParameters: SigningApiSameDeviceRequest, options?: AxiosRequestConfig): AxiosPromise<SigningSameDeviceResponse> {
            return localVarFp.sameDevice(requestParameters, options).then((request) => request(axios, basePath));
        },
        
        /**
         * This endpoint allows you to make an HTTP POST request to https://{base_url}/api/{version}/signing/wildcard in order to perform a specific action. The request should include a payload with a number of seeds request. The seeds will then be used to present a QR code to your audience. 
         * @summary signing:wildcard
         * @param {WildcardApiSigningRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wildcard(requestParameters: WildcardApiSigningRequest, options?: AxiosRequestConfig): AxiosPromise<SigningWildcardResponse> {
            return localVarFp.wildcard(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for differentDevice operation in SigningApi.
 * @export
 * @interface SigningApiDifferentDeviceRequest
 */
export type SigningApiDifferentDeviceRequest = {
    
} & SigningDifferentDeviceRequest

/**
 * Request parameters for sameDevice operation in SigningApi.
 * @export
 * @interface SigningApiSameDeviceRequest
 */
export type SigningApiSameDeviceRequest = {
    
} & SigningSameDeviceRequest

/**
 * Request parameters for wildcard operation in SigningApi.
 * @export
 * @interface WildcardApiSigningRequest
 */
export type WildcardApiSigningRequest = {
    
} & WildcardSigningRequest

/**
 * SigningApiGenerated - object-oriented interface
 * @export
 * @class SigningApiGenerated
 * @extends {BaseAPI}
 */
export class SigningApiGenerated extends BaseAPI {
    /**
     * This endpoint allows you to initiate a signing action on a different device by sending a POST request to https://{base_url}/api/{version}/signing/different-device.  ### Request Body  - `nin` (string, required): The National Identification Number. - `action` (string, required): The action to be performed. - `webhook` (object, required): An object containing webhook details.     - `host` (string, required): The host for the webhook.     - `reference` (string, required): The reference for the webhook. - `payload` (string, required): The payload for the signing action.       ### Response  - Status: 201 - Content-Type: application/json       #### Response Body  ``` json {   \"status\": \"\",   \"reason\": \"\",   \"data\": {     \"request\": {       \"id\": \"\",       \"consumer\": \"\",       \"app\": \"\",       \"mode\": \"\",       \"action\": \"\",       \"payload\": \"\",       \"iat\": 0,       \"exp\": 0,       \"user\": \"\",       \"ip\": \"\",       \"useragent\": \"\",       \"name\": \"\",       \"signature\": \"\"     },     \"version\": \"\"   } }   ```  The response contains the status, reason, data, and version information related to the signing action request.
     * @summary signing:another
     * @param {SigningApiDifferentDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SigningApiGenerated
     */
    public differentDevice(requestParameters: SigningApiDifferentDeviceRequest, options?: AxiosRequestConfig) {
        return SigningApiFp(this.configuration).differentDevice(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to make an HTTP POST request to https://{base_url}/api/{version}/signing/same-device in order to perform a specific action. The request should include a payload with the following parameters in raw JSON format:  - \"nin\": (string) National Identification number of signee      - \"action\": (string) What kind of signing action      - \"webhook\": (object) An object containing the following properties:          - \"host\": (string) Host url              - \"reference\": (string) Something to help you identify our response           - \"payload\": (string) information to be prsented during signing       Upon successful execution, the API will return a response with status code 201 and content type application/json. The response body will contain the following properties:  - \"status\": (string) The status of the response - \"reason\": (string) The reason for the response - \"data\": (object) An object containing the following properties:          - \"link\": (string) You use this link to open up the pasby™ mobile app automatically              - \"request\": (object) An object containing details about the request, including:                  - \"id\": (string) Reference ID                      - \"consumer\": (string) Organisation of app which created the flow                      - \"app\": (string) The app id requesting for a signing flow                      - \"mode\": (string) \\[Would always be signature for this kind of flows\\]                      - \"action\": (string) Action stipulated for this flow, during creation                      - \"payload\": (string)                      - \"iat\": (number) Time created                      - \"exp\": (number) When request expires                      - \"user\": (string) pasby™ user by nin                      - \"ip\": (string) where this flow was generated from                      - \"useragent\": (string)                      - \"name\": (string) app name                      - \"signature\": (string) This serves to verify that this response came from pasby™               - \"version\": (string) The version of the response
     * @summary signing:same
     * @param {SigningApiSameDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SigningApiGenerated
     */
    public sameDevice(requestParameters: SigningApiSameDeviceRequest, options?: AxiosRequestConfig) {
        return SigningApiFp(this.configuration).sameDevice(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint allows you to make an HTTP POST request to https://{base_url}/api/{version}/signing/wildcard in order to perform a specific action. The request should include a payload with a number of seeds request. The seeds will then be used to present a QR code to your audience. 
     * @summary signing:wildcard
     * @param {WildcardApiSigningRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SigningApiGenerated
     */
    public wildcard(requestParameters: WildcardApiSigningRequest, options?: AxiosRequestConfig) {
        return SigningApiFp(this.configuration).wildcard(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
