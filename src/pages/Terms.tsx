import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
const Terms = () => {
  return <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms and Conditions</h1>
          
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-lg border border-border p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By downloading, installing, or using the Fantas mobile application, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use of the App</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fantas grants you a limited, non-exclusive, non-transferable license to use the app for personal purposes. You agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Use the app in compliance with all applicable laws and regulations</li>
              <li>Not reverse engineer, decompile, or disassemble the app</li>
              <li>Not use the app for any unlawful or prohibited activities</li>
              <li>Not interfere with or disrupt the app's functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of any content you create or upload through the app. However, by using the app, you grant Fantas a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your content as necessary to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fantas shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the app. Our total liability shall not exceed the amount you paid for the app, if any.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Updates and Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of significant changes through the app or other appropriate means. Continued use of the app after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms and Conditions, please contact us through the app or visit our website.
            </p>
          </section>
        </div>
      </div>
    </div>;
};
export default Terms;