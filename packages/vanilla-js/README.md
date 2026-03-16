# Vanilla JS

To run the dev server:

```sh
$ pnpm serve
```

To run tests:

```sh
$ pnpm test
```

## Debugging

### Neovim (nvim-dap + js-debug-adapter)

Prerequisites: `js-debug-adapter` installed via Mason.

To debug in the browser:

1. Start Chrome with remote debugging: `open -a "Google Chrome" --args --remote-debugging-port=9222`
2. Start the dev server: `pnpm serve`
3. Navigate to `http://localhost:3000` in Chrome.
4. In Neovim, open `src/main.js`, set breakpoints with `<leader>db`, and start the debugger
   with `<leader>dc`. Select the **Attach to Chrome** configuration.

To debug tests, run Vitest with `--inspect-brk`:

```sh
$ node --inspect-brk ./node_modules/.bin/vitest --no-file-parallelism
```

Then switch to Node mode with `<leader>ds` and select **Attach**.

### VS Code

Use the launch configurations in `.vscode/launch.json`:

- **Launch Chrome**: Opens `http://localhost:3000` in Chrome with the debugger attached
  (start the dev server with `pnpm serve` first).
- **Debug Tests**: Runs Vitest with the debugger attached.

Set breakpoints in `src/main.js` and press F5.

### IntelliJ

Open the project in IntelliJ with JavaScript support:

- **Debug in browser**: Create a JavaScript Debug configuration with the URL
  `http://localhost:3000` (start the dev server with `pnpm serve` first).
- **Debug tests**: Right-click `src/main.test.js` and select "Debug".
