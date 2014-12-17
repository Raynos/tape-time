var test = require('tape');

var tapeTime = require('../index.js');

test('tapeTime is a function', function (assert) {
    assert.equal(typeof tapeTime, 'function');
    assert.end();
});
