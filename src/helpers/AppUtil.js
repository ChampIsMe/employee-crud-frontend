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