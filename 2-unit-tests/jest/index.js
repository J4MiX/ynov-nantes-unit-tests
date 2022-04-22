const {
    main,
} = require('./main');

const OUTPUT_FOLDER = './dist/';
const INPUT_FILE = './source.xml';
const OUTPUT_FILE = './dist/result.xml';

main(
    OUTPUT_FOLDER,
    INPUT_FILE,
    OUTPUT_FILE,
).then().catch((e) => console.log(e));