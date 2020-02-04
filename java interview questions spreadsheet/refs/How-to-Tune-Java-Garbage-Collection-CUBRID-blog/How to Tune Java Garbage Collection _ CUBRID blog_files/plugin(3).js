CKEDITOR.plugins.add( 'customlink', {
    init: function( editor ) {
        CKEDITOR.on('dialogDefinition', function (evt) {
            var dialog = evt.data;
            if (dialog.name == 'link') {
                // Get dialog definition.
                var def = evt.data.definition;
                def.minHeight = 50;
                def.resizable = CKEDITOR.DIALOG_RESIZE_NONE;
                def.removeContents('advanced');
                def.removeContents('target');
                def.removeContents('upload');
                var info = def.getContents('info');
                info.remove('linkType');
                info.get('protocol').items = [['http://','http://'],['https://','https://'],['ftp://','ftp://']];
            }
        });
    }
});