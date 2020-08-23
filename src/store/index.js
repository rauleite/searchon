import Conf from 'conf';
import defaultSites from '../sites/defaultSites';
import defaultGroups from '../groups/defaultGroups';
import configs from '../utils/configs';
import instructions from './instructions';

export const conf = new Conf({
  defaults: {
    instructions,
    configs,
    groups: defaultGroups,
    sites: defaultSites,
  },
});
const { store } = conf;
export const groupsStore = store.groups;
export const sitesStore = store.sites;
export const configsStore = store.configs;
