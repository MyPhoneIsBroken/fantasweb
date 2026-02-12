import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Fantas Privacy Policy</h1>
          <p className="text-muted-foreground">This Privacy Policy was last updated on 12 February 2026.</p>
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-lg border border-border p-8 space-y-6">
          <div className="border-b border-primary/20 pb-6 mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fantas ABN (38-647-338-442) ("Fantas", "we", "our", "us") manages information that we collect from you in accordance with the Privacy Act 1988 (Cth) and other applicable privacy legislation in Australia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This Privacy Policy describes how Fantas collects, uses, shares, and handles your personal information, and sets out your rights and our obligations in relation to that information.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing the Fantas website, mobile application, or related services (the "Platform"), you agree to this Privacy Policy and the Terms and Conditions of Fantas' User Agreement. If you do not agree, you must not use the Platform.
            </p>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-destructive mb-3">Note</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fantas is strictly a connecting platform between customers and service providers. We do not employ service providers, we do not guarantee their work, and we are not responsible for services arranged through the Platform.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Collection of Your Personal Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Information you provide directly</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  We collect personal information when you register or interact with the Platform. This may include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Name, address, email address, and phone number;</li>
                  <li>Profile information, including occupation, qualifications, skills, experience, and location preferences;</li>
                  <li>Profile photo (if you choose to upload one);</li>
                  <li>Verification documents, including qualifications, insurance certificates, and ABN details (for Service Providers);</li>
                  <li>Any other information you voluntarily provide in quotes, reviews, or messages.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  If you choose not to provide certain information, we may be unable to provide you with full access to the Platform.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Payment information</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  When you use the Platform's payment features, we collect certain payment-related information through our third-party payment processor, Stripe:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li><strong>For Customers:</strong> When you make a payment through the Platform, your payment is processed directly by Stripe. We do not collect, store, or have access to your credit card details or bank account information on our servers. We retain only your unique Stripe customer identifier ("Stripe ID") to facilitate transactions and maintain payment records.</li>
                  <li><strong>For Service Providers:</strong> Service Providers are onboarded via Stripe Connect to receive payouts. Your bank account and identity information required for payouts is collected and held directly by Stripe. We do not store or have access to your bank account details on our servers. We retain only your Stripe Connect account identifier.</li>
                  <li><strong>For all Users:</strong> We retain records of transaction amounts, dates, Stripe IDs, Service Fee deductions, escrow status, and Fantas Credit balances for accounting, dispute resolution, and legal compliance purposes.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Information collected automatically</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  When you use the Platform, we may automatically collect:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Device information (IP address, unique device ID, browser type, operating system);</li>
                  <li>Usage data (pages viewed, time spent, navigation, clickstream, app activity, and return frequency);</li>
                  <li>Location information (approximate via IP address, or precise via GPS if you enable location services).</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Information from third parties</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  We may receive additional information about you from:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Identity verification providers (if applicable);</li>
                  <li>Stripe, in connection with payment processing, escrow management, and Stripe Connect onboarding;</li>
                  <li>Social media platforms you choose to link with Fantas;</li>
                  <li>Publicly available sources or regulators where required by law.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Public postings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you post tasks, offers, reviews, or comments, your username, profile, and posted content may be publicly visible and searchable. Fantas does not control or accept liability for how other users or third parties use information you voluntarily disclose publicly.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Personal Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We use your information for purposes including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li><strong>Account access & authentication:</strong> To register, log in, and maintain your account.</li>
              <li><strong>Service provision:</strong> To connect Customers and Service Providers and enable messaging, browsing, and quoting.</li>
              <li><strong>Payment processing:</strong> To facilitate escrow payments between Customers and Service Providers via Stripe, process Service Fee deductions, and maintain your Stripe ID for transaction records.</li>
              <li><strong>Safety & security:</strong> To detect, investigate, and prevent fraud, misuse, or breaches.</li>
              <li><strong>Improving the Platform:</strong> To monitor usage, enhance features, and develop new services.</li>
              <li><strong>Verification:</strong> To verify Service Provider qualifications, insurance, and ABN information displayed on profiles.</li>
              <li><strong>User interactions:</strong> To display profiles, reviews, and ratings to other Users.</li>
              <li><strong>Legal compliance:</strong> To meet our obligations under Australian law, court orders, or regulatory requirements.</li>
              <li><strong>Marketing (with consent):</strong> To inform you about news, features, or promotions. You may opt-out at any time.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookies and Similar Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We may use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Keep you signed in and maintain session security;</li>
              <li>Remember preferences;</li>
              <li>Analyse Platform performance and usage trends;</li>
              <li>Deliver relevant content.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can disable cookies in your browser, but parts of the Platform may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. How We Share Your Personal Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We may disclose information in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li><strong>Between Users:</strong> Profile, reviews, ratings, and any information you choose to share.</li>
              <li><strong>Service providers:</strong> Third-party IT, analytics, or verification services engaged by Fantas.</li>
              <li><strong>Payment processor (Stripe):</strong> We share your Stripe ID and transaction details with Stripe to process payments, hold funds in escrow, and facilitate payouts to Service Providers via Stripe Connect. Stripe may collect additional information from you directly (such as credit card or bank account details) in accordance with Stripe's own privacy policy and terms of service.</li>
              <li><strong>Legal requirements:</strong> If required by law, court, or regulator, or where necessary to enforce our Terms and Conditions.</li>
              <li><strong>Business transfers:</strong> In the event of a merger, sale, or restructure of Fantas, user data may be transferred as an asset.</li>
              <li><strong>With your consent:</strong> Where you explicitly authorise us to share your information.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not rent or sell personal information to unaffiliated third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We take reasonable steps to protect your personal information from unauthorised access, use, or disclosure. However, no system is completely secure, and we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your login credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Payment Information and Stripe</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fantas uses Stripe as its sole payment processor. When you use the Platform's payment features, the following applies:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
              <li><strong>Customers:</strong> When you pay for services through the Platform, your payment is processed by Stripe. Your credit card or payment method details are collected and stored directly by Stripe. Fantas does not store, access, or host your credit card or bank account information on its servers. We retain only your Stripe ID to identify your account for payment purposes.</li>
              <li><strong>Service Providers:</strong> Service Providers are onboarded via Stripe Connect to receive payouts. Bank account and identity information required for payouts is collected and held directly by Stripe. Fantas does not store or have access to your bank account details. We retain only your Stripe Connect account ID.</li>
              <li><strong>Escrow:</strong> Funds paid by Customers are held securely in escrow via Stripe until the job is completed and payment is released in accordance with our Terms and Conditions.</li>
              <li><strong>Transaction records:</strong> Fantas retains records of transaction amounts, dates, Stripe IDs, Service Fee deductions (15% of the Agreed Price), Stripe processing fees, and Fantas Credit balances for accounting, dispute resolution, and legal compliance purposes.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              By using the payment features of the Platform, you also agree to Stripe's terms of service and privacy policy. If Fantas changes its payment provider, you may be asked to agree to additional terms. Fantas is not responsible for Stripe's handling of your personal or financial information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third Parties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Platform may link to third-party websites or services. If you access these, you do so at your own risk. Fantas is not responsible for the privacy practices of third-party websites, apps, or service providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Marketing</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              When you register, you may choose to opt-in to receive marketing material from Fantas. You can opt-out at any time by:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Updating preferences in your account settings;</li>
              <li>Clicking "unsubscribe" in our emails; or</li>
              <li>Contacting us directly.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We may still send you non-promotional, account-related communications (e.g., policy updates, security notices).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Under the Privacy Act 1988 (Cth), you have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Access the personal information we hold about you;</li>
              <li>Request correction of inaccurate, incomplete, or outdated information;</li>
              <li>Request deletion of your account and personal data, subject to legal and operational retention requirements.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Requests can be made using the contact details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal information only for as long as necessary to provide the Platform and comply with legal obligations. When no longer required, we will delete, destroy, or de-identify your information in accordance with Australian law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Platform is not directed to, and must not be used by, persons under 18 years of age. We do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              If you have questions, requests, or complaints about this Privacy Policy or how we handle your personal information, please contact us at:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Fantas</strong><br />
              Email: admin@fantas.com.au
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
