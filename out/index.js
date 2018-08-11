'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
function default_1(replacementString, editor) {
    var editor = vscode_1.window.activeTextEditor;
    if (!editor) {
        return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
        editor.edit(builder => {
            if (!replacementString) {
                reject("Replacement string cannot be null or undefined");
            }
            var firstLine = editor.document.lineAt(0);
            var lastLine = editor.document.lineAt(editor.document.lineCount - 1);
            var textRange = new vscode_1.Range(0, firstLine.range.start.character, editor.document.lineCount - 1, lastLine.range.end.character);
            builder.replace(textRange, replacementString);
            resolve();
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map