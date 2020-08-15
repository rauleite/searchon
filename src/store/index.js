import Conf from 'conf';
import defaultCommunities from '../communities/defaultCommunities';

const store = new Conf({ defaults: defaultCommunities });

// store.set('stackoverflow.checked', false);
// console.log('store.path', store.path);
// console.log('store.path', store.delete('stackoverflow'));
// console.log('store.store', store.store);

// Lista ao inves de objeto
export const defaultComunitiesList = (
  Object.entries(store.store).map(([key, cmt]) => (cmt))
);
console.log('store.clear', store.clear());

export default store;
