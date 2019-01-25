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
                


![Local Architecture](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/LOCAL_ARCH.png)

`;

export default markdown;