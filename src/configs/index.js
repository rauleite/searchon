import { configsStore as originalConfigStore, conf } from '../store';
import { setItemStore, exitWithError } from '../utils';
import { sitesMapByName } from '../sites';

const configsConstants = {
  TERMS: '',
  GROUP: '',
};

export const configsStore = originalConfigStore;

export const cachePath = () => conf.path;
export const clean = () => conf.clear();
export const setProgramTerms = (terms) => {
  configsConstants.TERMS = terms;
};
const setConfigsStore = ({ property = '', value }) => (
  setItemStore({
    itemName: 'configs', property, value, conf,
  })
);
export const urlBase = () => configsStore.urlBase;
export const terms = (text) => configsStore.terms.replace('$', text);
export const inurl = (sitesName) => {
  const sitesMap = sitesMapByName(sitesName);
  const inurls = sitesMap.map(([key, site]) => configsStore.inurl.replace('$', site.url));
  return inurls.join(' OR ');
};

export const setDefaultTerms = (urlTerms) => {
  setConfigsStore({ value: urlTerms, property: 'defaultTerms' });
};
export const getProgramTerms = () => (
  configsConstants.TERMS
);
export const getDefaultTerms = () => (
  // configsConstants.TERMS || conf.get('configs.defaultTerms')
  configsStore.defaultTerms
);
export const programHasTerms = () => !!configsConstants.TERMS;

export const termsValidate = (termsText) => termsText.length < 3;

export const termsErrorMessage = 'The term must having at least three strings.';
