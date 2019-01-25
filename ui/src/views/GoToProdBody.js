const markdown = `
# How to stop caring about something after it requires you to write the same shit over and over again.

### Example Project Setup
There will be a total of 3 websites:

- A React Web Application
- A Spring Boot Application
- A Express Application

### Entry Point
The entry point to all of our applications will be the Route 53 Service
All Client-Side communications will remain in HTTPS

#### What is Route 53?

This service is responsible for routing all of your network traffic across your hosted zone
such as \`example.com\`


This service will cost you $0.50 a month to run a hosted zone.
Plus a annual cost for domain renewal, which depends on what you choose ($12.00 a year for .com)

#### EC2

Elastic Cloud Compute for our servers, this service will run our compute apps and NGINX.
While Elastic Block Store (EBS) will save our instances data to a file system.

Super easy instance setup for Docker CE can be found [here](https://docs.docker.com/docker-for-aws/).

EC2 is the most expensive service you will be interacting with.

It cost under $10 a month for a single micro instance to run.
You will also pay just under $3.00 for CloudWatch (which is a logging service).

#### NGINX Configuration

HTTPS Certificates will be the free, trusted [Let's Encrypt](https://github.com/certbot/certbot/tree/master/certbot-dns-route53) certificates created to your hosted zone.
Provided by the CertBot "Route-53 verification plugin".

The use of Host-Headers will allow NGINX to proxy requests based off of the domain supplied to the corresponding service.


The host headers will have to be different now that it will be running under an actual domain.
So **https://compute-app-one.localhost** will turn into **https://compute-app-one.sample-domain.com**

The most easy way to get your Let's Encrypt Certificates will be by running the **certbot** on your local machine.

This will require the AWS cli and access credentials to your account to be set up.


This will require also require for you to have Private Docker Image Repositories.
Which will run you $7.00 a month and gives you 6 Private Repositories.
Or you could just go Hardcore mode and get your certs on your EC2 instance via SCP and build your image locally.
                

#### The Spring and Express Application
Will remain the same as the local setup.


#### The react application
Be served by CloudFront
Certificates will be provided by the Certificate Manager at no charge to you!

#### What is CloudFront?
Is basically a CDN for your static content
All of your content will be put on servers closer to your users, so faster response times!
CloudFront will be fed by S3, which is just a remote file system.
Since CloudFront caches your static content. Whenever you want to release new code you have to invalidate those caches.
This could cost you upwards of $0.1 a month, though I have never exceeded $0.02.


![Cloud Architecture](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/AWS_ARCH.png)

`;

export default markdown;