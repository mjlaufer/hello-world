# Node.js

To run the dev server:

```sh
$ pnpm dev
```

To run tests:

```sh
$ pnpm test
```

## Debugging

### Neovim (nvim-dap + js-debug-adapter)

Prerequisite: Install `js-debug-adapter` (via Mason).

1. Start the Node process with the V8 inspector:
    - To debug the server, run `pnpm debug`.
    - To debug tests, run `pnpm test:debug`.
2. In Neovim, start the Node debugger: `<leader>ds`
3. Select the **Attach** configuration.

The DAP config also autoloads `.vscode/launch.json` configurations.

### VS Code

Use the launch configurations in `.vscode/launch.json`. You can view launch configurations by clicking the **Run and Debug** icon (⇧⌘D) in the sidebar.

- **Debug Server**: Starts the server with the debugger attached.
- **Debug Tests**: Runs Vitest with the debugger attached.

Set breakpoints, and click the **Start Debugging** button (`<leader>ds`).

### IntelliJ

#### Option 1: npm run configuration

1. Go to **Run** > **Edit Configurations** > **+** > **npm**.
2. Set **Command** to `run`; set **Scripts** to `debug` (for the server) or `test:debug` (for tests).
3. Set breakpoints, and run the configuration in debug mode (`<leader>ds`).

#### Option 2: Attach to a running process

1. Start the Node process with the V8 inspector:
    - To debug the server, run `pnpm debug`.
    - To debug tests, run `pnpm test:debug`.
2. Go to **Run** > **Edit Configurations** > **+** > **Attach to Node.js/Chrome**.
3. Set **Port** to `9229`, and run the configuration in debug mode (`<leader>ds`).
