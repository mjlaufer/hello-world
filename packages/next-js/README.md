# Next.js

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

Prerequisites: `js-debug-adapter` installed via Mason.

To debug server-side code (e.g., server components, API routes):

1. Start the Next.js dev server with the V8 inspector:
   ```sh
   $ NODE_OPTIONS='--inspect' pnpm dev
   ```
2. In Neovim, switch to Node mode with `<leader>ds` and select **Attach**.

To debug client-side code:

1. Start Chrome with remote debugging: `open -a "Google Chrome" --args --remote-debugging-port=9222`
2. Start the dev server: `pnpm dev`
3. Navigate to `http://localhost:3000` in Chrome.
4. In Neovim, set breakpoints with `<leader>db` and start the debugger with `<leader>dc`.
   Select the **Attach to Chrome** configuration.

To debug tests, run Vitest with `--inspect-brk`:

```sh
$ node --inspect-brk ./node_modules/.bin/vitest --no-file-parallelism
```

Then switch to Node mode with `<leader>ds` and select **Attach**.

### VS Code

Use the launch configurations in `.vscode/launch.json`:

- **Launch Server (Next.js)**: Starts the Next.js dev server with Turbopack and the debugger
  attached.
- **Launch Client (Chrome)**: Opens `http://localhost:3000` in Chrome with the debugger
  attached.
- **Debug Tests**: Runs Vitest with the debugger attached.
- **Full Stack Debug**: Compound configuration that launches both server and client together.

Set breakpoints in source files and press F5.

### IntelliJ

The `.idea/` directory contains pre-configured run configurations for Next.js debugging:

- **Server-side debugging**: Run the `dev` npm script in debug mode.
- **Client-side debugging**: Use the JavaScript Debug configuration pointed at
  `http://localhost:3000`.
- **Debug tests**: Right-click `app/page.test.tsx` and select "Debug".
