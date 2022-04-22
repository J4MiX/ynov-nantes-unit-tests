/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

const xml2js = require('xml2js');

exports.xmlToJson = async (fileContent) => xml2js.parseStringPromise(fileContent);

exports.jsonToXML = (fileJson) => {
    const builder = new xml2js.Builder();
    return builder.buildObject(fileJson);
};

exports.correctFile = (fileJson) => {
    fileJson.note.body = [
        "Nan vraiment, les d'inté, c'était top",
    ];
    return fileJson;
};