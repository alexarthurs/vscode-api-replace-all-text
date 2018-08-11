'use strict';

import {window, TextEditor, Range} from 'vscode';

export default function (replacementString: string, editor?: TextEditor): Thenable<void> {
    var editor = window.activeTextEditor;

    if (!editor) {
        return Promise.resolve();
    }
 
    return new Promise<void>((resolve, reject) => {
        editor.edit(builder => {  
            
            if(!replacementString){
                reject("Replacement string cannot be null or undefined");
            }

            var firstLine = editor.document.lineAt(0);
            var lastLine = editor.document.lineAt(editor.document.lineCount - 1);
            var textRange = new Range(0,
                firstLine.range.start.character,
                editor.document.lineCount - 1,
                lastLine.range.end.character); 

            builder.replace(textRange, replacementString);
            resolve(); 
    });
});
} 
