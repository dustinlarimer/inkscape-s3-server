Heroku/Phantom.js: SVG → PNG → S3
=================================

Based on [stomita](https://github.com/stomita)'s [heroku-screenshot](https://github.com/stomita/heroku-screenshot) project ([slidedeck](http://www.slideshare.net/shinichitomita/phantomjs-screenshot-server-on-heroku))


Phantom.js buildpack for Heroku
-----
    $ heroku create --stack cedar --buildpack http://github.com/stomita/heroku-buildpack-phantomjs.git

S3 Configuration
-----
    $ heroku config:add AWS_ACCESS_KEY_ID=<your aws access key id>
    $ heroku config:add AWS_SECRET_ACCESS_KEY=<your aws secret access key>
    $ heroku config:add UPLOAD_BUCKET_NAME=<bucket name for rendered artifacts>

Deploying to Heroku
-----
    $ git push heroku master
    $ heroku ps:scale web=<number of processes>