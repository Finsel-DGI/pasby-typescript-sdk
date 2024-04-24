import { IdentificationWildcardResponseData } from './identification-wildcard-response-data';

/**
 * 
 * @export
 * @interface IdentificationWildcardResponse
 */
export interface IdentificationWildcardResponse {
    /**
     * API version
     * @type {string}
     * @memberof IdentificationWildcardResponse
     */
    'version': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponse
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponse
     */
    'reason': string;
    /**
     * 
     * @type {IdentificationWildcardResponseData}
     * @memberof IdentificationWildcardResponse
     */
    'data'?: IdentificationWildcardResponseData;
}

