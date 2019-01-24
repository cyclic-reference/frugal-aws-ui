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
### Graceful Error Handling
### Respond Quickly
### Path Support


`;

export default markdown;