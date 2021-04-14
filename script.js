function oritatami( id ) {
  var element= document.getElementById( id );
  if(element.className=='close') {
    element.style.display='block';
    element.className='open';
  }
  else {
    element.style.display='none';
    element.className='close';
  }
}

// TOC auto generator

function generate_toc( tag ) {
  var tag = (tag == undefined) ? 'h2' : tag;
  // 目次投入場所
  var toc = document.getElementById( 'toc' );
  // articleを集める
  var articles = document.getElementsByTagName( 'article' );
  cn = [];
  cn.push('<ul>');
  for (var i=0; i<articles.length; i++) {
    // 見出しを集める
    var headings = articles[i].getElementsByTagName( tag );
    for (var j=0; j<headings.length; j++) {
      var h = headings[j];
      // アンカータグを作って
      var d = document.createElement('a');
      var aname = 'a'+i;
      d.name = aname;
      // 各hタグの直前に突っ込む
      h.parentNode.insertBefore(d, h);
      // 目次からそのアンカーにリンクを張る
      var s = '<li><a href="#' + aname + '">'+h.innerHTML+'</a></li>';
      cn.push(s);
    }
    // 子要素
    var child_headings = articles[i].getElementsByTagName( 'h3' );
    for (var j=0; j<child_headings.length; j++) {
      var h = child_headings[j];
      // アンカータグを作って
      var d = document.createElement('a');
      var aname = 'a' + i + 'h' + j;
      d.name = aname;
      // 各hタグの直前に突っ込む
      h.parentNode.insertBefore(d, h);
      // 目次からそのアンカーにリンクを張る
      var s = '<li><a href="#' + aname + '">'+h.innerHTML+'</a></li>';
      cn.push(s);

    }


  }
  cn.push('</ul>');
  toc.innerHTML = cn.join("");
}
