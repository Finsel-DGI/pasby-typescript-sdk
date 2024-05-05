import { FlowActionType } from "../../shared";

/**
 * 
 * @export
 * @interface IdentificationDifferentDeviceResponseDataRequest
 */
export interface IdentificationDifferentDeviceResponseDataRequest {
    /**
     * Request identifier usually starts with req_
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'consumer'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'app'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'mode'?: string;
    /**
     * 
     * @type {FlowActionType}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'action': FlowActionType;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'payload': string;
    /**
     * 
     * @type {number}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'iat': number;
    /**
     * 
     * @type {number}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'exp'?: number;
    /**
     * African national on pasby
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'user'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'ip'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'useragent'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'name'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'acquireClaims'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceResponseDataRequest
     */
    'signature'?: string;
}

