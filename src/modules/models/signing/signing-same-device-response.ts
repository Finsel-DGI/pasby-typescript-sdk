import { SigningSameDeviceResponseData } from './signing-same-device-response-data';

/**
 * 
 * @export
 * @interface SigningSameDeviceResponse
 */
export interface SigningSameDeviceResponse {
    /**
     * The version of the response
     * @type {string}
     * @memberof SigningSameDeviceResponse
     */
    'version': string;
    /**
     * The status of the response
     * @type {string}
     * @memberof SigningSameDeviceResponse
     */
    'status': string;
    /**
     * The reason for the response
     * @type {string}
     * @memberof SigningSameDeviceResponse
     */
    'reason': string;
    /**
     * An object containing the following properties
     * @type {SigningSameDeviceResponseData}
     * @memberof SigningSameDeviceResponse
     */
    'data'?: SigningSameDeviceResponseData;
}

