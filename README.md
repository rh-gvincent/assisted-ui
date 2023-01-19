## Initial etc/hosts setup

In order to access the https://[env].foo.redhat.com in your browser, you have to add entries to your `/etc/hosts` file. This is a **one-time** setup that has to be done only once (unless you modify hosts) on each machine.

To setup the hosts file run following command:
```bash
npm run patch:hosts
```

If this command throws an error run it as a `sudo`:
```bash
sudo npm run patch:hosts
```

## Getting started

1. ```npm install```

2. ```npm run start```

3. Open browser in URL listed in the terminal output

### Testing

`npm run verify` will run `npm run lint` (eslint) and `npm test` (Jest)
