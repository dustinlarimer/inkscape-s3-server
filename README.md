Inkscape: SVG → PNG → S3
========================

This project is just a few days old and I would love all the help you can offer to tighten this thing up.

File reading and writing is pretty wonky (just learning as I go, eager to better understand streams and asynchronicity), and fully detached from the POST response.

I built this to generate crisp PNGs (and potentially PDF, EPS, plus other image formats) from complex D3.js visualizations. Ideally these would be used as visualization previews, embedded in emails, or served as low-fidelity alternate content. Alternate methods that I tried (phantom.js, canvg) had severely limited SVG spec coverage, resulting in broken, partially rendered artifacts. So here we are! Help me stabilize this beast!

Create a new Droplet on DigitalOcean
-----

**Specs: Ubuntu 12.04 x64 with 512MB Ram**

* [Set up and secure your server](https://www.digitalocean.com/community/articles/initial-server-setup-with-ubuntu-12-04)
* [Install Inkscape](http://wiki.inkscape.org/wiki/index.php/Installing_Inkscape#Ubuntu_Linux)
* [Install Node and NPM](https://www.digitalocean.com/community/articles/how-to-install-an-upstream-version-of-node-js-on-ubuntu-12-04)

Configure S3
-----
    export AWS_ACCESS_KEY_ID=<your aws access key id>
    export AWS_SECRET_ACCESS_KEY=<your aws secret access key>
    export AWS_BUCKET_NAME=<bucket name for rendered artifacts>
    export PORT=<#### or default of 4444 will be used>

Deploy to DigitalOcean
-----
    ...coming soon