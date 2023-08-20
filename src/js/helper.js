export const getJson = async function (url) {
  const fetchRes = await fetch(url);

  const data = await fetchRes.json();

  return data;
};
