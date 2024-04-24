
/**
 * 
 * @export
 * @interface FlowsPingResponseDataRequest
 */
export interface FlowsPingResponseDataRequest {
    /**
     * 
     * @type {string}
     * @memberof FlowsPingResponseDataRequest
     */
    'reference': string;
    /**
     * 
     * @type {string}
     * @memberof FlowsPingResponseDataRequest
     */
    'requester': string;
    /**
     * 
     * @type {string}
     * @memberof FlowsPingResponseDataRequest
     */
    'requestee': string;
    /**
     * 
     * @type {string}
     * @memberof FlowsPingResponseDataRequest
     */
    'mode': string;
    /**
     * 
     * @type {string}
     * @memberof FlowsPingResponseDataRequest
     */
    'data'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FlowsPingResponseDataRequest
     */
    'cancelled': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FlowsPingResponseDataRequest
     */
    'onsession'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FlowsPingResponseDataRequest
     */
    'iat': number;
    /**
     * 
     * @type {Record<string, unknown>}
     * @memberof Record<string, unknown>
     */
    'claims'?: Record<string, unknown>;
    /**
     * 
     * @type {string}
     * @memberof FlowsPingResponseDataRequest
     */
    'signature'?: string;
    /**
     * 
     * @type {number}
     * @memberof FlowsPingResponseDataRequest
     */
    'signedAt'?: number;
}

