import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../../sdk/configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import {
    DUMMY_BASE_URL, assertParamExists,
    setApiKeyToObject, setSearchParams,
    serializeDataIfNeeded, toPathString,
    createRequestFunction, isBrowser, setJwtToObject
} from '../../sdk/common';
// @ts-ignore
import { BASE_PATH, RequestArgs, BaseAPI, RequiredError } from '../../sdk/base';
// @ts-ignore
import { PasbyDocSignRequest } from '../../modules/models';
// @ts-ignore
import { PasbyDocSignResponse } from '../../modules/models';
import { requestBeforeHook } from '../../sdk/components/requestBeforeHook';
/**
 * DocsApi - axios parameter creator
 * @export
 */
export const DocsApiAxiosParamCreator = function (configuration: Configuration) {
    return {
        /**
         * API Request Description  This HTTP POST request is used to initiate the signing of a document. The request should be sent to the endpoint `https://{base_url}/api/{version}/document/signing` with a JSON payload in the raw request body type. The payload should include the recipient information, file details, and webhook configuration.  #### Request Payload  - `to` (array): An array of recipient nin(s).      - `file` (object): An object containing the URL and title of the file to be signed.     - `url`: The URL of the file to be signed.     - `title`: The title or name of the file. - `webhook` (object): An object containing the host and reference for webhook configuration.     - `host`: The host for the webhook.     - `reference`: The reference for the webhook.  ### API Response  Upon successful execution, the API returns a status code of 201 and a JSON response with the following structure:  - `status`: The status of the response. - `reason`: The reason for the response status. - `data` (object): An object containing the details of the request and version information.          - `request` (object): An object containing the details of the request.                  - `id`: The ID of the request.         - `to`: An array of recipient nin(s).                      - `useragent`: The user agent information.         - `destination`: The destination information.         - `lut`: The timestamp for last update time.         - `iat`: The timestamp for issuance time.         - `exp`: The timestamp for expiration time.         - `handled`: A boolean indicating if the request has been handled.         - `file` (object): An object containing the source and name of the file.             - `source`: The source of the file.             - `name`: The name of the file.         - `hook` (object): An object containing the host and reference for the webhook.             - `host`: The host for the webhook.             - `reference`: The reference for the webhook.         - `request` (object): An object containing client, app, and IP details.             - `client`: The client information.             - `app`: The app information.             - `ip`: The IP address.     - `version`: The version information.
         * @summary document:sign
         * @param {PasbyDocSignRequest} pasbyDocSignRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        docSign: async (pasbyDocSignRequest: PasbyDocSignRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pasbyDocSignRequest' is not null or undefined
            assertParamExists('docSign', 'pasbyDocSignRequest', pasbyDocSignRequest)
            const localVarPath = `/api/${configuration.versioning}/document/signing`;
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
                requestBody: pasbyDocSignRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: `/api/${configuration.versioning}/document/signing`,
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(pasbyDocSignRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocsApi - functional programming interface
 * @export
 */
export const DocsApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = DocsApiAxiosParamCreator(configuration)
    return {
        /**
         * API Request Description  This HTTP POST request is used to initiate the signing of a document. The request should be sent to the endpoint `https://{base_url}/api/{version}/document/signing` with a JSON payload in the raw request body type. The payload should include the recipient information, file details, and webhook configuration.  #### Request Payload  - `to` (array): An array of recipient nin(s).      - `file` (object): An object containing the URL and title of the file to be signed.     - `url`: The URL of the file to be signed.     - `title`: The title or name of the file. - `webhook` (object): An object containing the host and reference for webhook configuration.     - `host`: The host for the webhook.     - `reference`: The reference for the webhook.  ### API Response  Upon successful execution, the API returns a status code of 201 and a JSON response with the following structure:  - `status`: The status of the response. - `reason`: The reason for the response status. - `data` (object): An object containing the details of the request and version information.          - `request` (object): An object containing the details of the request.                  - `id`: The ID of the request.         - `to`: An array of recipient nin(s).                      - `useragent`: The user agent information.         - `destination`: The destination information.         - `lut`: The timestamp for last update time.         - `iat`: The timestamp for issuance time.         - `exp`: The timestamp for expiration time.         - `handled`: A boolean indicating if the request has been handled.         - `file` (object): An object containing the source and name of the file.             - `source`: The source of the file.             - `name`: The name of the file.         - `hook` (object): An object containing the host and reference for the webhook.             - `host`: The host for the webhook.             - `reference`: The reference for the webhook.         - `request` (object): An object containing client, app, and IP details.             - `client`: The client information.             - `app`: The app information.             - `ip`: The IP address.     - `version`: The version information.
         * @summary document:sign
         * @param {DocsApiDocSignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async docSign(requestParameters: DocsApiDocSignRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PasbyDocSignResponse>> {
            const pasbyDocSignRequest: PasbyDocSignRequest = {
                to: requestParameters.to,
                file: requestParameters.file,
                webhook: requestParameters.webhook
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.docSign(pasbyDocSignRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DocsApi - factory interface
 * @export
 */
export const DocsApiFactory = function (configuration: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DocsApiFp(configuration)
    return {
        /**
         * ### API Request Description  This HTTP POST request is used to initiate the signing of a document. The request should be sent to the endpoint `https://{base_url}/api/{version}/document/signing` with a JSON payload in the raw request body type. The payload should include the recipient information, file details, and webhook configuration.  #### Request Payload  - `to` (array): An array of recipient nin(s).      - `file` (object): An object containing the URL and title of the file to be signed.     - `url`: The URL of the file to be signed.     - `title`: The title or name of the file. - `webhook` (object): An object containing the host and reference for webhook configuration.     - `host`: The host for the webhook.     - `reference`: The reference for the webhook.  ### API Response  Upon successful execution, the API returns a status code of 201 and a JSON response with the following structure:  - `status`: The status of the response. - `reason`: The reason for the response status. - `data` (object): An object containing the details of the request and version information.          - `request` (object): An object containing the details of the request.                  - `id`: The ID of the request.         - `to`: An array of recipient nin(s).                      - `useragent`: The user agent information.         - `destination`: The destination information.         - `lut`: The timestamp for last update time.         - `iat`: The timestamp for issuance time.         - `exp`: The timestamp for expiration time.         - `handled`: A boolean indicating if the request has been handled.         - `file` (object): An object containing the source and name of the file.             - `source`: The source of the file.             - `name`: The name of the file.         - `hook` (object): An object containing the host and reference for the webhook.             - `host`: The host for the webhook.             - `reference`: The reference for the webhook.         - `request` (object): An object containing client, app, and IP details.             - `client`: The client information.             - `app`: The app information.             - `ip`: The IP address.     - `version`: The version information.
         * @summary document:sign
         * @param {DocsApiDocSignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        docSign(requestParameters: DocsApiDocSignRequest, options?: AxiosRequestConfig): AxiosPromise<PasbyDocSignResponse> {
            return localVarFp.docSign(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for docSign operation in DocsApi.
 * @export
 * @interface DocsApiDocSignRequest
 */
export type DocsApiDocSignRequest = {
    
} & PasbyDocSignRequest

/**
 * DocsApiGenerated - object-oriented interface
 * @export
 * @class DocsApiGenerated
 * @extends {BaseAPI}
 */
export class DocsApiGenerated extends BaseAPI {
    /**
     * API Request Description  This HTTP POST request is used to initiate the signing of a document. The request should be sent to the endpoint `https://{base_url}/api/{version}/document/signing` with a JSON payload in the raw request body type. The payload should include the recipient information, file details, and webhook configuration.  #### Request Payload  - `to` (array): An array of recipient nin(s).      - `file` (object): An object containing the URL and title of the file to be signed.     - `url`: The URL of the file to be signed.     - `title`: The title or name of the file. - `webhook` (object): An object containing the host and reference for webhook configuration.     - `host`: The host for the webhook.     - `reference`: The reference for the webhook.  ### API Response  Upon successful execution, the API returns a status code of 201 and a JSON response with the following structure:  - `status`: The status of the response. - `reason`: The reason for the response status. - `data` (object): An object containing the details of the request and version information.          - `request` (object): An object containing the details of the request.                  - `id`: The ID of the request.         - `to`: An array of recipient nin(s).                      - `useragent`: The user agent information.         - `destination`: The destination information.         - `lut`: The timestamp for last update time.         - `iat`: The timestamp for issuance time.         - `exp`: The timestamp for expiration time.         - `handled`: A boolean indicating if the request has been handled.         - `file` (object): An object containing the source and name of the file.             - `source`: The source of the file.             - `name`: The name of the file.         - `hook` (object): An object containing the host and reference for the webhook.             - `host`: The host for the webhook.             - `reference`: The reference for the webhook.         - `request` (object): An object containing client, app, and IP details.             - `client`: The client information.             - `app`: The app information.             - `ip`: The IP address.     - `version`: The version information.
     * @summary document:sign
     * @param {DocsApiDocSignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApiGenerated
     */
    public docSign(requestParameters: DocsApiDocSignRequest, options?: AxiosRequestConfig) {
        return DocsApiFp(this.configuration).docSign(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
