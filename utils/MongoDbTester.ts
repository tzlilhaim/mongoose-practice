import { Mongoose, Schema } from 'mongoose'
import * as mongoose from 'mongoose'
import * as child_process from 'child_process'

class MongoDbTester {
	public readonly client: Mongoose

	private modelName: string = ''
	private collectionName: string = ''
	private dbName: string = ''

	private model: any

	public constructor( mongoose: Mongoose, dbName: string ) {
		this.dbName = dbName
		this.client = mongoose
	}

	public getModel(): any {
		return this.model
	}

	public setCollectionName( collectionName: string ) {
		this.collectionName = collectionName
	}

	public setModelName( modelName: string ) {
		this.modelName = modelName
	}

	public static fetchAndExecuteQuery( path: string, callback: any ): void {
		child_process.exec( 'node ' + __dirname + '/../solutions/spot-checks/' + path, callback )
	}

	public async dropDatabase(): Promise<any> {
		return await this.client.connection.dropDatabase()
	}

	public listModels(): string[] {
		return this.client.modelNames()
	}

	public isModelExists(): boolean {
		return this.listModels().indexOf( this.modelName ) !== -1
	}

	public applyActualModel( schema?: Schema ): void {
		if ( typeof schema === 'undefined' ) {
			this.model = this.client.model( this.modelName )
		} else {
			this.model = this.client.model( this.modelName, schema )
		}
	}

	public async fetchCollectionContent(): Promise<mongoose.Document[]> {
		return await this.model.find( {}, ( error: any, results: mongoose.Document[] ) => {
			if ( error ) {
				return error
			}

			return results
		} )
	}

	public getModelSchema(): Schema {
		return this.model.schema
	}

	public close(): void {
		this.client.disconnect()
	}
}

export default MongoDbTester
