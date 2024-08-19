import {compilerOptions} from './tsconfig.json' with {type: 'json'};
console.log(compilerOptions);

// Alternative that does not use named imports and builds+runs fine:
/*
import tsconfig from './tsconfig.json' with {type: 'json'};
console.log(tsconfig.compilerOptions);
*/