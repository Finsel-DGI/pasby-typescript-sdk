/**
 * 
 * @export
 * @interface IdentificationWildcardResponseDataRequest
 */
export interface IdentificationWildcardResponseDataRequest {
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'consumer': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'app': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'mode': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'action': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'payload'?: string;
    /**
     * 
     * @type {number}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'iat'?: number;
    /**
     * 
     * @type {number}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'exp'?: number;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'user'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'ip'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'useragent'?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'name'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'acquireClaims'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IdentificationWildcardResponseDataRequest
     */
    'signature'?: string;
}

