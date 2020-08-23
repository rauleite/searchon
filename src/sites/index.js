const { sitesStore, conf } = require('../store');
const {
  objectToList,
  setPropertiesToDefaultFromListNames,
  setItemStore,
} = require('../utils');

export const sitesName = Object.entries(sitesStore).map(([key, site]) => (site.name));
export const sitesMap = Object.entries(sitesStore);
const sitesList = objectToList(sitesStore);

export const setSitesStore = ({ property = '', value }) => (
  setItemStore({
    itemName: 'sites', property, value, conf,
  })
);

/**
 * Save as bulk operation. All sites objects.
 * @param {[string]} sites
 */
export const setDefaultSites = (sites) => {
  setSitesStore({
    value: setPropertiesToDefaultFromListNames({
      listName: sites,
      objStore: sitesStore,
      properties: ['default', 'checked'],
    }),
  });
};

export const sitesMapByName = (names) => (
  sitesMap.filter(([key, map]) => names.some((name) => name === map.name))
);

export const sitesMapByKey = (sitesKey) => Object.entries(sitesStore).filter(
  ([keyStore]) => sitesKey.some(
    (siteKey) => siteKey === keyStore,
  ),
);

/**
 * Filter sites based on groups
 * @param {object} program commander package instance
 * @return {[object]} Sites List
 */
export const sitesFromGroups = (groups) => (
  sitesList.filter(
    (site) => groups.some(
      (group) => site.groups.includes(group),
    ),
  )
);
