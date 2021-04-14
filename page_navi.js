$(function(){

  //初期設定
  links= $('.page_navi:eq(0) a')
  first_url= links.eq(0).attr("href")
  //console.log( first_url );
  //get_page( first_url );
  var lastpage = first_url;
  //今のリンク先をActiveに
  $('.page_navi a').each( function(){
    if( $(this).attr("href") == lastpage ){
      $(this).addClass("active")
    }
  });


});
