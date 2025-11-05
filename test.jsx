const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "my-awesome-theme" is now active!'
  );

  // You can add commands or other functionalities here if needed.
  // For a simple theme, the activation function might not do much beyond logging.
}

export default function Sidebar() {
  return (
    <aside className="w-[220px] h-screen absolute left-0 top-0">
      <a href="/home" class="w-full bg-slate-800 color-white-100">
        <i class="fa fa-home"></i>
        Home
      </a>
    </aside>
  );
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
