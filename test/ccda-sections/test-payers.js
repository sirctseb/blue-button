var expect = require('chai').expect;
var assert = require('chai').assert;

var fs = require("fs");
var path = require('path');

var bb = require('../../index');
var jsutil = require('../../lib/jsutil');

// describe('payers parser', function () {
//     var payers = null;
//     before(function (done) {

//         var filepath = path.join(__dirname, '../fixtures/file-snippets/CCD_1_payers.xml');
//         var xml = fs.readFileSync(filepath, 'utf-8');
//         payers = bb.parseString(xml, {
//             component: 'ccda_payers'
//         }).data;
//         var writeFilePath = path.join(__dirname, '../fixtures/file-snippets/generatedJSON/CCD_1_payers.json');
//         fs.writeFileSync(writeFilePath, JSON.stringify(payers, null, 4), 'utf-8');
//         done();
//     });

//     it('full deep check', function (done) {
//         expect(payers).to.exist;
//         console.log(JSON.stringify(payers, null, 10));
//         var filepath = path.join(__dirname, '../fixtures/file-snippets/json/CCD_1_payers.json');
//         var json2Read = fs.readFileSync(filepath, 'utf-8');
//         var expected = jsutil.jsonParseWithDate(json2Read);
//         expect(payers).to.deep.equal(expected);
//         done();
//     });

// });
