import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from "lucide-react";

const Features = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <Card className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Rocket className="text-primary h-5 w-5" /> Enhanced Security
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <CardDescription className="text-sm text-muted-foreground">
                Leverage blockchain's immutability to protect land records from tampering and fraud.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Rocket className="text-primary h-5 w-5" /> Transparency
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <CardDescription className="text-sm text-muted-foreground">
                Enable public verification of land ownership and transaction history.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature Card 3 */}
          <Card className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Rocket className="text-primary h-5 w-5" /> Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <CardDescription className="text-sm text-muted-foreground">
                Reduce processing times and administrative overhead through automated workflows.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature Card 4 */}
          <Card className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Rocket className="text-primary h-5 w-5" /> Accessibility
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <CardDescription className="text-sm text-muted-foreground">
                Provide equal access to land registry services for all citizens, regardless of location or status.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature Card 5 */}
          <Card className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Rocket className="text-primary h-5 w-5" /> Cost Reduction
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <CardDescription className="text-sm text-muted-foreground">
                Minimize expenses related to manual record-keeping and dispute resolution.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature Card 6 */}
          <Card className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Rocket className="text-primary h-5 w-5" /> Economic Empowerment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <CardDescription className="text-sm text-muted-foreground">
                Unlock economic opportunities by enabling citizens to leverage their land as collateral for loans and investments.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
