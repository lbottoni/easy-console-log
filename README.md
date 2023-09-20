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

![full example](https://github.com/lbottoni/start/images/example-full.png?raw=true)
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

![custom message](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAABOCAMAAADrXngIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC9UExURRsdHhsdSxsdcxsnmBsxuzEdHzE6uzE63UUdH0Udc0U63UVD/lgnH1gxmFg63VhL/mkxH2kxc2lU3WlU/ns6S3tUu3tU/oxDc4xDmIxLmIxUu4xU3YxU+oxU/IxU/oxy+IyP9p9U/p+q9LFU+rFU/rHF8rHF9sRy/sTF+MTf8sTf9MTf9tWP+tWP/tXF+tXf9NX48tX49Oeq/OfF9ufF+uf48uf49Of49vjF+PjF+vjf9Pjf+Pj48vj49Pj49o4ZzvkAAAKySURBVHja7Zhdd9JAEIbTkpoqKGiRCCSbbQQRFaVRrNHU//+zurPfywk9HKBcve9FujOd7rIPs7PpRBEEQRAEQRAEQRAEQWcTO7EAAiAAYi8QF/2BHl3ejK/aPsEu/9lB8KZ5WDD+f8bkI1s3TbMir5Cw82XT/LtlxaZibE5BStbW8YyVch43c3d4HhBqneNBlOLT559vDYh8WemtqhE982XN+N9fLPtxb0EY28YTFDHPbhDPpROByNYrtTENovi9CEBwkQ2suJ/xP19n/NvdwoLQtok3P828ibRSAeLtDZtcS0eqyDBpe4GtfrKDVInFfEMFNkltvFlHJJaMjz/0p69HB+QY19nuMuJh4YMoa/EQtHhdrj599EBo28SXBCyoESYjpr2LvhwmqXv6ave/6EX67zSHac9mGMXaeLMOQUoFrkF38vJd72gQ8qxXDsRcnY9VWRc/v2cOhLNVvABRbEQxaT0a/lYT/2uPnvIHcAwUB8LEq3ViMjvvr+PxVXd4eRIQVAjrrYy4W5S1oJF/8UA4m+JlRvA9QERdyvCW7W75OyOmD40uqYMQhI3XIOg0HAOi2KgaUVAd5Dq/5a7CGlHqzLAgfFvEczohe4GgTQ1bv3ffL8dBRmyDMPFeRojHwSBMtaeiaW4AuiUMiGxdydFTICg+XwpiAYhEVqw2EMHZ3+GnDOiMvLqhjwLFxDpTVLxah6DI3x0Mgs3l/S/yu2lqpt4falcj5HtC5WqFAWFsFy/mCWoElfXUgiBL2UHG7/TTdTB5s+WgsyCOzPiVH6/WkbdGGh0DAq/YAAEQAAEQAAEQaMygMYPGDBozaMygMYPGDBozaMygMYPGDP7XAAiAAAiAAAiAQGMGjRk0ZtCYQWMGjRk0ZtCYQWMGjRm8YgMEQAAEBEEQBEEQBEHQc+kRp8pwkVgBw9wAAAAASUVORK5CYII=)

## Block code

the Easy Messages "Success and Info" for default use the second parameter in default to false, but the "Err" use for default the blocke parameters to true

```javascript
Log('Log 1','Log 2','Log 3'); //this is printed
Err('this is a block error message');
Log('Log 4','Log 5','Log 6');//this is not printed
```
![blocked message](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW4AAABMCAMAAAB6b600AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADhUExURRsdHhsdLhsdPRsdPxsdXRsfSxsgWBs/eRtfkz4dHz4dPz4dXT58rUgdH0giWEgiZV0dH10dP12Xxm8dH28dPW8kcns/H3tfeXt8rXuyrXuyxpQfH5QgS5QiZZQlcpdfH5eyeZfMrZfMxrF8P7HMk7HMrbHMxrcgH7cgPbcmWLcmZbcmcsyXXcyyeczMk8zMrczMxtgiLtgiS9gmWNgmZdgmcvh1cviYifi5nvjZtPj4yfj43fj48vkkPfkkS/klS/kmWPkmZfkmcvkmifkmnvlQcvlQtPl1yfmY3fm58vnZ8kgqQqEAAAR3SURBVHja7ZgLe9JKEIZTWigqlR6UqqDUU7So0JaorbfGtuulR///Dzozs5dskiWApj6Wft/zwGQ3s5vNm8nsQBRBEARBEARBEARBEARBEARBEARBEARBEARB0GKaViSQBG7gBm7g/gtxTzb3xR7tRJEcDqNovVfE3Ty4VX7Fjb2Mxzx/vtbuEv6dadb/euM+2mnRp0m3tLE3PXqwvzTu5uHDZXCvP9qJmvyIF36c9ISe76wKbjEHd/YObvfCycTioKcx5UO205TXxtNbrSDuGf761O5y/v+uDO4hBfb0cLsz3Nwvxb3eG9JnQi/3hPJB5u0O4i7xD+Iu81/gBbguuHdbEkyMm25qc2YyaR5u01v9bJtRMZp5uEv8o44/YJ4/7yerk7t1dP/Tk+ielOBmQzg4AnO5NIy7xJ/JLuFfeFwrkLsnHEWTOdHNXx1dxCwU3UH/VjYxz5+fhkxWBffhdstUJ9Quwb2xN5QoowDMX9Lglmw039/RXtA/n+uvK25TBHNUtaamuA3h5hYh4YphYupgL/x0qc7I1nuSJOb4S+GxhL/MvwK5+xd/VUr0hQvhTqiAqND/JuKWHJvd7OxbECzXKvO/of+ZdCThL76gq/bHX1Q3SKoigSRwAzdwXwnutcHIHNXGZ1uhK8/qnzFPW6kkeD4udnbja4f7xynpnfryk8x75awcfPDaBdz6XivHTcBXGvc7MV9+nqivgt1a/rx37fm4f083ELdGrO0lRbb6/tG187jb0koIw4uxOr+XJoG1gZK25xjs57YX9m4ei7s2NucbdJ1YcNfG5MDjEjNexdn5EnkEdMVRau08tm3U+Dy4eHxMJ/z5+Pq+5XE8Xl30nV91uL+fnjj7HyeQr6cntj07ui/6JvI0pmJshvvv9jMRy/NE3dSTz60N6KhB/bpdG7N7N9Hj2NePbtdPUNrEyVg3j+23uNWoe37/Vd+Ns+uz1q6PztePR+n8VeTuE8nRn74pZ+UpEGvbLk0mPtC2H8JRWX/mEcg8DfGRXjmsv7lnb3Ft8Fpo115Sf+Nsi05lcNv+qEsfPmmsncf1W9xnW9249qrvxtn1+eukldTGI/1mWb/KoltyhrU6uj99s+2FcVMYqTgENddfP1b+2ynzaBwaN98Ztfl2Ta6QMJdhqojb9rs+Y+08+Txvcbtxbn3GmvXxm1F/20/nry6ZXH5MrZ+7ub04bk53cTCG/X45LkS33E4a3fRlt1CKsLYNVMGbx20DN4/bzDMTdxrwbn1s3fq6eovw/a5gq0yrk/BWGZlEGMKdy3HBfo7a+nEWt78H8O3qnKpfbj7uys6WuPFt5ef+JIjbzTMDtxvnrU9vy3p9FrPvV0ndTdvhpSQPscSbu11/Ebfeqi1uKRSUsUnWK9TPFcv5kyTrF6f+UhEktgaKzdZpKgR2pIIlaecqExUXcLt5ZuC24+z63Drt+ji63cJ+f6vEj/hSSXRz8sZ/Jn9CkvtDVRVwX4k4mSxNG7ghCIIgCIIgCIIgCIIgCIIgCIIgiPU/ZWvN68PSlUMAAAAASUVORK5CYII=)

```javascript
Log('Log 1','Log 2','Log 3'); //this is printed
Err('this is a block error message',false);
Log('Log 4','Log 5','Log 6');//this is printed
```
![error not blocked](data:image/png;base64,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)
