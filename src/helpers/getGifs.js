export const getGifs = async (category) => {
  "  /* const url = `https://api.giphy.com/v1/gifs/search?api_key=SNsrWxHlgREu4IWV25jqD8qiQXsuCs8P=${category}&limit=10`; */";
  const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=AIzaSyBHffqKHlglVQYSP5rCBU7pYcTivMxsOl4&client_key=my_test_app&limit=6`;
  const resp = await fetch(url);
  const result = await resp.json();

  const gifs = result.results.map((img) => {
    return {
      id: img.id,
      title: img.content_description,
      url: img.media_formats.gif.url,
    };
  });
  return gifs;
};
