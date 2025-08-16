import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
    name: "Project Management",
    body: " Strong planning, resource management, stakeholder management Contract management and reporting skills.",
    
  },
  
  {
    name: "Leadership & Teamwork",
    body: "   Excellent leadership, communication and collaboration skills.",
    
  }, {
    name: "Renewable Energy Systems",
    body: " Expertise in solar PV systems (T1, T2, and T3 certifications), grid-tie systems and renewable energy project management.",
    
  },
  {
    name: " Technical Proficiency",
    body: " Skilled in design, construction and supervision of Grid extension, Rural electrification, fiber optics, SDWAN and network troubleshooting",  
  },
  
  {
    name: "Leadership & Teamwork",
    body: "   Excellent leadership, communication and collaboration skills.",
    
  },
  {
    name: " Compliance & Safety:",
    body: " In-depth knowledge of industry standards, health, safety and environmental regulations. ",
    
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
