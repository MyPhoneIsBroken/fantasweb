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
          <p className="text-muted-foreground">This Privacy Policy was last updated on 20 August 2025.</p>
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-lg border border-border p-8 space-y-8">
          <div className="text-center border-b border-primary/20 pb-6 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Fantas ABN (38-647-338-442) ("Fantas", "we", "our", "us") manages information that we collect from you in accordance with the Privacy Act 1988 (Cth) and other applicable privacy legislation in Australia.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This Privacy Policy describes how Fantas collects, uses, shares, and handles your personal information, and sets out your rights and our obligations in relation to that information.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By accessing the Fantas website, mobile application, or related services (the "Platform"), you agree to this Privacy Policy and the Terms and Conditions of Fantas' User Agreement. If you do not agree, you must not use the Platform.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-primary mb-3">Important Note</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fantas is strictly a connecting platform between customers and service providers. We do not employ service providers, we do not guarantee their work, and we are not responsible for services arranged through the Platform.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Collection of Your Personal Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Information you provide directly</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We collect personal information when you register or interact with the Platform. This may include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Name, address, email address, and phone number</li>
                  <li>Profile information, including occupation, qualifications, skills, experience, and location preferences</li>
                  <li>Profile photo (if you choose to upload one)</li>
                  <li>Any other information you voluntarily provide in job postings, quotes, reviews, or messages</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  If you choose not to provide certain information, we may be unable to provide you with full access to the Platform.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Information collected automatically</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  When you use the Platform, we may automatically collect:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Device information (IP address, unique device ID, browser type, operating system)</li>
                  <li>Usage data (pages viewed, time spent, navigation, clickstream, app activity, and return frequency)</li>
                  <li>Location information (approximate via IP address, or precise via GPS if you enable location services)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Information from third parties</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may receive additional information about you from:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Identity verification providers (if applicable)</li>
                  <li>Social media platforms you choose to link with Fantas</li>
                  <li>Publicly available sources or regulators where required by law</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Public postings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you post tasks, offers, reviews, or comments, your username, profile, and posted content may be publicly visible and searchable. Fantas does not control or accept liability for how other users or third parties use information you voluntarily disclose publicly.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Personal Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use your information for purposes including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Account access & authentication:</strong> To register, log in, and maintain your account</li>
              <li><strong>Service provision:</strong> To connect Customers and Service Providers and enable messaging, browsing, and quoting</li>
              <li><strong>Safety & security:</strong> To detect, investigate, and prevent fraud, misuse, or breaches</li>
              <li><strong>Improving the Platform:</strong> To monitor usage, enhance features, and develop new services</li>
              <li><strong>User interactions:</strong> To display profiles, reviews, and ratings to other Users</li>
              <li><strong>Legal compliance:</strong> To meet our obligations under Australian law, court orders, or regulator requirements</li>
              <li><strong>Marketing (with consent):</strong> To inform you about news, features, or promotions. You may opt-out at any time</li>
            </ul>
            <p className="text-primary font-medium mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookies and Similar Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Keep you signed in and maintain session security</li>
              <li>Remember preferences</li>
              <li>Analyse Platform performance and usage trends</li>
              <li>Deliver relevant content</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can disable cookies in your browser, but parts of the Platform may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. How We Share Your Personal Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may disclose information in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Between Users:</strong> Profile, reviews, ratings, and any information you choose to share</li>
              <li><strong>Service providers:</strong> Third-party IT, analytics, or verification services engaged by Fantas</li>
              <li><strong>Legal requirements:</strong> If required by law, court, or regulator, or where necessary to enforce our Terms and Conditions</li>
              <li><strong>Business transfers:</strong> In the event of a merger, sale, or restructure of Fantas, user data may be transferred as an asset</li>
              <li><strong>With your consent:</strong> Where you explicitly authorise us to share your information</li>
            </ul>
            <p className="text-primary font-medium mt-4">
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
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third Parties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Platform may link to third-party websites or services. If you access these, you do so at your own risk. Fantas is not responsible for the privacy practices of third-party websites, apps, or service providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Marketing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you register, you may choose to opt-in to receive marketing material from Fantas. You can opt-out at any time by:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Updating preferences in your account settings</li>
              <li>Clicking "unsubscribe" in our emails</li>
              <li>Contacting us directly</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We may still send you non-promotional, account-related communications (e.g., policy updates, security notices).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under the Privacy Act 1988 (Cth), you have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate, incomplete, or outdated information</li>
              <li>Request deletion of your account and personal data, subject to legal and operational retention requirements</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Requests can be made using the contact details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal information only for as long as necessary to provide the Platform and comply with legal obligations. When no longer required, we will delete, destroy, or de-identify your information in accordance with Australian law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Platform is not directed to, and must not be used by, persons under 18 years of age. We do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions, requests, or complaints about this Privacy Policy or how we handle your personal information, please contact us at:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-foreground font-medium">Fantas</p>
              <p className="text-muted-foreground">Email: admin@fantas.com.au</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;