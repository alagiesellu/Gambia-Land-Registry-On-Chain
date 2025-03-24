
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 animate-fade-in">Terms of Service</h1>
              <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
                Last updated: May 1, 2023
              </p>
            </div>
            
            <div className="prose prose-slate dark:prose-invert max-w-none animate-fade-in" style={{ animationDelay: "200ms" }}>
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p>
                  Welcome to the Gambia Land Registry ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the Gambia Land Registry website, mobile applications, and services (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services. Please read these Terms carefully before using our Services.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
                <p>
                  Throughout these Terms, the following terms shall have the meanings defined below:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>"User"</strong> refers to any individual or entity that accesses or uses our Services.</li>
                  <li><strong>"Content"</strong> refers to all information, data, text, software, graphics, and other materials that may be accessed through our Services.</li>
                  <li><strong>"User Content"</strong> refers to content submitted, uploaded, or transmitted by users through our Services.</li>
                  <li><strong>"Land Record"</strong> refers to any official documentation related to land ownership, boundaries, rights, or transfers registered within our system.</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
                <p>
                  To access certain features of our Services, you may be required to register for an account. When registering, you must provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                <p>
                  You agree to immediately notify us of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to comply with these requirements.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
                <p>
                  When using our Services, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws, regulations, or third-party rights.</li>
                  <li>Submit false, misleading, or fraudulent information.</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with a person or entity.</li>
                  <li>Interfere with or disrupt the operation of our Services or servers.</li>
                  <li>Attempt to gain unauthorized access to our Services or systems.</li>
                  <li>Use our Services for any illegal or unauthorized purpose.</li>
                  <li>Engage in any activity that could harm, disable, or impair our Services.</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">5. Land Registration and Records</h2>
                <p>
                  Our Services provide a platform for digital land registration and record-keeping. While we strive to maintain accurate records, the Gambia Land Registry does not guarantee the accuracy, completeness, or reliability of any land records stored within our system.
                </p>
                <p>
                  Official verification of land records may require additional steps through authorized government channels. Users are advised to conduct proper due diligence before relying on any information obtained through our Services for significant transactions or legal matters.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                <p>
                  Our Services and their contents, features, and functionality are owned by the Gambia Land Registry or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p>
                  These Terms do not grant you any right, title, or interest in our Services, Content, or intellectual property. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any Content without our express prior written permission.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">7. Privacy</h2>
                <p>
                  Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and disclose information from our users. By using our Services, you consent to our collection and use of personal data as outlined in our Privacy Policy.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">8. Disclaimers and Limitations of Liability</h2>
                <p>
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  IN NO EVENT WILL WE BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; OR (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless the Gambia Land Registry, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from (a) your use of our Services; (b) your violation of these Terms; (c) your violation of any rights of another; or (d) your conduct in connection with the Services.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your access to our Services at any time for any reason without notice or liability. Upon termination, your right to use the Services will immediately cease.
                </p>
                <p>
                  All provisions of these Terms which by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                <p>
                  We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to access or use our Services after revisions become effective, you agree to be bound by the revised Terms.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4">
                  <p>Gambia Land Registry</p>
                  <p>Ministry of Lands, Banjul, The Gambia</p>
                  <p>Email: legal@gambialand.gov.gm</p>
                  <p>Phone: +220 345 6789</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Terms;
