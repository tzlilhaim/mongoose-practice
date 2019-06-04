import * as requestPromise from 'request-promise'
require( 'dotenv' ).config()

const HOST = process.env.SERVER_HOST
const PORT = process.env.SERVER_PORT

export default class Client {
    static async GET( endpoint: string ): Promise<string> {
        return await requestPromise.get( `${ HOST }:${ PORT }${ endpoint }`, { json: true } )
    }

    static async POST( endpoint: string, data = {}, full: boolean = false ) {
        return requestPromise( {
            timeout: 2000,
            resolveWithFullResponse: full,
            method: 'post',
            body: data,
            url: `${ HOST }:${ PORT }${ endpoint }`,
            json: true
        } )
    }

    static async PUT( endpoint: string, data = {}, full: boolean = false ) {
        return requestPromise( {
            timeout: 2000,
            resolveWithFullResponse: full,
            method: 'put',
            body: data,
            url: `${ HOST }:${ PORT }${ endpoint }`,
            json: true
        } )
    }

    static async DELETE( endpoint: string, data = {}, full: boolean = false ) {
        return requestPromise( {
            timeout: 2000,
            resolveWithFullResponse: full,
            method: 'delete',
            body: data,
            url: `${ HOST }:${ PORT }${ endpoint }`,
            json: true
        } )
    }
}
