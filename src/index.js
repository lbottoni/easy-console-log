import {
    Debug, Err, Info, Log, Success, Warn, Dir,
} from './lib';


Debug('this is a Debug');
Err('this is a Err',false);
Info('this is a Info');
Log('this is a Log');
Success('this is a Success');
Warn('this is a Warn');
Dir(["data1", "data2"]);
console.custom('CUSTOM MSG', 'this is a custom');
