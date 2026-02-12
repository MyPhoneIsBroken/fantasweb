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
          <h1 className="text-4xl font-bold text-foreground mb-4">FANTAS</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Terms and Conditions</h2>
          <p className="text-muted-foreground">Effective Date: 20/08/2025</p>
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
              Fantas is a connecting service that facilitates payments between Customers and Service Providers. We are not responsible or liable for the quality, safety, legality, punctuality, suitability, or any aspect of services provided by Users. Fantas does not supervise, monitor, or guarantee any service provider. Your use of Fantas is at your own risk.
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
                  Fantas provides payment processing, messaging, quote request, and call-connection features to facilitate User interaction. These features do not imply control, endorsement, or responsibility for Users or their actions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Payment Processing and Escrow</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When a Customer accepts an Offer, the Customer must pay the agreed price ("Agreed Price") through the Platform.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Payment is processed by our payment provider, Stripe, and held securely in escrow ("Payment Account") until the job is completed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upon completion of the job, the Service Provider must request payment through the Platform.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.4</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Customer will be notified to release payment. If the Customer is satisfied with the work, they must release payment through the Platform, which triggers the transfer of funds to the Service Provider.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.5</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas acts solely as a payment intermediary. We hold funds in escrow but do not guarantee the quality, completion, or outcome of any services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.6</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Once payment is released by the Customer, funds are transferred to the Service Provider's nominated account within 3-5 business days, subject to Stripe's processing times.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.7</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If payment is not released within 30 days after the Service Provider requests payment, the job may be automatically cancelled and funds returned to the Customer as Fantas Credits, minus any applicable fees.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2.8</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users must not request or make payments outside the Platform.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Fees</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas charges a Service Fee of 15% of the Agreed Price, which is deducted from the payment before transfer to the Service Provider.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Customer pays the full Agreed Price. The Service Provider receives the Agreed Price minus the 15% Service Fee ("Service Provider Funds").
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Payment processing fees charged by Stripe (at domestic Australian rates) are deducted from the transaction in addition to the Service Fee.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.4</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All fees are non-refundable, except where required by law.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.5</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas reserves the right to modify fee structures at any time, with notice provided to Users.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Verification and Profile Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Where a Service Provider displays qualifications, insurance details, or an ABN on their profile, Fantas verifies that these documents are valid and current.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customers may rely on verified qualification, insurance, and ABN information displayed on Service Provider profiles.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas does not conduct identity checks, police checks, or any other background verification. You are responsible for conducting any additional checks you deem necessary.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.4</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Verification is point-in-time only. Service Providers must inform Fantas immediately if any verified information becomes invalid or expires.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.5</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may remove verification badges or suspend accounts if information is found to be false, expired, or invalid.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Fantas' Role and Obligations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">5.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas' role is to provide the Platform and facilitate payments through escrow.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">5.2</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Fantas accepts no liability for any aspect of interactions between Customers and Service Providers, including but not limited to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Suitability or ability of Service Providers</li>
                  <li>Performance or non-performance of services</li>
                  <li>Quality, timeliness, or completion of work</li>
                  <li>Payment disputes or cancellations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">5.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas provides the Platform on an "as is" and "as available" basis, with no warranties.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">5.4</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While Fantas holds funds in escrow, this does not create any obligation on Fantas to ensure work is completed, resolve disputes, or guarantee outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">5.5</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas only permits individuals over 18 years of age to become Users.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">5.6</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may suspend or terminate any account at any time for breach of this Agreement or misuse of the Platform.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. User Obligations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">6.1</h3>
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
                <h3 className="text-lg font-medium text-foreground mb-2">6.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customers are solely responsible for selecting, evaluating, and determining whether to release payment to Service Providers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">6.3</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Service Providers are solely responsible for:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Ensuring they have the right to work, required licences, qualifications, and insurances</li>
                  <li>Completing work to a professional standard</li>
                  <li>Requesting payment through the Platform upon completion</li>
                  <li>Complying with tax obligations on income received</li>
                  <li>Keeping verified information current and immediately notifying Fantas of any changes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">6.4</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Users must not:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Post false, misleading, unlawful, or harmful content</li>
                  <li>Harass or defame others</li>
                  <li>Post malicious code, spam, or fraudulent information</li>
                  <li>Circumvent or misuse the Platform</li>
                  <li>Request or make payments outside the Platform</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cancellations and Refunds</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">7.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If a job is cancelled before work commences, funds will be returned to the Customer as Fantas Credits.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">7.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may charge a cancellation fee depending on which party is responsible for the cancellation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">7.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If work has commenced before cancellation, any refunds are subject to negotiation between the Customer and Service Provider. Fantas may hold funds in escrow pending dispute resolution.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">7.4</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Fantas Credits:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Can be used for future jobs on the Platform</li>
                  <li>Are non-refundable for cash unless required by law</li>
                  <li>Expire 18 months from the date of issue</li>
                  <li>Cannot be transferred to another account</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disputes Between Users</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">8.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customers and Service Providers are encouraged to resolve disputes directly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">8.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may, at its discretion, assist in facilitating dispute resolution but has no obligation to do so.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">8.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may hold disputed funds in escrow until the dispute is resolved. You must cooperate with any investigation undertaken by Fantas.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">8.4</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas reserves the right to make a final determination on payment release based on evidence provided by both parties, acting reasonably.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">8.5</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Any dispute under a Service Contract is strictly between the Customer and the Service Provider. Fantas is not liable for disputes, refunds, or damages.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disclaimers and Liability</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">9.1</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Fantas is not responsible for:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>The quality, timing, legality, or outcome of any services</li>
                  <li>Any disputes, damages, or losses arising from services</li>
                  <li>Any representations made by Users</li>
                  <li>Payment processing delays or failures caused by Stripe or financial institutions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">9.2</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Except for liability in relation to any Non-excludable Condition (such as consumer guarantees under Australian Consumer Law), to the maximum extent permitted by law, Fantas disclaims all liability for any loss (including direct, indirect, consequential, or special loss) arising out of or in connection with:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Use of the Platform</li>
                  <li>Interactions or transactions between Users</li>
                  <li>Acts or omissions of Users</li>
                  <li>Reliance on verified information (subject to clause 4.1-4.2)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">9.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Except for liability in relation to any Non-excludable Condition, Fantas's liability to any User is limited to the total amount of fees paid by that User to Fantas during the twelve month period prior to any incident, or $50.00, whichever is greater.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">9.4</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You assume all risks and expressly release, indemnify, and hold harmless Fantas from any and all loss, liability, injury, damage, or costs arising from services provided through the Platform.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Payment Provider Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">10.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas uses Stripe to operate the Payment Account.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">10.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In using the payment functionality, you also agree to Stripe's terms of service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">10.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If Fantas changes its payment provider, you may be asked to agree to additional terms.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Termination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">11.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Either you or Fantas may terminate your account at any time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">11.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may suspend or terminate your account immediately for breach of this Agreement or misuse of the Platform.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">11.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Termination does not affect any existing Service Contracts between Users or any obligations related to fees or payments.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Privacy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">12.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas collects and handles personal information in accordance with our Privacy Policy and the Privacy Act 1988 (Cth).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">12.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By using the Platform, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Modifications</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">13.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas may modify this Agreement at any time. Where we make material modifications, we will notify you via the Platform or your registered email.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">13.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continued use of the Platform after changes are notified constitutes acceptance of the amended Terms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">13.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you do not agree with any changes, you must stop using the Platform and terminate your account.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Governing Law</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">14.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement is governed by the laws of Victoria, Australia.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">14.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You submit to the exclusive jurisdiction of the courts of Victoria, Australia.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. No Agency</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">15.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nothing in this Agreement creates a contract of employment, partnership, joint venture, or agency relationship between Fantas and any User.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">15.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas is not responsible for any acts or omissions of Users.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">16. General</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">16.1</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If any part of this Agreement is invalid or unenforceable, the remaining provisions remain in full effect.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">16.2</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement constitutes the entire agreement between you and Fantas regarding use of the Platform.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">16.3</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas is a platform provider only. All Service Contracts are strictly between Customers and Service Providers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">16.4</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fantas has no liability for the quality, completion, or outcome of services, except as expressly provided in relation to verified information.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">16.5</h3>
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
