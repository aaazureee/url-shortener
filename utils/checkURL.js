import validUrl from 'valid-url';

const checkURL = link => {
  if (validUrl.isUri(link)) return true;
  return false;
}

export default checkURL;