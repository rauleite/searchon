import searchApi from './src/search-api/index';

const searchParams = {
  query: 'nodejs',
  siteSearch: 'stackoverflow.com',
  siteSearchFilter: 'i',
  lr: 'lang_en',
  // searchType: 'image'
};

(async () => {
  const body = await searchApi.get(searchParams);
  console.log('body', body);
})();
