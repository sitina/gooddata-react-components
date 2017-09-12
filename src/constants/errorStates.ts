export enum ErrorCodes {
    APP_NO_DATA = 1001,
    EMPTY_AFM = 1002,

    INVALID_BUCKETS = 2001
}

export enum ErrorStates {
    OK = 'OK',
    BAD_REQUEST = 'BAD_REQUEST',
    DATA_TOO_LARGE_TO_DISPLAY = 'DATA_TOO_LARGE_TO_DISPLAY',
    DATA_TOO_LARGE_TO_COMPUTE = 'DATA_TOO_LARGE_TO_COMPUTE',
    NEGATIVE_VALUES = 'NEGATIVE_VALUES',
    NO_DATA = 'NO_DATA',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    NOT_FOUND = 'NOT_FOUND',
    PROMISE_CANCELLED = 'PROMISE_CANCELLED',
    EMPTY_AFM = 'EMPTY_AFM',
    INVALID_BUCKETS = 'INVALID_BUCKETS'
}
