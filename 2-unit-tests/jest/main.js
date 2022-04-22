const { getDataFromAPI } = require('./api');

const { readFile, writeFile, createDir } = require('./fs');
const {
    xmlToJson,
    jsonToXML,
    correctFile,
} = require('./builder');

/**
 * Script entry point
 */
exports.main = async (outputFolder, inputFile, outputFile) => {
    createDir(outputFolder);

    const apiData = await getDataFromAPI('myUrl.com');

    console.log('api data : ', apiData);

    const fileContent = readFile(inputFile);

    const fileInJson = await xmlToJson(fileContent);

    const updatedFile = correctFile(fileInJson);

    writeFile(outputFile, jsonToXML(updatedFile));
};