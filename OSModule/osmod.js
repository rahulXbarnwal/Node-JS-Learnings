const os = require('os');
console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());
console.log(os.type());
console.log(os.tmpdir());
console.log(os.version());
console.log(os.userInfo());

const freememory = os.freemem();
const freespace = `${freememory / 1024 / 1024 / 1024}`;
console.log(freespace);

const totalMemory = os.totalmem();
const tM = `${totalMemory / 1024 / 1024 / 1024}`;
console.log(tM);
