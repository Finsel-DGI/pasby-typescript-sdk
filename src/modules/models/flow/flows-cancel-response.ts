
import { FlowsCancelResponseData } from './flows-cancel-response-data';

/**
 * 
 * @export
 * @interface FlowsCancelResponse
 */
export interface FlowsCancelResponse {
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponse
     */
    'version'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponse
     */
    'reason'?: string;
    /**
     * 
     * @type {FlowsCancelResponseData}
     * @memberof FlowsCancelResponse
     */
    'data'?: FlowsCancelResponseData;
}

