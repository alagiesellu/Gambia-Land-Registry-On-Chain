
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 animate-fade-in">Privacy Policy</h1>
              <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
                Last updated: May 1, 2023
              </p>
            </div>
            
            <div className="prose prose-slate dark:prose-invert max-w-none animate-fade-in" style={{ animationDelay: "200ms" }}>
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p>
                  The Gambia Land Registry ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and related services (collectively, the "Services").
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <p>
                  We collect several types of information from and about users of our Services, including:
                </p>
                <h3 className="text-xl font-semibold mb-2 mt-6">2.1 Personal Information</h3>
                <p>
                  Personal information that you provide to us, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email address, phone number, postal address)</li>
                  <li>Government-issued identification information</li>
                  <li>Account login credentials</li>
                  <li>Land ownership information and documentation</li>
                  <li>Payment information</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-2 mt-6">2.2 Non-Personal Information</h3>
                <p>
                  Information about your use of our Services, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Log data (IP address, browser type, pages visited, time spent)</li>
                  <li>Device information (hardware model, operating system, unique device identifiers)</li>
                  <li>Usage patterns and preferences</li>
                  <li>Location data (when permitted by your device settings)</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">3. How We Collect Information</h2>
                <p>
                  We collect information through various methods, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Direct interactions (when you register, submit forms, or communicate with us)</li>
                  <li>Automated technologies (cookies, web beacons, server logs)</li>
                  <li>Third-party sources (government databases, identity verification services)</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">4. How We Use Your Information</h2>
                <p>
                  We may use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing, maintaining, and improving our Services</li>
                  <li>Processing land registration and verification requests</li>
                  <li>Creating and maintaining secure user accounts</li>
                  <li>Communicating with you about our Services</li>
                  <li>Responding to your inquiries and requests</li>
                  <li>Detecting, preventing, and addressing technical issues or fraudulent activities</li>
                  <li>Complying with legal obligations</li>
                  <li>Conducting research and analysis to enhance our Services</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">5. Information Sharing and Disclosure</h2>
                <p>
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Public Records:</strong> Certain land registry information is considered public record by law and may be accessible to the public.</li>
                  <li><strong>Government Authorities:</strong> We may share information with government departments and agencies for official purposes related to land administration.</li>
                  <li><strong>Service Providers:</strong> We may engage trusted third parties to perform services on our behalf, such as hosting, data analysis, and customer service.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, or legal process.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred as part of the transaction.</li>
                  <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given us your consent to do so.</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data</li>
                  <li>Secure blockchain technology for land records</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication procedures</li>
                </ul>
                <p className="mt-4">
                  While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
                <p>
                  We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Land records may be retained permanently as required by land registry regulations.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">8. Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accessing and reviewing your personal information</li>
                  <li>Correcting inaccurate or incomplete information</li>
                  <li>Requesting deletion of your personal information (where applicable)</li>
                  <li>Restricting or objecting to certain processing activities</li>
                  <li>Data portability</li>
                  <li>Withdrawing consent (where processing is based on consent)</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided at the end of this Policy. Note that certain information related to official land records may be subject to regulatory requirements and cannot be modified or deleted based solely on user requests.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
                <p>
                  Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                </p>
              </section>
              
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The most current version will always be posted on our website with the effective date. We encourage you to review our Privacy Policy regularly to stay informed about our information practices.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-4">
                  <p>Gambia Land Registry</p>
                  <p>Ministry of Lands, Banjul, The Gambia</p>
                  <p>Email: privacy@gambialand.gov.gm</p>
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

export default Privacy;
