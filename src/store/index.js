import Conf from 'conf';
import defaultCommunities from '../communities/defaultCommunities';

const store = new Conf({ defaults: defaultCommunities });
// const config = new Conf();
console.log("config.get('stackexchange');", store.get('stackexchange'));
console.log("config.get('stackexchange.name');", store.get('stackexchange.name'));
console.log("config.get('stackexchange.url');", store.get('stackexchange.url'));

// deletes but defautls recover on next startup
console.log("store.delete('stackexchange')", store.delete('stackexchange'));
console.log("config.get('stackexchange');", store.get('stackexchange'));

console.log('store.store', store.store);
console.log('store.path', store.path);
// SOH TESTEEE *** *** ***
export default store;
