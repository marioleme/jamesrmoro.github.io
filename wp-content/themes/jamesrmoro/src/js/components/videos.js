$(document).ready(function(){

  $.ajax({
    url:'https://www.googleapis.com/youtube/v3/channels',
    type:'GET',
    dataType:'json',
    data: {
      part : 'contentDetails',
      forUsername : 'videosdojames',
      key: 'AIzaSyBhaCun2OrErGPalTsHKrSk9_Pd8bnj4Cs'
    },
    success: function(data){
      $.each( data.items, function( i, item ) {
          pid = item.contentDetails.relatedPlaylists.uploads;
          getVids(pid);
      });
    },
    complete: function() {
        $('.ajax').remove();
    }
  });

  function getVids(pid){
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems',
        type:'GET',
        dataType:'json',
        data: {
          part : 'snippet',
          maxResults : 20,
          playlistId : pid,
          key: 'AIzaSyBhaCun2OrErGPalTsHKrSk9_Pd8bnj4Cs'
        },
        success: function(data){
          var results;
          $.each( data.items, function( i, item ) {
            var idVideo = item.snippet.resourceId.videoId;
            var urlVideo = 'https://www.youtube.com/watch?v='+idVideo+'';
            var thumbnail = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            template = `<div class="item-post">
                  ${thumbnail ? '<div class="image"><a href="'+urlVideo+'" target="_blank" title="'+title+'"><img src="' +thumbnail+ '"></div></a>' : '<div class="image"><a href="'+urlVideo+'" target="_blank" title="'+title+'"><img src="https://www.materiaisricos.com.br/wp-content/themes/materiaisricos/src/images/sem-imagem.jpg"></a></div>'}
                    <div class="text">
                <h2><a href="${urlVideo}" target="_blank" title="${title}">${title}</a></h2>
                <a href="${urlVideo}" target="_blank" title="${title}">Assistir</a>
              </div>
            </div>`;
            $('#list-videos').append(template);
          });
        },
        complete: function() {
          $('.ajax').remove();
        }
    });
  }
});