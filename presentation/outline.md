# Outline

- Who is this for?
    - Developers who want to go to learn how to go to production on a budget.

- What do I hope to accomplish?
    - How to deploy production systems without OpenShift.
    - How to mimic a production like environment locally.
    - A basic working knowledge of what AWS is.
    - A understanding of how to provide trusted secure web traffic.
    - How to route requests to domains.
    - An understand of what costs you may be responsible for.
    
- How do we do the things?

# Structure

- Who is this for?
    - Developers who want to go to learn how to go to production on a budget.
    
- What is Production Like?
    - HTTPS
        - HTTP -> HTTPS redirection
        - Valid certificates
    - Sub-Domain support
    - Graceful failures
        - 404 Errors
        - Maintenance windows
    - Quick Response Times
        - Fail Fast
    - Path Support

- How do I do all of that?
    - Organize all of your projects
        - Group them by application category
            - Static Content
                - Just a simple html based application that does not have a corresponding backed/REST API
            - Web Servers
                - Projects that run servers and normally are accessed from `localhost:8080` or something like that.
    - Install Docker on your local machine
        - Supported on: MacOS, Linux, and Windows 10 Pro        
    - Sign Up for an AWS Account
    - ???
    - Profit!
    - Learn how to setup things locally then draw the AWS parallel.
    
- Local Environment Rundown
    - Static Content Setup
        - What do I need?
            - Sans React:
                - html basics
            - React:
                - React normally runs or localhost:3000
                - Most react projects support a `build` task
                    - Which creates static content in the `build` directory that has all of the goodies inside of it.
    - Web Servers
        - API Providers:
            - Node
                - Express
            - JVM Servers
                - Spring Boot
    - Service Providers
        - Mongo
        - Postgres
        - RabbitMQ            
        - NGINX
            - NGINX is open source software for web serving (Static content), reverse proxying, and more things.
                - What is a `Reverse Proxy`?
            - Configurations
                - Pathing support
                - Proxies
                - Mime Types
                - HTTP to HTTPS
                - HTTPS support
                - Sub-Domain support
                - Graceful failure support
            - Static content setup to be served
    - How Do I combine all of these in production?
        - Show Diagram.
        - Docker
            - What is docker at a high level?
            - What is Docker Compose at a high level
            - Why do I need to docker?
            - How do I Docker?
            
- Local Environment Construction:
    
- AWS Architecture: 