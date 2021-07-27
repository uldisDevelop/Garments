import * as mobx from 'mobx';
import GarmentsVM from './app/garments/GarmentsVM';

class AppStore {
  garments = new GarmentsVM();

  toJS = () => {
    return mobx.toJS(this);
  };
}

const app = new AppStore();

window['app'] = app;
window['mobx'] = mobx;

export default app;
