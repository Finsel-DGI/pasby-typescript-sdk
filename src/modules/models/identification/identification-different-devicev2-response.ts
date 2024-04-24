import { IdentificationDifferentDevicev2ResponseData } from './identification-different-devicev2-response-data';

/**
 * 
 * @export
 * @interface IdentificationDifferentDevicev2Response
 */
export interface IdentificationDifferentDevicev2Response {
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDevicev2Response
     */
    'version': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDevicev2Response
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDevicev2Response
     */
    'reason': string;
    /**
     * 
     * @type {IdentificationDifferentDevicev2ResponseData}
     * @memberof IdentificationDifferentDevicev2Response
     */
    'data': IdentificationDifferentDevicev2ResponseData;
}

