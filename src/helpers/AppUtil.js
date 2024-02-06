import Cookies from 'js-cookie';

export const emptyFunction = () => {
  
}

export const makeSelectOptions = (options) => options?.map(item => {
  if (!!item.label) {
    return { ...item };
  } else {
    let label = item.replace('-', '').replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase())
    return ({ label, value: item });
  }
})
export const getCookie =(cookiename)=> Cookies.get(cookiename)
export const removeCookie =(cookiename)=> Cookies.remove(cookiename)
export const setCookie = (cookiename, value) => {
  Cookies.set(cookiename, value, { expires: 2, secure: true, sameSite: 'strict', path: '/' });
}

export const generateString = length => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
};
