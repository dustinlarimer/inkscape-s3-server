Inkscape: SVG → PNG → S3
========================

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