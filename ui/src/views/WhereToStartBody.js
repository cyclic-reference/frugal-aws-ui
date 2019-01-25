const markdown = `
## How Do I do all of that stuff?

- Organize all of your projects.
- Install Docker on your local machine
- Acquire AWS Account
- Combine the above
- Profit!


### Organize all of your projects.

Gather all of your _web-based_ projects and put them into one of two categories:

- Static Content
- Web Services

#### Static Content
Just a simple html based application that may or may not have a corresponding backend/REST API.

#### Web Services
Projects that run on/are servers and normally are accessed from \`localhost:8080\` or something like that.
These may or may not serve static content as well

**The distinction between these two categories is the amount of $$ you will spend*

### Install Docker on your local machine

In the end, Docker is going to be doing most of the heavy lifting to prod.
Things Docker will do for us:

- Service Provider
- Secure Network Communication
- Uniform Platform Provider

#### Service Provider
Docker easily provides things like: Databases, Message Queues, Content Servers.
All of which support our _Web Services_.

All **without** having to install any other software.
Once it works on your machine, then it works in production (provided your compute instance has Docker and made minor tweaks).

#### Secure Network Communication
All services communicate, on their own special network, with each other.
So there is not much need to maintain SSL between Docker processes, as none of them are public.
                    
#### Uniform Platform Provider
I can develop on a MacBook and deploy to prod on a Linux server and it will all work the same.
Docker is supported on most major Operating Systems.

Please see the Docker [compatibility matrix](https://success.docker.com/article/compatibility-matrix) for more information.

### Acquire AWS Account

[Get that shizz yo](https://portal.aws.amazon.com/billing/signup?nc2=h_ct&src=header_signup&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start)

### Combine the above

1. [Set up the local production environment](https://frugal-aws.acari.io/develop/local)
1. [Send it to the cloud!!](https://frugal-aws.acari.io/go/to/production)


### Profit!
# ?

`;

export default markdown;