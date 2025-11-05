# Oceans of Andromeda

A beautiful dark theme for Visual Studio Code that gives you the taste of waters from Andromeda.

## Features

- **Deep Ocean Background**: Rich, dark ocean-inspired background (#111D1EFF) that reduces eye strain
- **Vibrant Syntax Highlighting**: Colorful and intuitive code colors
- **Teal Green Accents**: Beautiful accent color (#19D08AFF) for active elements
- **Comprehensive Coverage**: All VS Code UI elements are themed consistently
- **Perfect Balance**: Aesthetically pleasing while maintaining excellent readability

## Building

To package the theme as a VSIX file for distribution:

1. **Install vsce (VS Code Extension Manager)**

   ```bash
   npm install -g @vsce/vsce
   ```

2. **Package the extension**

   ```bash
   vsce package
   ```

   This creates a `.vsix` file in the current directory.

3. **Test the package**
   ```bash
   code --install-extension oceans-of-andromeda-1.0.0.vsix
   ```

---

**Enjoy coding with Oceans of Andromeda!** If you like this theme, please star the repository and share it with others.
