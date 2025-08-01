import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Contact Us",
    description: "Reach out through our website, email, or phone.",
  },
  {
    icon: <MapIcon />,
    title: "Business & Needs",
    description:
      "Share your business background and the services you’re interested in.",
  },
  {
    icon: <PlaneIcon />,
    title: "Proposal & Meeting",
    description:
      "We’ll prepare a tailored proposal and schedule a meeting to discuss the details.",
  },
  {
    icon: <GiftIcon />,
    title: "Official Agreement",
    description:
      "Once everything is agreed upon, we formalize the collaboration with an official contract.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How Do We Work? Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground"></p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
