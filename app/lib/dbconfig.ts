/* eslint-disable no-console */
import mongoose from 'mongoose'

interface ConnectionStatus {
    isConnected?: number
}

export const connectToDB = async (): Promise<void> => {
    const connection: ConnectionStatus = {}
    try {
        if (connection?.isConnected) return

        const db = await mongoose.connect(process.env.DATABASE_URL as string)

        connection.isConnected = db.connections[0].readyState
        console.log('DB Connected!')
    } catch (error) {
        const errorMessage = (error as string) || 'An error occurred'
        throw new Error(errorMessage)
    }
}
