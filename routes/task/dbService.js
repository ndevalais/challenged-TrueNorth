var request = require('request');
const hash = require('object-hash')

function requestTask(options) {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) reject(error);
            if (response.statusCode != 200) {
                reject('Invalid status code <' + response.statusCode + '>');
            }
            resolve(body);
        });
    });
}

module.exports.getTasks = async ( quantity ) => {
    try {
        let url = `https://lorem-faker.xvercel.app/api?quantity=${quantity}`;
        const retorno = {
            status: 'OK',
            message: '',
            result: [],
            code: 200,
            source: 'Task'
        };
        var options = {
            'method': 'GET',
            'url': url,'headers': {
            }
        };
        let temp = await requestTask(options);

        var tasks = JSON.parse( temp ).map(function (task, index, array) {
            const uuid = hash(task);
            return {uuid, task}; 
        });
        retorno.result = tasks;
        return retorno;
    } catch (err) {
        retorno.status = 'error';
        retorno.message = err.message;
        console.error(err)
    }
}
