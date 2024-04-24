
/**
 * 
 * @export
 * @interface FlowsCancelResponseDataModel
 */
export interface FlowsCancelResponseDataModel {
    /**
     * Flow identifier 
     * @type {string}
     * @memberof FlowsCancelResponseDataModel
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponseDataModel
     */
    'consumer': string;
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponseDataModel
     */
    'app': string;
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponseDataModel
     */
    'mode'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponseDataModel
     */
    'action'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponseDataModel
     */
    'payload'?: string;
    /**
     * Date created
     * @type {number}
     * @memberof FlowsCancelResponseDataModel
     */
    'iat'?: number;
    /**
     * Date of expiration
     * @type {number}
     * @memberof FlowsCancelResponseDataModel
     */
    'exp'?: number;
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponseDataModel
     */
    'user'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponseDataModel
     */
    'ip'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowsCancelResponseDataModel
     */
    'useragent'?: string;
    /**
     * Consumer organisation name
     * @type {string}
     * @memberof FlowsCancelResponseDataModel
     */
    'name'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FlowsCancelResponseDataModel
     */
    'acquireClaims'?: Array<string>;
}

