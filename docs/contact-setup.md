# Contact form setup

The restored Contact section uses the existing `@emailjs/browser` dependency. It sends through EmailJS's real browser API; no custom backend is required. The confirmed contact address is **anhduc.coder@gmail.com**.

Live delivery has not been verified because the service ID, template ID, and public key have not been supplied. Until all three are configured, the send button is disabled and visitors can use the email link.

## 1. Configure EmailJS

1. Create or open an [EmailJS account](https://dashboard.emailjs.com/), complete any required verification, and connect an email service. Copy its **Service ID**.
2. Create an email template with these settings:

   | Template setting | Value |
   | --- | --- |
   | To Email | `anhduc.coder@gmail.com` — fixed recipient |
   | From Name | `{{from_name}}` |
   | From Email | The authenticated/default address of your connected email service |
   | Subject | `{{subject}}` |
   | Reply-To | `{{reply_to}}` |

   Include all submitted information in the template body:

   ```text
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   {{message}}
   ```

   Keep the recipient fixed in the template. Use the visitor's address for Reply-To, rather than using it as the authenticated sender address. Copy the **Template ID**.
3. Copy the **Public Key** from your EmailJS account settings. Use only the public key in this frontend.
4. Add your actual production origin to EmailJS's **Domains** allowlist, including the scheme. For example, a GitHub Pages site uses `https://YOUR-USERNAME.github.io`, without the repository path. Add each custom domain or preview origin you intend to support, and localhost only if you need local delivery testing.
5. Test the template in the EmailJS dashboard before testing the website.

See the official [template guide](https://www.emailjs.com/docs/user-guide/creating-email-templates/), [public-key guidance](https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/), and [domain allowlist instructions](https://www.emailjs.com/docs/faq/can-i-add-my-domain-to-allowlist/).

## 2. Configure the frontend

For local development, copy `.env.example` to `.env.local` and fill in:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=anhduc.coder@gmail.com
```

Restart Vite after changing these values. `VITE_CONTACT_EMAIL` controls the displayed email and mailto links; the actual recipient is fixed in the EmailJS template above.

For Vercel or Netlify, add these same variables in the project's build environment settings, then rebuild and redeploy. For GitHub Pages, provide them to the build step in your deployment workflow before running `npm run build`, then publish the generated `dist` directory. Vite embeds these public values at build time; changing dashboard variables alone does not update an existing build.

Never put SMTP passwords, email account passwords, or private API keys in `VITE_` variables or frontend source. This integration needs no private credentials in the repository.

## 3. Spam protection and delivery checks

The form includes a hidden honeypot, a duplicate-submission lock, and the EmailJS SDK's ten-second browser throttle. Enable the production domain allowlist in EmailJS as described above; the provider also applies its own request limits. These frontend measures supplement provider controls. See [SDK options](https://www.emailjs.com/docs/sdk/options/) and [EmailJS spam protection](https://www.emailjs.com/docs/faq/does-emailjs-expose-my-account-to-spam/).

The current form does not include a CAPTCHA widget or token. Leave template CAPTCHA verification disabled unless a matching widget and token submission are implemented.

After deployment:

1. Submit a real message with a valid name, email, subject, and a message of at least 20 characters.
2. Confirm the form shows loading and prevents duplicate sends.
3. Check the recipient inbox and spam folder. Verify the name, email, subject, and complete message arrived.
4. Click Reply and verify the recipient is the visitor's email address.
5. Verify a failed submission keeps all entered text and provides an email fallback.

The UI reports success only after EmailJS returns a successful response. API acceptance alone does not verify inbox delivery; complete the inbox and Reply-To checks above. Browser QA with intercepted provider responses does not send real messages and must not be treated as live delivery verification.

Run `npm run build` for the production build. This checkout uses JavaScript/JSX and has no TypeScript check script.
