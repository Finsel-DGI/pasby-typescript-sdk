import { IdentificationSameDeviceResponseData } from './identification-same-device-response-data';

/**
 * 
 * @export
 * @interface IdentificationSameDeviceResponse
 */
export interface IdentificationSameDeviceResponse {
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponse
     */
    'version': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponse
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponse
     */
    'reason': string;
    /**
     * 
     * @type {IdentificationSameDeviceResponseData}
     * @memberof IdentificationSameDeviceResponse
     */
    'data': IdentificationSameDeviceResponseData;
}

