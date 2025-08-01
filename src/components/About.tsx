import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-32 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12 px-8">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">About Company</h2>
              <p className="text-xl text-muted-foreground mt-4">
                Founded in February 2019, Katre Consultancy has been dedicated
                to helping businesses — with a primary focus on Turkish-owned
                enterprises based in the UK — navigate competitive markets and
                achieve sustainable growth. We bring together deep industry
                expertise and a results-driven approach to deliver tailored
                solutions in:
              </p>
              <ul
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "30px",
                  flexDirection: "column",
                }}
              >
                <li>
                  Sales Strategy (B2B & B2C) – Designing and optimizing sales
                  processes to drive revenue and strengthen client
                  relationships.
                </li>
                <li>
                  Industry & Market Analysis – Providing data-driven insights to
                  identify opportunities, mitigate risks, and stay ahead of
                  market trends.
                </li>
                <li>
                  Digital Marketing – Crafting impactful online strategies to
                  build brand presence and accelerate growth.
                </li>
                <li>
                  Content Creation – Producing engaging, value-driven content
                  that resonates with target audiences.
                </li>
                <li>
                  Import & Export – Offering strategic guidance for global trade
                  operations and market entry.
                </li>
                <li>
                  Information Technologies – Delivering innovative IT solutions
                  to improve efficiency and enable digital transformation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
