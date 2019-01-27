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
If you want to read more about why HTTPS is preferred over HTTP please see [this link](https://ahrefs.com/blog/http-vs-https-for-seo/).

Given that the above is true, then this means that any user should be able to see the secure lock whenever they visit anything on your domain.

Just having HTTPS is not enough, the certificates have to be **valid** and **trusted**. 

![Secure Site](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/secure_site.png)
Meaning that the issued certificates have not expired and were issued by a trusted certificate entity.

This is an example of what invalid certificate do to a website:

![Insecure Site](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/bad-https.png)

In addition to having HTTPs it also is great if any HTTP communication be automatically redirected to the respective HTTPS communication.

> Notice how when http://google.com~!@ is executed it automatically becomes https://google.com~!@.

### Sub-Domain Support

Users should expect to be able to visit the main domain **google.com** and also expect a family of services to be available at ***.google.com** such as: drive.google.com and maps.google.com.

> https://google.com:3000/index.html~!@

I have great confidence that you have never had to do the above. 
Then why is it you always see things like these: **localhost:3000** or **localhost:8080**, when developing locally??
That will be covered that [in this section](https://frugal-aws.acari.io/develop/local).
 
If you already have this down, good for you! However still be sure to check it out.

### Graceful Error Handling

When things do not work as expected, inform the user that such a thing has happened.

However, no person has probably ever said, "I like it when I see this, it makes me feel good." when the see this.

![404](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/404_lame.png)

Make error handling fun and informative

![404_fun](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/404.png)

Make sure that if your system has to go down for maintenance, make sure that window of time is handled as well. 

![404](https://raw.githubusercontent.com/cyclic-reference/frugal-aws-ui/master/presentation/images/github-maintenance.png)

### Respond Quickly

Always respond to the user quickly.

- Fail Fast
- Succeed Immediately

Whether the system fails or succeeds do not make the user wait to find out.

### Path Support

If I were to put a url into the browser address then, I expect to take me to the content that I was viewing at the time.

For example, if I put [https://learn.acari.io/reactive/explanations/why](https://learn.acari.io/reactive/explanations/why) 
into my browser address, it better take me to the page that I was viewing when I copied that url. 

`;

export default markdown;