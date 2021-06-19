const database = require("./DB/database.json")

async class Objects {
    constructor(Options = { Static: { Name: String, Value: Number } }) {
        this.Options = Options

        if (this.Options.Static.Value === 1) {
            
        } else if (this.Options.Static.Value === 0) {
            
        } else {
            throw new Error("Cannot set the static value to: " + this.Options.Static.Value)
        }
    }

    /**
    * Name: Gets the Name of the Static
    * Value: Changes the value of the static
    */

    ChangeStaticValue = (Name = String, Value = Number) => {
        if (this.Options.Static.Name === Name) {
            if (Value === String) {
                throw new Error("Cannot set the static value a string")
            } else {
                if (Value === 1) {
                    this.Options.Static.Value = 1
                    console.log("Sat " + this.Options.Static.Name + " Value to: " + Value + " and the static Value is now sat as: " + this.Options.Static.Value)
                    return
                } else if (Value === 0) {
                    this.Options.Static.Value = 0
                    console.log("Sat " + this.Options.Static.Name + " Value to: " + Value + " and the static Value is now sat as: " + this.Options.Static.Value)
                    return
                } else {
                    throw new Error("Cannot set the value of the static to: " + Value)
                }
            }
        } else {
            throw new Error("Cannot Find Static With name of: " + Name)
        }
    }

    /**
    * Name: Gets the Static name
    * Function: Runs the Function like a simple function
    */

    RunStatic = (Name = String, StaticFunction = Function) => {
        try {
            if (this.Options.Static.Name === Name) {
                console.log("Running Static Function with name of: " + Name)
                StaticFunction()
                console.log("Static Function is now Running!")
            } else {
                throw new Error("Cannot Find Static with name of: " + Name)
            }
        } catch (error) {
            throw new Error("There was an error while running the StaticFunction: " + error)
        }
    }
}

async class SimpleSaving {
    constructor() {}

    /**
    * Key: Saves a Key into the data base
    * Value: adds a value to the key if the key does not have any value
    */

    Save = (Key, Value) => {
        try {
            if (!database[Key]) {
                database[Key] = {
                    value: Value
                }
            } else {
                database[Key] = {
                    value: Value
                }
            }
        } catch (error) {
            throw new Error("Cannot Save Key: " + error)
        }
    }

    /**
    * Key: finds the key
    * if the key is not listed in the dataBase it will send a message in the console saying ```Error: cannot find test```
    */

    find = (Key) => {
        try {
            if (database[Key]) {
                return database[Key]
            } else {
                return console.error("Error: cannot find " + key)
            }
        } catch (error) {
            throw new Error("Cannot get Key: " + error)
        }
    }

    /**
    * Key: Adds a Key if the key not found
    * Value: adds a Value if there is a key not found or found
    */

    fetch = (Key, Value) => {
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
            throw new Error("Cannot save or get, Error: " + error)
        }
    }
}

    /**
    * Key: Saves a Key into the data base
    * Value: adds a value to the key if the key does not have any value
    */

module.exports.set = async (Key, Value) => {
    try {
        if (!database[Key]) {
            database[key] = {
                value: Value
            }
        } else {
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

    /**
    * Key: Saves a Key into the data base
    * Value: adds a value to the key if the key does not have any value
    */

module.exports.setID = async (ID, Value) => {
    try {
        if (!database[ID]) {
            database[ID] = {
                value: Value
            }
        } else  {
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

    /**
    * Key: finds the key
    * if the key is not listed in the dataBase it will send a message in the console saying ```Error: cannot find test```
    */

module.exports.get = async (Key) => {
    try {
        const KeyName = await database[Key]
        return KeyName
    } catch (error) {
        console.log("Cannot Find: " + Key)
        console.error(error)
    }
}

    /**
    * Key: finds the key
    * if the key is not listed in the dataBase it will send a message in the console saying ```Error: cannot find test```
    */

module.exports.getID = async (ID) => {
    try {
        const IDName = await database[ID]
        return IDName
    } catch (error) {
        console.log("Cannot Find: " + ID)
        console.error(error)
    }
}

    /**
    * Key: Adds a Key if the key not found
    * Value: adds a Value if there is a key not found or found
    */

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

    /**
    * Key: Adds a Key if the key not found
    * Value: adds a Value if there is a key not found or found
    */

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

module.exports.Objects = Objects
module.exports.SimpleSaving = SimpleSaving