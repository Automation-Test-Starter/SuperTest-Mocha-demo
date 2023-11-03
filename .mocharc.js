// mocha config
module.exports = {
    timeout: 5000, // set timeout 5000ms
    reporter: 'mochawesome', // use mochawesome reporter
    'reporter-option': [
        'reportDir=Report', // report dir
        'reportFilename=[status]_[datetime]-[name]-report', // report file name
        'html=true', // enable html report
        'json=false', // disable json report
        'overwrite=false', // disable overwrite
        'timestamp=longDate', // add timestamp

    ], // reporter options
    spec: ['Specs/**/*.js'], // test files
};