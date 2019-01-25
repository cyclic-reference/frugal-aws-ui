const markdown = `
## What is production like?
For starters, it is pretty great, you should try it out some time!
Here are some characteristics that great production environments contain:

  - Secure Network Traffic
  - Sub-Domain Support
  - Graceful Error Handling
  - Respond Quickly
  - Path Support

### Secure Network Traffic

This day in age there is really no good reason as to why any website should accessed through insecure communication channels.
If you want to read mor about why HTTPS please see [this link](https://ahrefs.com/blog/http-vs-https-for-seo/).

This means that any user should be able to see the secure lock whenever they go to an address on your domain.

So the certificates hove to be **valid** and **trusted**. 

![Secure Site](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/secure_site.png)

Meaning that the issued certificates have not expired and where given to you by a trusted certificate entity.

### Not this!
![Insecure Site](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/bad-https.png)

> Any HTTP URL should automatically redirect to the respective HTTPS URI.

Notice how http://google.com opens up https://google.com

### Sub-Domain Support

Users should expect to be able to visit the main domain **google.com** and also expect a family of services to be available at **\*.google.com** such as: drive.google.com and maps.google.com.

#### https://google.com:3000/index.html
Then why is it you always see things like these: **localhost:3000** or **localhost:8080**, when developing locally??
We will cover that [in this section](https://frugal-aws.acari.io/develop/local). 
If you already have this down, good for you! However still be sure to check it out.

### Graceful Error Handling

When things do not work as expected, inform the user that such a thing has happened.

However, no person has probably ever said, "I like it when I see this, it makes me feel good." when the see this.

![404](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/404_lame.png)

Make error handling fun and informative

![404_fun](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/404.png)

Make sure that if your system has to go down for mmaintenance, make sure that window of time is handled as well. 

![404](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/github-maintenance.png)

### Respond Quickly
### Path Support


`;

export default markdown;