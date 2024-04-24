import { IdentificationDifferentDeviceResponseData } from './identification-different-device-response-data';

/**
 * 
 * @export
 * @interface IdentificationDifferentDeviceResponse
 */
export interface IdentificationDifferentDeviceResponse {
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponse
     */
    'version': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponse
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponse
     */
    'reason': string;
    /**
     * 
     * @type {IdentificationDifferentDeviceResponseData}
     * @memberof IdentificationDifferentDeviceResponse
     */
    'data': IdentificationDifferentDeviceResponseData;
}

