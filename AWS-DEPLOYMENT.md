# Deploy Our Wings Group to AWS Amplify

The site uses Next.js static export. `npm run build` writes the deployable website
to `out/`. Images are served directly, without a Next.js image optimization server.
No Node.js server is required for hosting; `next start` does not serve this export.

## Check the account first

In the AWS Billing and Cost Management console, check Free Tier, remaining
credits, and their expiration dates. AWS's current new-account Free plan lasts
up to six months or until credits are exhausted. Older accounts have different
eligibility. Do not assume that an existing account has free hosting available.

- Free Tier: https://aws.amazon.com/free/
- Amplify pricing: https://aws.amazon.com/amplify/pricing/

## Upload the prepared site

1. Open AWS Amplify in the AWS console.
2. Choose **Create new app**, then **Deploy without Git**.
3. Set the app name to `our-wings-group` and branch to `production`.
4. Choose **Drag and drop** and select `build/our-wings-group-amplify.zip`.
5. Choose **Save and deploy** after confirming the account has suitable free
   allowances or credits.
6. Open the resulting HTTPS `amplifyapp.com` address and check images, navigation,
   footer hover effects, and the mobile layout.

The ZIP contains `index.html` at its root, not an enclosing `out` directory.
Use Amplify's provided domain initially; purchasing a domain adds separate costs.

AWS manual deployment instructions:
https://docs.aws.amazon.com/amplify/latest/userguide/manual-deploys.html

## Build an update

Run these commands in PowerShell from the project directory:

```powershell
npm ci
npm run build
New-Item -ItemType Directory -Path build -Force | Out-Null
Compress-Archive -Path out/* -DestinationPath build/our-wings-group-amplify.zip -Force
```

The build downloads Google Fonts and needs internet access. Upload the new ZIP
to the existing Amplify app's production branch.

For deployment from Git, `amplify.yml` builds the site and publishes `out/`.
Select static hosting if the console asks for the application type.

## Current form behavior

The inquiry and newsletter forms show client-side success messages only. They
do not send emails or save submissions. Hosting the website does not add a form
backend; connect one before relying on these forms for real customer inquiries.
