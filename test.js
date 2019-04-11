const dpapi = require ('./build/Release/node-windpapi');
const sum = dpapi.test(1, 6);
console.log(`1 + 6 = ${sum}`);

const entropy = Buffer.from("AHHH!H!H!H!!!!", "utf-8");

const buffer = Buffer.from("Hello World", "utf-8");

const currentUser = dpapi.protect(buffer, null, 'currentUser');
const withEntropy = dpapi.protect(buffer, entropy, 'currentUser');
const localMachine = dpapi.protect(buffer, null, 'localMachine');

const currentUserClear = dpapi.unprotect(currentUser, null, 'currentUser');
console.log(`CurrentUser Decrypted: '${currentUserClear}'`);

const withEntropyClear = dpapi.unprotect(withEntropy, entropy, 'currentUser');
console.log(`WithEntropy Decrypted: '${withEntropyClear}'`);

let clear = dpapi.unprotect(localMachine, null, 'localMachine');
console.log(`Machine Decrypted: '${clear}'`);