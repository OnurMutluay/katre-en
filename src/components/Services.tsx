import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Sales Strategy (B2B & B2C)",
    description:
      "Designing and optimizing sales processes to drive revenue and strengthen client relationships.",
    icon: <ChartIcon />,
  },
  {
    title: "Industry & Market Analysis",
    description:
      "Providing data-driven insights to identify opportunities, mitigate risks, and stay ahead of market trends.",
    icon: <WalletIcon />,
  },
  {
    title: "Digital Marketing",
    description:
      "Crafting impactful online strategies to build brand presence and accelerate growth.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Content Creation",
    description:
      "Producing engaging, value-driven content that resonates with target audiences.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Import & Export",
    description:
      "Offering strategic guidance for global trade operations and market entry.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Information Technologies",
    description:
      "Delivering innovative IT solutions to improve efficiency and enable digital transformation.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            We provide tailored, results-driven solutions to help your business
            grow — from strategic planning and market analysis to digital
            marketing, content creation, global trade, and innovative IT
            solutions.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src="/services.png"
          style={{ borderRadius: "10px" }}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
