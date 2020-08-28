import * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext) => {

	const afterDecorationType = vscode.window.createTextEditorDecorationType({
		after: {
			contentText: "test",
			margin: "0 0 0 100px"
		}
	});

	const addDecoration = () => {
		let activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) {
			return;
		}
		activeEditor.setDecorations(afterDecorationType, [activeEditor.document.lineAt(activeEditor.selection.active.line)]);
	}

	vscode.commands.registerCommand("run.test.command", addDecoration);
}

