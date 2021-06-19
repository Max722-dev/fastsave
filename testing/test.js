const index = require("../index")
const FastSaveSimple = new index.SimpleSaving()
const Objects = new index.Objects({ Static: { Name: "test", Value: "test123"}})

Objects.RunStatic()