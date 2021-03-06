/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export enum AggregationType {
    RawPointScores = 'rawPointScores',
    SegmentMean = 'segmentMean',
    Vision = 'vision'
}

/**
 * 
 * @export
 * @interface ClassifierOptions
 */
export interface ClassifierOptions {
    /**
     * Save images to gbucket (true), or locally (false)
     * @type {boolean}
     * @memberof ClassifierOptions
     */
    use_gbucket?: boolean;
    /**
     * Only needed if use_gbucket=false. The local path to save images to
     * @type {string}
     * @memberof ClassifierOptions
     */
    local_path?: string;
    /**
     * Only used with local_path. Will delete half the images locally if true after classification
     * @type {boolean}
     * @memberof ClassifierOptions
     */
    prune?: boolean;
    /**
     * @todo
     * @type {boolean}
     * @memberof ClassifierOptions
     */
    save_segmentation?: boolean;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface ImageRequest
 */
export interface ImageRequest {
    /**
     * YYYY-MM-DD[T]HH:MM[:SS[.ffffff]][Z or [??]HH[:]MM]]] or Unix timestamp. The beginning of the timeframe that images are to be pulled for
     * @type {string}
     * @memberof ImageRequest
     */
    start_datetime?: string;
    /**
     * YYYY-MM-DD[T]HH:MM[:SS[.ffffff]][Z or [??]HH[:]MM]]] or Unix timestamp. The end of the timeframe that images are to be pulled for
     * @type {string}
     * @memberof ImageRequest
     */
    end_datetime?: string;
    /**
     * Options
     * @type {Options}
     * @memberof ImageRequest
     */
    options?: Options;
}
/**
 * 
 * @export
 * @interface JobRequestPipeline
 */
export interface JobRequestPipeline {
    /**
     * @todo
     * @type {string}
     * @memberof JobRequestPipeline
     */
    request_layer_name: string;
    /**
     * @todo
     * @type {string}
     * @memberof JobRequestPipeline
     */
    new_layer_prefix?: string;
    /**
     * @todo
     * @type {number}
     * @memberof JobRequestPipeline
     */
    query_area_buffer?: number;
    /**
     * Raw points or aggregated layer
     * @type {Array<AggregationType>}
     * @memberof JobRequestPipeline
     */
    aggregation_types?: Array<AggregationType>;
    /**
     * @todo
     * @type {number}
     * @memberof JobRequestPipeline
     */
    segment_length?: number;
    /**
     * @todo
     * @type {number}
     * @memberof JobRequestPipeline
     */
    segment_buffer?: number;
    /**
     * YYYY-MM-DD[T]HH:MM[:SS[.ffffff]][Z or [??]HH[:]MM]]] or Unix timestamp. The beginning of the timeframe for the new layer
     * @type {string}
     * @memberof JobRequestPipeline
     */
    start_time?: string;
    /**
     * YYYY-MM-DD[T]HH:MM[:SS[.ffffff]][Z or [??]HH[:]MM]]] or Unix timestamp. The end of the timeframe for the new layer
     * @type {string}
     * @memberof JobRequestPipeline
     */
    end_time?: string;
    /**
     * @todo
     * @type {string}
     * @memberof JobRequestPipeline
     */
    request_layer_workspace?: string;
    /**
     * @todo
     * @type {string}
     * @memberof JobRequestPipeline
     */
    new_layer_workspace?: string;
    /**
     * @todo
     * @type {string}
     * @memberof JobRequestPipeline
     */
    classified_by?: string;
    /**
     * @todo
     * @type {Array<number>}
     * @memberof JobRequestPipeline
     */
    included_scores?: Array<number>;
    /**
     * @todo
     * @type {number}
     * @memberof JobRequestPipeline
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface Options
 */
export interface Options {
    /**
     * Resolution of the h3s to request to Nexar
     * @type {number}
     * @memberof Options
     */
    h3_resolution?: number;
    /**
     * Max number of images to download per hex - will update later to pass in number of images per mile and calculate this?
     * @type {number}
     * @memberof Options
     */
    image_limit_per_hex?: number;
    /**
     * Amount to buffer the linestrings to convert to hexes. Currently in degrees.
     * @type {number}
     * @memberof Options
     */
    buffer_distance?: number;
    /**
     * If true will trigger the classifier after ingestion
     * @type {boolean}
     * @memberof Options
     */
    trigger_classifier?: boolean;
    /**
     * Save images to gbucket (true), or locally (false)
     * @type {boolean}
     * @memberof Options
     */
    use_gbucket?: boolean;
    /**
     * Only needed if use_gbucket=false. The local path to save images to
     * @type {string}
     * @memberof Options
     */
    local_path?: string;
}
/**
 * 
 * @export
 * @interface PipelineData
 */
export interface PipelineData {
    /**
     * YYYY-MM-DD[T]HH:MM[:SS[.ffffff]][Z or [??]HH[:]MM]]] or Unix timestamp. The beginning of the timeframe that images are to be pulled for
     * @type {string}
     * @memberof PipelineData
     */
    start?: string;
    /**
     * YYYY-MM-DD[T]HH:MM[:SS[.ffffff]][Z or [??]HH[:]MM]]] or Unix timestamp. The end of the timeframe that images are to be pulled for
     * @type {string}
     * @memberof PipelineData
     */
    end?: string;
    /**
     * Name of the basemap to pull images for
     * @type {string}
     * @memberof PipelineData
     */
    base_layer: string;
    /**
     * Workspace to put the new layer in
     * @type {string}
     * @memberof PipelineData
     */
    new_layer_workspace?: string;
    /**
     * Raw points or aggregated layer
     * @type {Array<AggregationType>}
     * @memberof PipelineData
     */
    aggregation_types?: Array<AggregationType>;
    /**
     * Save the segmented images to a bucket
     * @type {boolean}
     * @memberof PipelineData
     */
    save_segmentation?: boolean;
    /**
     * Time range to pull data to generate the new map layer. See https://github.com/wroberts/pytimeparse for formatting options
     * @type {string}
     * @memberof PipelineData
     */
    layer_time_range?: string;
    /**
     * If true, sets a prefix on the generated layer to indicate corrections are needed
     * @type {boolean}
     * @memberof PipelineData
     */
    correction_layer?: boolean;
    /**
     * Maximum number of images to pull from nexar per hex
     * @type {number}
     * @memberof PipelineData
     */
    image_per_hex_limit?: number;
    /**
     * If blank, all steps are run. Otherwise only steps listed here are run
     * @type {Array<PipelineSteps>}
     * @memberof PipelineData
     */
    steps?: Array<PipelineSteps>;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export enum PipelineSteps {
    ImagePull = 'imagePull',
    Classify = 'classify',
    Aggregate = 'aggregate'
}

/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationError
     */
    loc: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    type: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Start Aggregator
         * @param {JobRequestPipeline} jobRequestPipeline 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startAggregatorAggregatorPost: async (jobRequestPipeline: JobRequestPipeline, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobRequestPipeline' is not null or undefined
            assertParamExists('startAggregatorAggregatorPost', 'jobRequestPipeline', jobRequestPipeline)
            const localVarPath = `/aggregator`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jobRequestPipeline, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Start Classifier
         * @param {ClassifierOptions} [classifierOptions] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startClassifierClassifyPost: async (classifierOptions?: ClassifierOptions, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/classify`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(classifierOptions, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Start Image Pull
         * @param {string} mapId 
         * @param {ImageRequest} imageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startImagePullNexarMapIdPost: async (mapId: string, imageRequest: ImageRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'mapId' is not null or undefined
            assertParamExists('startImagePullNexarMapIdPost', 'mapId', mapId)
            // verify required parameter 'imageRequest' is not null or undefined
            assertParamExists('startImagePullNexarMapIdPost', 'imageRequest', imageRequest)
            const localVarPath = `/nexar/{map_id}`
                .replace(`{${"map_id"}}`, encodeURIComponent(String(mapId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(imageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Start Pipeline
         * @param {PipelineData} pipelineData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startPipelinePipelinePost: async (pipelineData: PipelineData, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pipelineData' is not null or undefined
            assertParamExists('startPipelinePipelinePost', 'pipelineData', pipelineData)
            const localVarPath = `/pipeline`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(pipelineData, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Start Aggregator
         * @param {JobRequestPipeline} jobRequestPipeline 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startAggregatorAggregatorPost(jobRequestPipeline: JobRequestPipeline, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startAggregatorAggregatorPost(jobRequestPipeline, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Start Classifier
         * @param {ClassifierOptions} [classifierOptions] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startClassifierClassifyPost(classifierOptions?: ClassifierOptions, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startClassifierClassifyPost(classifierOptions, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Start Image Pull
         * @param {string} mapId 
         * @param {ImageRequest} imageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startImagePullNexarMapIdPost(mapId: string, imageRequest: ImageRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startImagePullNexarMapIdPost(mapId, imageRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Start Pipeline
         * @param {PipelineData} pipelineData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startPipelinePipelinePost(pipelineData: PipelineData, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startPipelinePipelinePost(pipelineData, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Start Aggregator
         * @param {JobRequestPipeline} jobRequestPipeline 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startAggregatorAggregatorPost(jobRequestPipeline: JobRequestPipeline, options?: any): AxiosPromise<any> {
            return localVarFp.startAggregatorAggregatorPost(jobRequestPipeline, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Start Classifier
         * @param {ClassifierOptions} [classifierOptions] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startClassifierClassifyPost(classifierOptions?: ClassifierOptions, options?: any): AxiosPromise<any> {
            return localVarFp.startClassifierClassifyPost(classifierOptions, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Start Image Pull
         * @param {string} mapId 
         * @param {ImageRequest} imageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startImagePullNexarMapIdPost(mapId: string, imageRequest: ImageRequest, options?: any): AxiosPromise<any> {
            return localVarFp.startImagePullNexarMapIdPost(mapId, imageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Start Pipeline
         * @param {PipelineData} pipelineData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startPipelinePipelinePost(pipelineData: PipelineData, options?: any): AxiosPromise<any> {
            return localVarFp.startPipelinePipelinePost(pipelineData, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Start Aggregator
     * @param {JobRequestPipeline} jobRequestPipeline 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public startAggregatorAggregatorPost(jobRequestPipeline: JobRequestPipeline, options?: any) {
        return DefaultApiFp(this.configuration).startAggregatorAggregatorPost(jobRequestPipeline, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Start Classifier
     * @param {ClassifierOptions} [classifierOptions] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public startClassifierClassifyPost(classifierOptions?: ClassifierOptions, options?: any) {
        return DefaultApiFp(this.configuration).startClassifierClassifyPost(classifierOptions, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Start Image Pull
     * @param {string} mapId 
     * @param {ImageRequest} imageRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public startImagePullNexarMapIdPost(mapId: string, imageRequest: ImageRequest, options?: any) {
        return DefaultApiFp(this.configuration).startImagePullNexarMapIdPost(mapId, imageRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Start Pipeline
     * @param {PipelineData} pipelineData 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public startPipelinePipelinePost(pipelineData: PipelineData, options?: any) {
        return DefaultApiFp(this.configuration).startPipelinePipelinePost(pipelineData, options).then((request) => request(this.axios, this.basePath));
    }
}


