const markdown = `
## Replicate Production on Local Machine

### Example Project Setup
There will be a total of 3 websites:

- A React Web Application
- A Spring Boot Application
- A Express Application

### Entry Point
The entry point to all of our application will be the NGINX server.
All Client-Side communications will be in HTTPS.

#### What is NGINX?
NGINX is open source software for serving static content, proxying requests, and more things.
Static content and proxying are just the ones focused on right now.

###### NGINX Configuration


Self-Signed certificates can be used for the initial HTTPS set up.
Which will later be replaced by free, trusted [Let's Encrypt](https://github.com/certbot/certbot/tree/master/certbot-dns-route53) certificates.


The use of Host-Headers will allow NGINX to proxy requests based off of the domain supplied.
Allowing for a single server to handle requests for many domains.

The server will also handle all graceful failure pages that the user may see while interacting with your domain.

#### The React Application
Will be accessible from https://static-site.localhost
The static content will be served by the NGINX server

#### The Spring Application
Will be accessible from https://compute-app-one.localhost
The static content will be served by the Spring Boot app via the NGINX proxy server.
The NGINX server will access the spring boot server via the Docker supplied host name: **compute-app-one**

#### The Express Application
Will be accessible from https://compute-app-two.localhost
The static content will be served by the Express app via the NGINX proxy server.
The NGINX server will access the spring boot server via the Docker supplied host name: **compute-app-two**


![Local Architecture](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/LOCAL_ARCH.png)

`;

export default markdown;