/* eslint-disable global-require */

const {
    describe, expect, test, beforeEach,
} = global;

const fs = require('fs');

const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

describe('Integration tests for main', () => {
    beforeEach(() => {
        consoleSpy.mockClear();
    });

    test('Integration test', async () => {
        const outputFile = './dist/result.test.xml';
        const { main } = require('./main');
        await main(
            './dist/',
            './source.xml',
            outputFile,
        );

        // on s'assure que le fichier result est bien créé
        expect(fs.existsSync(outputFile)).toBe(true);
        // on s'assure du contenu du fichier
        expect(fs.readFileSync(outputFile, 'utf8')).toBe(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <note>
    <to>Toma</to>
    <from>Benjamin</from>
    <heading>Reminder</heading>
    <body>Nan vraiment, les d'inté, c'était top</body>
  </note>`);

        // On verifie qu'on a bien reçu un message d'erreur venant de l'API
        // Et qu'on l'a bien affiché dans la console
        expect(console.error).toBeCalledTimes(1);
        expect(console.error).toHaveBeenLastCalledWith('Could not reach API : "myUrl.com/v1/someurl"');
    });
});