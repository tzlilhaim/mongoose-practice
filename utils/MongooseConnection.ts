import { Mongoose } from 'mongoose'
import * as mongoose from 'mongoose'

export default class MongoConnection {
	private static _instance: Mongoose
	private static readonly URL: string = 'mongodb://localhost:27017'

	public static async getInstance( db: string = 'mydb' ): Promise<Mongoose> {
		if ( mongoose.connection.readyState === 1 ) {
			MongoConnection._instance = new Mongoose()
		} else if ( !MongoConnection._instance ) {
			MongoConnection._instance = await mongoose.connect( MongoConnection.URL + '/' + db, { useNewUrlParser: true } )
		}

		return MongoConnection._instance
	}
}
