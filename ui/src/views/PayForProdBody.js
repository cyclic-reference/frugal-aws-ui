const markdown = `
# AWS Cost Breakdown

- Route 53: $1.50/month
- EC2: $0/month (Free For 12-Months)
- EBS: $0/month (Free For 12-Months)
- CloudWatch: $0/month (Free For 12-Months)
- Certificate Manager: $0/month (Free For 12-Months)
- CloudFront: $0.10/month (Free For 12-Months, excluding invalidations)
- S3: $0.0/month (Free For 12-Months)

> You can support your own prod for about $2.00 a month

[See the AWS Free-Tier page for limits and usage.](https://aws.amazon.com/free/free-tier/)

After a year you are looking at about $15 a month

### For more information about the why the costs are the way they are, please see [Production Setup Page](https://frugal-aws.acari.io/go/to/prod)

`;

export default markdown;