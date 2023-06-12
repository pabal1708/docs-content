import { JSDOM } from 'jsdom';
import { use } from 'chai';
import uc from 'sinon-chai';

use(uc);
// We need to set the URL for access to local storage
// https://github.com/jsdom/jsdom/issues/2304
const jsdom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://localhost' });
const { window } = jsdom;

function copyProps(src: object, target: object) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

// @ts-ignore
global.window = window;
global.document = window.document;
// @ts-ignore
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
global.cancelAnimationFrame = (id) => {
  clearTimeout(id);
};
global.cancelAnimationFrame = () => {};
copyProps(window, global);
