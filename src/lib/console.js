import chalk from 'chalk';

const log=(env='production')=> {
  const LogFont = chalk.white;
  const LogBg = chalk.bgWhite.black;
  const ErrorFont = chalk.red;
  const ErrorBg = chalk.bold.whiteBright.bgRed;
  const WarnFont = chalk.yellow;
  const WarnBg = chalk.bold.bgYellow.whiteBright;
  const InfoFont = chalk.blue;
  const InfoBg = chalk.bold.bgBlueBright.whiteBright;
  const SuccessFont = chalk.greenBright;
  const SuccessBg = chalk.bold.bgGreenBright.whiteBright;
  const DebugFont = chalk.gray;
  const DebugBg = chalk.bold.bgBlackBright.white;
  const CustomFont = chalk.magenta;
  const CustomBg = chalk.bold.bgMagenta.white;
  // eslint-disable-next-line no-unused-vars
  const DirFont = chalk.bgWhiteBright;
  const DirBg = chalk.bold.bgWhiteBright.white;

  // eslint-disable-next-line no-shadow
  const { log } = console;
  // eslint-disable-next-line no-unused-vars
  const { error } = console;
  // eslint-disable-next-line no-unused-vars
  const { warn } = console;
  // eslint-disable-next-line no-unused-vars
  const { info } = console;
  // eslint-disable-next-line no-unused-vars
  const { debug } = console;
  // eslint-disable-next-line no-unused-vars
  const { dir } = console;

  const pad = 9;

  console.log = (...args) => log(LogBg('LOG '.padStart(pad,' ')) + LogFont(' ') + LogFont(...args));
  console.error = (...args) => log(ErrorBg('ERROR '.padStart(pad,' ')) + ErrorFont(' ') + ErrorFont(...args));
  console.warn = (...args) => log(WarnBg('WARN '.padStart(pad,' ')) + WarnFont(' ') + WarnFont(...args));
  console.info = (...args) => log(InfoBg('INFO '.padStart(pad,' ')) + InfoFont(' ') + InfoFont(...args));
  console.success = (...args) => log(SuccessBg('SUCCESS '.padStart(pad,' ')) + SuccessFont(' ') + SuccessFont(...args));
  console.debug = (...args) => (env !== 'production' ? log(DebugBg('DEBUG '.padStart(pad, ' ')) + DebugFont(' ') + DebugFont(...args)) : null);
  console.simple = (...args) => log(...args);
  console.custom = (...args) => log(CustomBg(args[0]) + CustomFont(' ') + CustomFont(...args.slice(1)));
  console.dir = (...args) => {
    log(DirBg('START DIR '.padStart(pad, ' ')));
    dir(...args);
    log(DirBg('END DIR '.padStart(pad, ' ')));
  };

  // dir({ a: 1 });
  // console.dir({ a: 1 });
};
export default log;
