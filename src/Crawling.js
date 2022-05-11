const axios = require('axios');
const cheerio = require('cheerio');

const Crawling = () => {
  let queryString = '지브리 사진';

  const getImage = async () => {
    const ID_KEY = 'swG9o0Rrp7H9pWg88SeY';
    const SECRET_KEY = 'IZ4ZLojH6R';
    try {
      return await axios.get(`/v1/search/image?query=${queryString}`, {
        headers: {
          'X-Naver-Client-Id': ID_KEY,
          'X-Naver-Client-Secret': SECRET_KEY,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };
  getImage();

  // <body class="wrap-new api_animation tabsch tabsch_image">
  // <div id="wrap">
  // <div id="container" role="main">
  // <div id="content" class="pack_group">
  // <div id="main_pack" class="main_pack">
  // <section class="sc_new sp_nimage _prs_img _imageSearchPC" style="overflow-anchor:none">
  // <div class="_contentRoot image_wrap" style="min-height: 0px;">flex
  // <div class="photo_group _listGrid">
  // <div class="photo_tile _grid" style="opacity: 1; position: relative; height: 6531px; width: 1152px;">
  // <div class="tile_item _item" data-id="image_sas:blog157258746|6|222674865230_191361137" data-cr-area="img" data-groupkey="1652247801321" style="width: 230px; position: absolute; left: 0px; top: 0px;">
  // <div class="photo_bx api_ani_send _photoBox">
  // <div class="thumb" style="background-color:#AAbDD0">
  // <a href="#" data-cr-area="img*N" data-cr-log="thum&r=1&i=blog_f4980f8ff0416db0c02dca26a5fbf7e1&g=33506312904570" class="link_thumb _imageBox _infoBox" title="지브리 사진모음(보정)" role="button" aria-pressed="false">
  // <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.ne…yjovDH5SZ1iMBv9fc90wXqFWRdSeAMg.JPEG.disenchant18%2FIMG_6685.JPG&type=a340" class="_image _listImage" data-org-width="340" data-org-height="191" alt="지브리 사진모음(보정)" style="height: 122px; opacity: 1;">
  //

  //   getImage()
  //     .then((html) => {
  //       let photoList = [];
  //       const $ = cheerio.load(html.data);
  //       const $bodyList = $('section > div > div > div > div');
  //       $bodyList.each((i, e) => {
  //         photoList[i] = $(this)
  //           .find(
  //             'div.tile_item _item div.photo_bx api_ani_send _photoBox div.thumb a.link_thumb _imageBox _infoBox img'
  //           )
  //           .attr('src');
  //       });
  //       return photoList;
  //     })
  //     .then((res) => console.log(res));
};

export default Crawling;
