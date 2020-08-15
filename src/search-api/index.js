import https from 'https';
import apiConfigs from './secret';

const URL_BASE = `${apiConfigs.PREFIX}${apiConfigs.VERSION}?key=${apiConfigs.KEY}&cx=${apiConfigs.ENGINE}`;

/**
 * http get on google search api
 * @param {object} searchParams query
 */
const get = (searchParams) => new Promise((resolve, reject) => {
  const url = `${URL_BASE}&q=${searchParams.query}`;
  if (!searchParams.query) {
    return reject(new Error('Hasn\'t query parameter'));
  }

  https.get(url, (res) => {
    res.setEncoding('utf8');
    let body = '';
    res.on('data', (data) => {
      body += data;
    });
    res.on('end', () => {
      resolve(JSON.parse(body));
    });
  });
});

export default {
  get,
};
