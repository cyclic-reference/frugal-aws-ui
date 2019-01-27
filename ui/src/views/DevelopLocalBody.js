const markdown = `
## Replicate Production on Local Machine

### Example Project Setup
There will be a total of 3 websites in this demonstration project:

- A React Web Application
- A Spring Boot Application
- A Express Application

### Entry Point
The entry point to all of our applications will be the NGINX server.
The server will be configured such that all Client-Side communications will be in HTTPS.

#### What is NGINX?
NGINX is open source software for serving static content, proxying requests, and more things.
Static content and proxying are just the features that we will be focused on right now.

###### NGINX Configuration

Self-Signed certificates can be used for initially setting up secured communications.
Which will later be replaced by free, trusted [Let's Encrypt](https://letsencrypt.org/) certificates.

In order have a single server handle the requests across many of your domains, NGINX will have to be configured to take advantage of [Host-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host).
Allowing for a single server to handle requests for many domains, which means that you have to pay less.

This server will also handle all graceful failure pages that the user may see while interacting with your domain.

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

<div class="image-container">
![Local Architecture](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/LOCAL_ARCH.png)
</div>

An example implementation of the schema can be found here:

## [https://github.com/cyclic-reference/frugal-aws](https://github.com/cyclic-reference/frugal-aws) 

`;

export default markdown;