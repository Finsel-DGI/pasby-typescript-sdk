import { FlowActionType } from "../../shared";

/**
 * 
 * @export
 * @interface SigningResponseDataRequest
 */
export interface SigningResponseDataRequest {
    /**
     * Reference ID
     * @type {string}
     * @memberof SigningResponseDataRequest
     */
    'id': string;
    /**
     * Organisation of app which created the flow
     * @type {string}
     * @memberof SigningResponseDataRequest
     */
    'consumer': string;
    /**
     * The app id requesting for a signing flow
     * @type {string}
     * @memberof SigningResponseDataRequest
     */
    'app': string;
    /**
     * [Would always be signature for this kind of flows]
     * @type {string}
     * @memberof SigningResponseDataRequest
     */
    'mode': string;
    /**
     * Action stipulated for this flow, during creation
     * @type {FlowActionType}
     * @memberof SigningResponseDataRequest
     */
    'action': FlowActionType;
    /**
     * 
     * @type {string}
     * @memberof SigningResponseDataRequest
     */
    'payload'?: string;
    /**
     * Time created
     * @type {number}
     * @memberof SigningResponseDataRequest
     */
    'iat'?: number;
    /**
     * When request expires
     * @type {number}
     * @memberof SigningResponseDataRequest
     */
    'exp'?: number;
    /**
     * pasby™ user by nin
     * @type {string}
     * @memberof SigningResponseDataRequest
     */
    'user'?: string;
    /**
     * where this flow was generated from
     * @type {string}
     * @memberof SigningResponseDataRequest
     */
    'ip'?: string;
    /**
     * 
     * @type {string}
     * @memberof SigningResponseDataRequest
     */
    'useragent'?: string;
    /**
     * app name
     * @type {string}
     * @memberof SigningResponseDataRequest
     */
    'name'?: string;
    /**
     * This serves to verify that this response came from our servers
     * @type {string}
     * @memberof SigningResponseDataRequest
     */
    'signature'?: string;
}

