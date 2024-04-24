import { IdentificationWildcardResponseDataRequest } from './identification-wildcard-response-data-request';

/**
 * 
 * @export
 * @interface IdentificationWildcardResponseData
 */
export interface IdentificationWildcardResponseData {
    /**
     * 
     * @type {IdentificationWildcardResponseDataRequest}
     * @memberof IdentificationWildcardResponseData
     */
    'request': IdentificationWildcardResponseDataRequest;
    /**
     * You'd receive a list of pasby branded deep links flow request for your required users to scan
     * @type {Array<string>}
     * @memberof IdentificationWildcardResponseData
     */
    'seeds': Array<string>;
}

