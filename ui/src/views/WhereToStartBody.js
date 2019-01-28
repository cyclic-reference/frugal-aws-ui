const markdown = `
## Setting up a cost optimized strategy.

- Organize all of your projects.
- Install Docker on your local machine
- Acquire AWS Account
- Combine the above
- Profit!

---

### Organize all of your projects.

Gather all of your _web-based_ projects and put them into one of two categories:

- Static Content
- Web Services

#### Static Content
Just a simple html based application that may or may not have a corresponding backend/REST API.

#### Web Services
Projects that run on or are themselves servers. 
These are normally accessed from \`localhost:8080\` or something like that.
Static content may or may not be served by these service(s) as well

**The distinction between these two categories is the amount of $$ you will spend*

---

### Install Docker on your local machine

In the end, Docker is going to be doing most of the heavy lifting to prod.
Things Docker will do for us:

- Service Provider
- Secure Network Communication
- Uniform Platform Provider

###[Docker's installation can be found here.](https://docs.docker.com/install/)

#### Service Provider
Docker easily provides things like: Databases, Message Queues, Content Servers.
To which our _Web Services_ may rely on these to function.

All **without** having to install any other software.
Once it works on your machine, then it works in production (provided your compute instance has Docker and minor configuration tweaks).

#### Secure Network Communication
Services, running in a Docker network, can communicate with each other securely. 
It is secure because they are not doing it on a public network.
So there is not much need to maintain SSL between Docker processes.
                    
#### Uniform Platform Provider
I can develop on a MacBook and deploy to the production environment on a Linux server and it will all work the same.
Docker is supported on most major Operating Systems.

Please see the Docker [compatibility matrix](https://success.docker.com/article/compatibility-matrix) for more information.

---

### Acquire AWS Account

[Here is a link to create a free AWS account.](https://portal.aws.amazon.com/billing/signup?nc2=h_ct&src=header_signup&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start)

---

### Combine the above

Follow the following steps listed below:

1. [Set up the local production environment](https://frugal-aws.acari.io/develop/local)
1. [Send it to the cloud!!](https://frugal-aws.acari.io/go/to/production)


---

# <div style="text-align: center">?</div>

---

### <div style="text-align: center">Profit!</div>

`;

export default markdown;