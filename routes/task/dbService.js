/**
 *  Database Service Module
 */
const request = require('request');
const hash = require('object-hash')

// Function: execute request
function requestTask(options) {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) reject(error);
            resolve(body);
        });
    });
}

// get Tareas
module.exports.getTasks = async ( quantity ) => {
    const retorno = {
        status: 'OK',
        message: '',
        result: [],
        source: 'Task'
    };
    try {
        let url = `https://lorem-faker.vercel.app/api?quantity=${quantity}`;
        let options = {
            'method': 'GET',
            'url': url,'headers': {
            }
        };
        let temp = await requestTask(options);

        const tasks = JSON.parse( temp ).map(function (task, index, array) {
            const uuid = hash(task);
            return {uuid, task}; 
        });
        retorno.result = tasks;
        return retorno;
    } catch (err) {
        retorno.status = 'error';
        retorno.message = err.message;
        console.error(err)
        return retorno;
    }
}

// Update Task
module.exports.updateTask = async (...p) => {
    return retorno = {
        status: 'OK',
        message: '',
        result: p,
        source: 'Task'
    };
}