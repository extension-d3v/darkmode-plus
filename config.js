// Configuration for exfil server
const CONFIG = {
    port: 3000,
    database: 'mongodb://localhost:27017/exfil',
    endpoints: {
        collect: '',
        stats: '',
        results: ''
    },
    output: {
        format: 'json',
        file: 'result.txt'
    }
};

module.exports = CONFIG;
