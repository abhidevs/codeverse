export const reduceArrToObj = (items) => {
  const itemsObj = items?.reduce((all, curr) => {
    return {
      ...all,
      [curr._id]: curr,
    };
  }, {});
  return itemsObj;
};
