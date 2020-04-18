jQuery(document).ready( function($) {
    function media_upload(button_class) {
        var _custom_media = true,
        _orig_send_attachment = wp.media.editor.send.attachment;

        $('body').on('click', button_class, function(e) {
            var button_id ='#'+$(this).attr('id');
            var btn_current = $(this);
            var self = $(button_id);
            var send_attachment_bkp = wp.media.editor.send.attachment;
            var button = $(button_id);
            var id = button.attr('id').replace('_button', '');
            console.log(id);
            _custom_media = true;
            $(".widget-control-save").removeAttr("disabled");
            wp.media.editor.send.attachment = function(props, attachment){
                if ( _custom_media  ) {
                    $(btn_current).parent('p').find('.custom_media_id').val(attachment.id);
                    $(btn_current).parent('p').find('.custom_media_url').val(attachment.url);
                    $(btn_current).parent('p').find('.custom_media_image').attr('src',attachment.url).css('display','block');
                } else {
                    return _orig_send_attachment.apply( button_id, [props, attachment] );
                }
            }
            wp.media.editor.open(button);
                return false;
        });
    }
    media_upload('.custom_media_button.button');
});