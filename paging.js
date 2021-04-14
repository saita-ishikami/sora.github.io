$(function(){
  //ページを表示させる箇所の設定
  var $content = $('.pageDisplay');

  //ボタンをクリックした時の処理
  $(document).on('click', '.paging a', function(event) {
    event.preventDefault();
    //.gnavi aのhrefにあるリンク先を保存
    var link = $(this).attr("href");
    //リンク先が今と同じであれば遷移しない
    if(link == lastpage){
      return false;
    }else{
      $content.fadeOut(600, function() {
        get_page(link);
      });
      //今のリンク先を保存
      lastpage = link;
      //今のリンク先をActiveに
      $('.paging a').each( function(){
        $(this).removeClass("active")
        if( $(this).attr("href") == lastpage ){
          $(this).addClass("active")
        }
      });
    }

  });

  //初期設定
  links= $('.paging:eq(0) a')
  first_url= links.eq(0).attr("href")
  //console.log( first_url );
  get_page( first_url );
  var lastpage = first_url;
  //今のリンク先をActiveに
  $('.paging a').each( function(){
    if( $(this).attr("href") == lastpage ){
      $(this).addClass("active")
    }
  });

  //ページを取得してくる
  function get_page( url_path ){
    $.ajax({
      type: 'GET',
      url: url_path,
      dataType: 'html',
      success: function(data){
        $content.html(data).fadeIn(600);
      },
      error:function() {
        alert('ページが取得できませんでした。');
      }
    });
  }
});
