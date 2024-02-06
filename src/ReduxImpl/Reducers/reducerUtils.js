import {toast} from "react-toastify";
import axios from 'axios';

function getErrors(err) {
  let errors = ''
  if (!!err && !!err.response && !!err.response.data && !!err.response.data.errors) {
    for (const error of Object.values(err.response.data.errors)) {
      errors += Object.values(error).join('\n')
    }
  } else if (err && err.response && err.response.data && err.response.data.message) {
    errors = err.response.data.message
  } else {
    errors = 'Unknown Error occurred'
  }
  return errors
}

export const errMsg = (err, isGet, resource, msg) => {
  if (axios.isCancel(err)) {
    return 'CANCELLED REQUEST'
  }
  return err && err.response && err.response.data && err.response.data ? getErrors(err) : `${msg ? msg : (isGet && resource) ? 'Unable to fetch ' + resource : 'Request unsuccessful!'}`
}
export const toastUp = (msg, success, seconds) => {
  if (msg === 'CANCELLED REQUEST') {
    return
  }
  return toast[success ? 'success' : 'error'](msg, { autoClose: seconds ? seconds : 5000 });
}
export const updateToast = (toastId, msg, success) => {
  if (msg === 'CANCELLED REQUEST') {
    toast.dismiss(toastId)
    return
  }
  toast.update(toastId, { render: msg, type: toast.TYPE[success ? 'SUCCESS' : 'ERROR'], autoClose: 10000 });
}
export const getToastId = (msg) => toast(msg, {type: "info", autoClose: false})
export const dismissToast = (id) => toast.dismiss(id)
