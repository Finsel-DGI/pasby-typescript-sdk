/**
 * 
 * @export
 * @interface IdentificationSameDeviceResponseDataRequest
 */
export interface IdentificationSameDeviceResponseDataRequest {
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'consumer'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'app'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'mode'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'action'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'payload'?: string;
    /**
     * 
     * @type {number}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'iat'?: number;
    /**
     * 
     * @type {number}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'exp'?: number;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'user'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'ip'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'useragent'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'name'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'acquireClaims'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IdentificationSameDeviceResponseDataRequest
     */
    'signature'?: string;
}

