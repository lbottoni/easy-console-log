# easy-console-log

easy and basic console log for node applications. This package use chalk.js in background.

## Installation
```cmd
npm i `@luca.bottoni/easy-console-log`
```

## How to use

you can use any single command or require one object.

```javascript
const { Log,Debug,Err,Warn,Info,Success,Dir} = require('@luca.bottoni/easy-console-log');

Debug('this is a Debug');
Err('this is a Err',false);
Info('this is a Info');
Log('this is a Log');
Success('this is a Success');
Warn('this is a Warn');
Dir(["data1", "data2"]);
console.custom('CUSTOM MSG', 'this is a custom');
```

![full example](https://github.com/lbottoni/easy-console-log/blob/start/images/example-full.png)
## Custom Messages

any message have a label plus messages (same if use console.log separate from comma).

```javascript
Log('this is a Log','Log 2','Log 3');
```

if you want use a label custom, you can use console.custom, and pass in the fist parameter the colored label

```javascript
console.custom('CUSTOM MSG', 'this is a custom');
console.custom('CUSTOM MSG', 'this is a custom');
console.custom('CUSTOM MSG', 'this is a custom');
```

![custom message](https://github.com/lbottoni/easy-console-log/blob/start/images/custom.png)

## Block code

the Easy Messages "Success and Info" for default use the second parameter in default to false, but the "Err" use for default the blocke parameters to true

```javascript
Log('Log 1','Log 2','Log 3'); //this is printed
Err('this is a block error message');
Log('Log 4','Log 5','Log 6');//this is not printed
```
![blocked message](https://github.com/lbottoni/easy-console-log/blob/start/images/blocked.png)

```javascript
Log('Log 1','Log 2','Log 3'); //this is printed
Err('this is a block error message',false);
Log('Log 4','Log 5','Log 6');//this is printed
```
![error not blocked](https://github.com/lbottoni/easy-console-log/blob/start/images/not-blocked.png)
