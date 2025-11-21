import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import wedding from "@/assets/images/homepage/event-types/wedding.png";
import corporate from "@/assets/images/homepage/event-types/corporate.png";
import functions from "@/assets/images/homepage/event-types/functions.png";
import events from "@/assets/images/homepage/event-types/events-at-the-warren.png";
import sports from "@/assets/images/homepage/event-types/sports.png";

const eventTypes = [
  {
    name: "wedding",
    image: wedding,
  },
  {
    name: "functions",
    image: functions,
  },
  {
    name: "corporate",
    image: corporate,
  },
  {
    name: "events @ the warren",
    image: events,
  },
  {
    name: "sports",
    image: sports,
  },
];

function EventTypes() {
  return (
    <section className="w-full bg-[#EFEFEF] py-20">
      <div className="max-w-[90rem] w-full mx-auto px-6 md:px-8 text-center flex flex-col items-center justify-center gap-10">
        <div>
          <h2 className="font-extralight text-5xl leading-12 mb-8 text-[#001330]">
            Choose your next <br /> Luxury Venue in London
          </h2>
          <p className="mb-12 text-[#454545] font-normal text-lg leading-8 tracking-[0.02em]">
            Our collection of elegant rooms and sweeping outdoor areas provide
            the perfect canvas for any gathering.
          </p>
          <p className="text-[#454545] font-normal text-lg leading-8 tracking-[0.02em]">
            What are you looking for?
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-5">
          {eventTypes.slice(0, 3).map((types) => (
            <Card
              key={types.name}
              className="bg-transparent shadow-none border-none group cursor-pointer rounded-none"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={types.image}
                  alt="event types"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardContent className="text-center p-4">
                <h3
                  className="
            uppercase font-light text-2xl text-[#001330] tracking-wide relative inline-block
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
            after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-[#C9A959] 
            after:transition-all after:duration-300 
            group-hover:after:w-3/4
          "
                >
                  {types.name}
                </h3>
              </CardContent>
            </Card>
          ))}

          {/* Last 2 cards centered */}
          <div className="col-span-3 grid grid-cols-2 justify-items-center">
            {eventTypes.slice(3).map((types) => (
              <Card
                key={types.name}
                className="bg-transparent shadow-none border-none group cursor-pointer rounded-none"
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={types.image}
                    alt="event types"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardContent className="text-center p-4">
                  <h3
                    className="
              uppercase font-light text-2xl text-[#001330] tracking-wide relative inline-block
              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
              after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-[#C9A959] 
              after:transition-all after:duration-300 
              group-hover:after:w-3/4
            "
                  >
                    {types.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventTypes;
