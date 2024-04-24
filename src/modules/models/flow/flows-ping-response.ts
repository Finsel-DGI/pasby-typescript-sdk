
import { FlowsPingResponseData } from './flows-ping-response-data';

/**
 * 
 * @export
 * @interface FlowsPingResponse
 */
export interface FlowsPingResponse {
    /**
     * 
     * @type {string}
     * @memberof FlowsPingResponse
     */
    'version': string;
    /**
     * 
     * @type {string}
     * @memberof FlowsPingResponse
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof FlowsPingResponse
     */
    'reason': string;
    /**
     * 
     * @type {FlowsPingResponseData}
     * @memberof FlowsPingResponse
     */
    'data': FlowsPingResponseData;
}

