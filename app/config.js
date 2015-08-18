'use strict';

var envir = {
  facebook: {
    appId: '1500838256868973',
    scope: 'email,user_birthday,public_profile'
  },
  link: {
    contribute: 'https://docs.google.com/forms/d/1eXgyJYnoGjRRsp0l-T--QhemtEy74ZO57litqC35iVk/viewform?c=0&w=1',
    tumblr: 'http://youthstudios.tumblr.com/post/120255258648/trasua',
    feedback: 'mailto:tampham47@live.com?subject=[FB-TROLLOLO]',
    shareFb: 'http://youthstudios.tumblr.com/post/120255258648/trasua',
    privacy: 'http://youthstudios.tumblr.com/post/120255258648/trasua'
  },
  apiPath: 'http://localhost:4201/',
  storageName: 'trasua',
  shareInfo: {
    display: 'touch',
    link: 'http://youthstudios.tumblr.com/post/120255258648/trasua',
    picture: 'https://2vwevg.dm2303.livefilestore.com/y2peH5Cti5rwq98eItpuZH065BZ8JIyPrJ71dUkw9fPC7uv7ZxSXvpdOlcxY09Y104z3IZu_NPSfshy2Xkh1E7DhRPihk2OENbGXm80_pYiaOFtQlZh_4yht-i_QKrSWZ2PHz51cqGovXjGLe5w7CZF30yGw5nwlnPwZd5xy0v-BX8/icon.png',
    name: '#trasua - ứng dụng hẹn hò cung hoàng đạo',
    description: 'Ứng dụng tìm gấu dựa trên cung hoàng đạo, sẽ giúp bạn dễ dàng tìm được người yêu như ý, thử ngay!',
    caption: 'get your partner n enjoy your life'
  }
};

// production
envir.apiPath = 'http://frozen-fortress-3812.herokuapp.com/';

module.exports = envir;
