const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
      {
        name: "最美的期待",
        artist: '周笔畅',
        url: 'https://s128.xiami.net/541/2541/2103492840/1801512872_1516205153138.mp3?ccode=xiami_web_web&expire=86400&duration=210&psid=6f6dbc75e4e6c7599d609dab45a4aecc&ups_client_netip=183.17.57.105&ups_ts=1566144182&ups_userid=0&utid=PXCgFUb80BMCAQ6b39KRZnuH&vid=1801512872&fn=1801512872_1516205153138.mp3&vkey=B8a9d4fbb5325ab32269e63ad992cbbd6',
        cover: '//pic.xiami.net/images/album/img94/204994/2049941516204994.jpg?x-oss-process=image/resize,limit_0,s_144,m_fill',
        lrc: 'song-post/zaishuiyifang.lrc'
      },
    ]
});