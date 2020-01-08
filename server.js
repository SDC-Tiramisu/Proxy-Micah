const express   = require('express'),
      httpProxy = require('http-proxy');

const PORT = process.env.PORT || 3000;

const app   = express();
const proxy = httpProxy.createProxyServer({});

app.use(express.static('./'));

app.get('/api/images', (req,res,next) => {
  // Insert Load Balancer here
  // proxy.web(req,res, {target:`http://ec2-13-58-162-184.us-east-2.compute.amazonaws.com:3001/`});
});
app.get('/api/articles', (req,res,next) => {
  // Insert Load Balancer here
  // proxy.web(req,res, {target:`http://ec2-18-188-250-254.us-east-2.compute.amazonaws.com:3002/`});
});
app.get('/api/recommendations', (req,res,next) => {
  // Insert Load Balancer here
  // proxy.web(req,res, {target:`http://ec2-13-58-212-164.us-east-2.compute.amazonaws.com:3003/`});
});

app.listen(PORT, (err) => {
  if(err){
    console.log(err);
  }else {
    console.log(`[Server] Started on port ${PORT}`);
  }
})