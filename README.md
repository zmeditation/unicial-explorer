# Unicial explorer-website

This repository holds the application shell that launches the web version of Unicial Explorer.

The responsibility of this repository is to generate the React UI to configure the ethereum providers, handle analytics and ultimately load and start the [kernel](https://github.com/unicial/kernel) and Renderer.

Keep in mind that the interaction with the Wallet the user's using is partly being handled by the [kernel](https://github.com/unicial/kernel) and it's dependencies (like [eth-connect](https://github.com/unicial/eth-connect)). This repository is reponsible for creating a provider using [unicial-connect](https://github.com/unicial/unicial-connect) and handing that down to the kernel.

## Consistent versions

To enable consistent versioning, this repository embeds `unicial-ecs` which is used locally by the scene, wearables and other content developers to create and debug Unicial scenes.

To get a working Unicial Explorer that is fully compliant with a specific version of the SDK (`unicial-ecs`) please do install stable versions of the library via `npm install unicial-ecs@latest`.

## How to test

```bash
npm ci
npm run start
```

You must test that the application works both in http://localhost:3000 and in http://localhost:3000/cdn/packages/website/index.html since it provides a CDN-like environment.

## How to test with local Kernel

The website has the [kernel](https://github.com/unicial/kernel) as a dependency. To be able to run the site locally, you have a few options:

1. Edit `.env.development` to point the `KERNEL_PATH` env var to your local kernel folder
2. Run `npm run postinstall` to update the .env files
3. Run `npm run start:linked`

If the linking is not working you can try one of two things:

1. Check the path the build is trying to use to find the Kernel by reading the error page. It might look something like `../kernel/static/index.js`
2. Create the directory structure needed, in this case `mkdir ../kernel/static`
3. Get the index.js from the kernel dependency installed on node_modules: `cp ./node_modules/@dcl/kernel/index.js ../kernel/static`

Another choice is to:

1. Clone the [kernel](https://github.com/unicial/kernel) project
2. Make sure the folder is located where the linking error is trying to find it, usually `../kernel`
3. Build it locally (check the [kernel README](https://github.com/unicial/kernel#running-the-explorer))
