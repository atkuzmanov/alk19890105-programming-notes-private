CKEDITOR.plugins.add( 'code', {
    init: function( editor ) {
        editor.addCommand( 'code', {
            exec: function( editor ) {
                var nodeName = 'code';
                var sel = editor.getSelection();
                var range = sel.getRanges()[0];
                var parentElement = range.getCommonAncestor(false,true);
                var code =  CKEDITOR.document.createElement(nodeName);
                code.setAttribute('class','prettyprint');
                var parentCodeNode = getParentCodeNode(parentElement,nodeName);
                if(parentCodeNode==false){
                    insertCodeNodeWithSelectedContent(editor,nodeName);
                }else{
                    if(range.startContainer.equals(range.endContainer)) {
                        if (range.endOffset >= 1) {
                            if(range.endOffset == range.startOffset) {
                                //Leave the code block
                                var span = CKEDITOR.document.createElement('span');
                                span.insertAfter(parentElement);
                                moveToEditElement(editor,span);

                            }else{
                                //Partial select, replace current selection with span
                                removeSelectedTextInCode(editor,parentCodeNode);
                            }
                        } else {
                            if(parentCodeNode.$.innerText.replace('\n','').trim()==''){
                                //Rename node to span
                                parentCodeNode.remove();
                            }else{
                                //Leave the code block
                                var span = CKEDITOR.document.createElement('span');
                                span.insertAfter(parentElement);
                                moveToEditElement(editor,span);
                            }
                        }
                    }else{
                        removeSelectedTextInCode(editor,parentCodeNode);
                    }

                }
                if(editor.checkDirty()){
                    editor.resetDirty();
                }
            }
        });
        editor.ui.addButton( 'Code', {
            label: 'Code',
            command: 'code',
            icon: this.path+'code.png',
            toolbar: 'insert'
        });

        function insertCodeNodeWithSelectedContent(editor, nodeName){
            var sel = editor.getSelection();
            var selText = sel.getSelectedText();
            var range = sel.getRanges()[0];
            var content = range.cloneContents();
            var code = CKEDITOR.document.createElement('code');
            code.addClass('prettyprint');
            range.extractContents();
            code.setHtml(sanitizeContent(content));
            range.insertNode(code);
            range.moveToElementEditablePosition(code);
            range.select();
            if(selText.trim()!=''){
                clearEmptyCode(editor,'code');
            }
        }

        function getParentCodeNode(nodeElement, nodeName){
            if(nodeElement.$.nodeName.toLowerCase()=='code'){
                return nodeElement;
            }
            var parents = nodeElement.getParents(true),parent;
            for(var i in parents){
                parent = parents[i];
                if(parent.$.nodeName.toLowerCase()==nodeName){
                    return parent;
                }
            }
            return false;
        }

        function sanitizeContent(content){
            var html = '',child;
            for(var i=0;i < content.$.childNodes.length;i++){
                child = content.$.childNodes.item(i);
                if(child.nodeType == CKEDITOR.NODE_TEXT){
                    html += escapeHtmlChars(child.nodeValue);
                }else if(child.nodeType == CKEDITOR.NODE_ELEMENT){
                    if(child.nodeName.toLowerCase()=='code'){
                        html += child.innerHTML.replace('<code class="prettyprint">',child.innerHTML,'').replace('</code>',child.innerHTML,'');
                    }else{
                        html += child.outerHTML.replace('<code class="prettyprint">',child.outerHTML,'').replace('</code>',child.outerHTML,'');
                    }
                }else{
                    html += child.outerHTML.replace('<code class="prettyprint">',child.outerHTML,'').replace('</code>',child.outerHTML,'');
                }
            }
            return html;
        }

        function escapeHtmlChars(unsafe){
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        function moveToEditElement(editor,element){
            var documentRange = editor.createRange();
            documentRange.selectNodeContents(editor.document.getBody());
            documentRange.moveToElementEditEnd(element);
            documentRange.select();
            documentRange.scrollIntoView();
        }

        function clearEmptyCode(editor,nodeName){
            var node, codes = editor.document.getElementsByTag(nodeName);
            for(var i=0;i<codes.count();i++){
                node = codes.getItem(i);
                if(node.$.innerText.replace('\n','').trim()==''){
                    node.remove();
                }
            }
        }

        function removeSelectedTextInCode(editor,parentNode){
            var sel = editor.getSelection();
            var range = sel.getRanges()[0];
            var firstRange = editor.createRange();
            firstRange.selectNodeContents(parentNode);
            firstRange.setEnd(range.startContainer,range.startOffset);

            var lastRange = editor.createRange();
            lastRange.selectNodeContents(parentNode);
            lastRange.setStart(range.endContainer, range.endOffset);

            var midContent = sanitizeContent(range.cloneContents());
            if(midContent!=''){
                var span = CKEDITOR.document.createElement('span');
                span.setHtml(midContent);
                span.insertAfter(parentNode);
            }
            var lastContent = sanitizeContent(lastRange.cloneContents());
            if(lastContent!=''){
                var code = CKEDITOR.document.createElement('code');
                code.addClass('prettyprint');
                code.setHtml(lastContent);
                code.insertAfter(span);
            }
            var firstContent = sanitizeContent(firstRange.cloneContents());
            if(firstContent!=''){
                parentNode.setHtml(firstContent);
            }else{
                parentNode.remove();
            }
            clearEmptyCode(editor,'span');
            clearEmptyCode(editor,'code');
        }

        editor.on('contentDom', function () {
            editor.document.on('keyup', function(event) {
                var nodeList = editor.document.getElementsByTag('font');
                for(var i=0;i<nodeList.count();i++){
                    var fontNode = nodeList.getItem(i);
                    var spanNode = fontNode.$.childNodes[0];
                    var bNode = spanNode.childNodes[0];
                    if(bNode.innerHTML !==undefined){
                        var span = CKEDITOR.document.createElement('span');
                        span.setText(bNode.innerHTML);
                        span.insertAfter(fontNode);
                        fontNode.remove();
                        moveToEditElement(editor,span);
                    }

                }
            },null,null,1 );
        },null,null,1 );
    }
});
