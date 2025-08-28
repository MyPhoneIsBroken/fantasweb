import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-lg border border-border p-8 space-y-8">
          <div className="text-center border-b border-primary/20 pb-6 mb-8">
            <p className="text-lg font-semibold text-primary mb-2">Effective Date: 20/08/2025</p>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions ("Agreement") govern your use of the Fantas Platform. By using our website, app, or any part of our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-destructive mb-3">Important Disclaimer</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Fantas is a connecting service only.</strong> We are not responsible or liable for the quality, safety, legality, punctuality, suitability, or any aspect of services provided by Users. Fantas does not supervise, monitor, or guarantee any service provider, and we do not provide refunds, warranties, or dispute resolution. Your use of Fantas is entirely at your own risk.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Scope of Fantas Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">1.1</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Fantas provides an online platform ("Platform") that enables:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Customers to post job requests ("Posted Jobs"), or browse service categories to find service providers.</li>
                  <li>Service Providers to respond with offers, provide quotes, or accept jobs.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">1.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When a Customer accepts an Offer from a Service Provider, a separate agreement ("Service Contract") is formed directly between the Customer and Service Provider. Fantas is not a party to that contract.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">1.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas does not employ or contract Service Providers. All Users act independently.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">1.4</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may, at its discretion, provide messaging, quote request, and call-connection features to facilitate User interaction. These features do not imply control, endorsement, or responsibility for Users or their actions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Fantas' Role and Obligations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.1</h3>
                <p className="text-muted-foreground leading-relaxed">Fantas' sole role is to provide the Platform.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.2</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Fantas accepts no liability for any aspect of interactions between Customers and Service Providers, including but not limited to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Accuracy of information</li>
                  <li>Suitability or qualifications of Service Providers</li>
                  <li>Performance or non-performance of services</li>
                  <li>Payment arrangements, refunds, or cancellations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas does not conduct checks on Users (identity, qualifications, police checks, licences, or insurances). You are solely responsible for verifying any User before engaging with them.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.4</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas provides the Platform on an "as is" and "as available" basis, with no warranties.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Obligations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.1</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">You must:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Be at least 18 years old</li>
                  <li>Comply with all applicable laws</li>
                  <li>Provide accurate and lawful information on the Platform</li>
                  <li>Maintain control of your account</li>
                  <li>Not misuse, copy, or resell the Platform</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customers are solely responsible for selecting, evaluating, and paying Service Providers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Service Providers are solely responsible for ensuring they hold the right to work, required licences, qualifications, and insurances.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.4</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Users must not:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Post false, misleading, unlawful, or harmful content</li>
                  <li>Harass or defame others</li>
                  <li>Post malicious code, spam, or fraudulent information</li>
                  <li>Circumvent or misuse the Platform</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Fees and Payments</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently, Fantas does not process payments through the Platform. Customers and Service Providers must arrange payment directly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may in the future introduce in-app payment services and connection fees. Users will be notified of any fee structure changes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas disclaims all responsibility for refunds, cancellations, disputes, or non-payment between Users.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Disclaimers and Liability</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">5.1</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Fantas is not responsible for:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>The quality, timing, legality, or outcome of any services</li>
                  <li>Any disputes, damages, or losses arising from services</li>
                  <li>Any representations made by Users</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">5.2</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">To the maximum extent permitted by law, Fantas disclaims all liability for any loss (including direct, indirect, consequential, or special loss) arising out of or in connection with:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Use of the Platform</li>
                  <li>Interactions or transactions between Users</li>
                  <li>Acts or omissions of Users</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disputes Between Users</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">6.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas will not mediate, arbitrate, or resolve disputes between Customers and Service Providers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">6.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Any dispute under a Service Contract is strictly between the Customer and the Service Provider.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">7.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may suspend or terminate your account at any time for breach of this Agreement or misuse of the Platform.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">7.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may terminate your account at any time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">7.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Termination does not affect any existing Service Contracts between Users.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Privacy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">8.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas collects and handles personal information in accordance with our Privacy Policy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">8.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users consent to the use of their data for operation of the Platform.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modifications</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">9.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may amend these Terms at any time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">9.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continued use of the Platform after changes are notified constitutes acceptance of the amended Terms.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">10.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement is governed by the laws of Victoria, Australia.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">10.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You submit to the exclusive jurisdiction of the courts of Victoria, Australia.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. No Agency</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">11.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nothing in this Agreement creates a contract, employment, partnership, joint venture, or agency relationship between Fantas and any User.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. General</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">12.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If any part of this Agreement is invalid, the remaining provisions remain in effect.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">12.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement constitutes the entire agreement between you and Fantas regarding use of the Platform.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">12.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas does not provide services — we are only a connector.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">12.4</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All Service Contracts are strictly between Customers and Service Providers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">12.5</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas has no liability for refunds, quality, punctuality, performance, damages, or disputes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">12.6</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You use Fantas at your own risk.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;