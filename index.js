const database = require("./DB/database.json")
const fs = require("fs")

module.exports.set = async (Key, Value) => {
    try {
        if (!database[Key]) {
            database[key] = {
                value: Value
            }
        }
        return
    } catch (error) {
        console.log("Cannot Save: " + Key + " Into FastSave DataBase")
        console.error(error)
    }
}

module.exports.setID = async (ID, Value) => {
    try {
        if (!database[ID]) {
            database[ID] = {
                value: Value
            }
        }
        return
    } catch (error) {
        console.log("Cannot Save: " + ID + " into FastSave DataBase")
        console.error(error)
    }
}

module.exports.get = async (Key) => {
    try {
        const KeyName = await database[Key]
        return KeyName
    } catch (error) {
        console.log("Cannot Find: " + Key)
        console.error(error)
    }
}

module.exports.getID = async (ID) => {
    try {
        const IDName = await database[ID]
        return IDName
    } catch (error) {
        console.log("Cannot Find: " + ID)
        console.error(error)
    }
}

module.exports.fetch = async (Key, Value) => {
    try {
        const KeyName = await database[Key]
        if (!KeyName) {
            if (Value) {
                database[Key] = {
                    value: Value
                }
                return database[Key]
            } else if (!Value) {
                database[Key] = {
                    value: null
                }
                return database[Key]
            }
        } else if (KeyName) {
            return KeyName
        }
        return
    } catch (error) {
        console.log("Cannot Save or Get: " + Key)
        console.error(error)
    }
}

module.exports.fetchID = async (ID, Value) => {
    try {
        const IDName = await database[ID]
        if (!IDName) {
            if (Value) {
                database[ID] = {
                    value: Value
                }
                return database[ID]
            } else if (!Value) {
                database[ID] = {
                    value: null
                }
                return database[ID]
            }
        } else if (IDName) {
            return IDName
        }
        return
    } catch (error) {
        console.log("Cannot Save or Get: " + ID)
        console.error(error)
    }
}

module.exports.Delete = async (Key) => {
    try {
        database[Key] = null
        return
    } catch (error) {
        console.log("Cannot Delete: " + Key + " It Might be invaild!")
        console.error(error)
    }
}

module.exports.systemMath = Math
module.exports.fs = this.fs