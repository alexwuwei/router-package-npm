# router-package-npm

Simple and fast minimalist HTTP router creation method for NODE

##Installation

`` npm install router-package-npm ``

##Features

* Robust yet simple routing
* Highly Performant
* Extensive built-in test coverage
* Executable for generating applications quickly and efficiently

##Quick Start

The fastest way to get started is to use the executable to generate an application, as shown below:

First, install the executable:

``npm install router-package-npm``

Then create the app in your chosen JS file:

``var productsRouter = new Router();``

After creating your new router, you'll want to create some routes. Here are some examples:

####GET Route
``productsRouter.get('/products', function(req, res) {
  console.log('get route set for products');
  res.write('GET route hit');
  res.end();
});``

####POST Route
``productsRouter.post('/products', function(req,res){
  console.log('post route set for /products');
  res.write('POST route hit');
  res.end();
});``

Keep in mind that you can also create PUT And DELETE routes.

Once you're done, You'll want to initialize your server. Here is an example of that:

``http.createServer(productsRouter.route()).listen(3000);``

##Vision

Our vision is to provide small, efficient, and robust tooling for building HTTP servers. This makes it an ideal solution for building single-page applications, web sites or hybrids.

router-package-npm does not require that you use a specific templating engine.

##Testing

Mocha/Chai testing is integrated into this app! Feel free to check the Mocha/Chai documentation for more detail on this.

##License

MIT. Because MIT is awesome and we are too. 
