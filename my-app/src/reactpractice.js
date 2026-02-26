export function createConnection(serverUrl, roomID){
    return{
        connect(){
            console.log('✅ Connecting to "' + 
                roomID + '" room at ' + serverUrl + '...')
        },
        disconnect(){
            console.log('❌ Disconnected from "' +
                roomID + '" room at ' + serverUrl + '...')
        }
    }

}