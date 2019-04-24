export const switchNavItem = text => {
  let tmp ='SHOW_'+text;
  return {
    type: tmp,
    path:'/'+tmp.toLowerCase()
  }
}