var express = require('express'),
    app = express(),
    fs = require('fs'),
    knox = require('knox');

var Stream = require('stream'),
    Inkscape = require('inkscape');

app.configure(function() {
  app.use(express["static"](__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(app.router);
  return
});
if(process.env['AWS_ACCESS_KEY_ID']) {
  var client = knox.createClient({
    key    : process.env['AWS_ACCESS_KEY_ID']
  , secret : process.env['AWS_SECRET_ACCESS_KEY']
  , bucket : process.env['AWS_BUCKET_NAME']
});
} else {
  var conf = require('./conf')
  var client = knox.createClient(conf.aws)
}


app.post('/', function(req, res, next){

	var filename_id = req.body.id;
	var svg_name = filename_id + '.svg'
	var png_name = filename_id + '.png'

	var svg_path = __dirname + '/tmp/' + svg_name
	var png_path = __dirname + '/tmp/' + png_name

	var svg_doctype = '<?xml version=\"1.0" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">';
	var svg_decoded = new Buffer(req.body.source, 'base64').toString();
	var svg_source = svg_doctype + svg_decoded
  //console.log("decoded", svg_decoded)

	var temp_svg = fs.writeFile(svg_path, svg_source, function(err){
		if (err) console.log(err);
		var writable = fs.createWriteStream(png_path);
		writable.on('close', written);

		readable = fs.createReadStream(svg_path);
		readable
      .pipe(new Inkscape(['-e']))
      .pipe(writable);

    function written() {
      client.putFile(png_path, png_name, { 'Content-Type' : 'image/png' }, function (err, result) {
        if (err) console.log(err);
        if (result){
          console.log('PNG saved to Amazon S3');
          result.resume();
          result.on('end', function(){
            console.log('Connection closed');
            fs.unlink(svg_path, function (err) {
              if (err) console.log(err);
              fs.unlink(png_path, function (err) {
                if (err) console.log(err);
                return;
              });
            });
          });
        }
      });
    }
	});

	res.format({
		json: function(){
			res.send('SVG/PNG files saved\n');
		}
	});

})


var port = process.env['PORT'] || 4444
exports.startServer = function() {
  console.log('Launching Inkscape on port ' + port);
  return app.listen(port);
};
exports.startServer()
