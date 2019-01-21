const filter = {
  urls: [   
    '*://*/Mobile/*',
  ],
};

const opt = ['blocking'];

window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    console.log('page blocked - ' + page.url);

    return {
      cancel: true,
    };
  },
  filter,
  opt
);
