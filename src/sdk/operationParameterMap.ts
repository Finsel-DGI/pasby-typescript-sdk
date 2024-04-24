type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/v1/document/signing-POST': {
        parameters: [
            {
                name: 'to'
            },
            {
                name: 'file'
            },
            {
                name: 'webhook'
            },
        ]
    },
    '/api/v1/flow/authorize-GET': {
        parameters: [
            {
                name: 'sub'
            },
            {
                name: 'app'
            },
        ]
    },
    '/api/v1/flow/cancel-POST': {
        parameters: [
            {
                name: 'request'
            },
        ]
    },
    '/api/v1/flow/polling-POST': {
        parameters: [
            {
                name: 'request'
            },
        ]
    },
    '/api/v1/flow/ping-POST': {
        parameters: [
            {
                name: 'request'
            },
        ]
    },
    '/api/health/check-GET': {
        parameters: [
        ]
    },
    '/api/v1/identification/different-device-POST': {
        parameters: [
            {
                name: 'user'
            },
            {
                name: 'action'
            },
            {
                name: 'claims'
            },
            {
                name: 'payload'
            },
        ]
    },
    '/api/v2/identification/different-device-POST': {
        parameters: [
            {
                name: 'user'
            },
            {
                name: 'action'
            },
            {
                name: 'claims'
            },
            {
                name: 'payload'
            },
        ]
    },
    '/api/v1/identification/same-device-POST': {
        parameters: [
            {
                name: 'action'
            },
            {
                name: 'claims'
            },
            {
                name: 'payload'
            },
        ]
    },
    '/api/v1/identification/wildcard-POST': {
        parameters: [
            {
                name: 'action'
            },
            {
                name: 'claims'
            },
            {
                name: 'seeds'
            },
            {
                name: 'payload'
            },
        ]
    },
    '/api/v1/signing/different-device-POST': {
        parameters: [
            {
                name: 'nin'
            },
            {
                name: 'action'
            },
            {
                name: 'webhook'
            },
            {
                name: 'payload'
            },
        ]
    },
    '/api/v1/signing/same-device-POST': {
        parameters: [
            {
                name: 'nin'
            },
            {
                name: 'action'
            },
            {
                name: 'webhook'
            },
            {
                name: 'payload'
            },
        ]
    },
}