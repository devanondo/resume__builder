import mongoose from 'mongoose'

interface ConnectionStatus {
    isConnected?: number
}

export const connectToDB = async (): Promise<void> => {
    const connection: ConnectionStatus = {}
    try {
        if (connection?.isConnected) return

        const db = await mongoose.connect('mongodb://localhost:27017')

        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        const errorMessage = (error as string) || 'An error occurred'
        throw new Error(errorMessage)
    }
}
