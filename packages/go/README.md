# Go

To run the server:

```sh
$ go run main.go
```

To run tests:

```sh
$ go test
```

## Debugging

### Neovim (nvim-dap + Delve)

Prerequisite: Install `delve`.

Press `<leader>dc` to pick a Go debug configuration:

- **Debug**: Launches the current file with Delve. To debug the server, pick this with `main.go` open.
- **Debug Test**: Debugs a specific test where the cursor is.
- **Debug Package Tests**: Debugs all tests in the package.
- **Attach**: Attach to an already-running process started with Delve.
	- Run `dlv debug --headless -l:2345 --accept-multiclient --log --log-output=dap ./` to compile and run `main.go` under Delve's control, listening for DAP connections on port 2345.

The DAP config also autoloads `.vscode/launch.json` configurations.

### VS Code

Use the launch configurations in `.vscode/launch.json`. You can view launch configurations by clicking the **Run and Debug** icon (⇧⌘D) in the sidebar.

- **Debug Server**: Runs `main.go` with the Delve debugger.
- **Debug Tests**: Runs all tests in debug mode.

Set breakpoints, and click the **Start Debugging** button (`<leader>ds`).

### GoLand

#### Run/debug the server

There are two options:
1. Right-click `main.go`, and select "Debug 'go build main.go'". This creates a **Go Build** run configuration (**Run > Edit Configurations > + > Go Build**).
2. Create a **Go Remote** run configuration
  (**Run > Edit Configurations > + > Go Remote**), and follow the instructions to start the application and Delve. Then run the configuration in debug mode (`<leader>ds`).

#### Debug tests

- Right-click `main_test.go` (or a specific test function) and select
  "Debug". This creates a **Go Test** run configuration (**Run > Edit Configurations > + > Go Test**).
