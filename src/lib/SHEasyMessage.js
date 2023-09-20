// eslint-disable-next-line import/extensions
import log from './console.js';

const env = !process.env.NODE_ENV || process.env?.NODE_ENV?.toLowerCase() === 'production' ? 'production' : 'development';

log(env);
/**
 * generic clas to emit a console message
 *
 * @param message <string> message
 * @param blocked <boolean> true emit a  process.exit
 * @param type <string> kind of method od class console (ex: console.warn, console.log, ....)
 */

class EasyMessage {
    constructor(message, blocked = true, type='error') {
    this.name = 'EasyError';
        this.blocked = blocked;
        console[type](message);
        if(blocked){process.exit(0);}
    }
}
export const Info = (message = null, blocked = false) => {
  new EasyMessage(message, blocked, 'info');
};

export const Success = (message = null, blocked = false) => {
  new EasyMessage(message, blocked, 'success');
};

export const Err = (message = null, blocked = true) => {
  new EasyMessage(message, blocked);
};

export const Warn = (message=null) => {
  new EasyMessage(message, false, 'warn');
};
export const Debug = (...args) => {
  new EasyMessage(args, false, 'debug');
};
export const Log = (...args) => {
  new EasyMessage(args, false, 'log');
};

export const Dir = (message = null) => {
  new EasyMessage(message, false, 'dir');
};
export default EasyMessage;
