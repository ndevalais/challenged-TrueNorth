/**
 * Modulo de Servicios
 */
const dbService = require("./dbService")

module.exports.getTasks =  dbService.getTasks;

module.exports.updateTask = dbService.updateTask;