import MainLayout from "../components/layouts/MainLayout";
import EventCard from "../components/EventCard";
import Banner from "../components/Banner";

const demoEventImg = "/images/demo-event-img.png";
const demoEventBannerImg = "/images/demo-event-banner.png";

export const getServerSideProps = async (context) => {
  const events = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "26 September 2022",
      duration: "10:30 - 17:00",
      location:
        "AIS Design Centre AIS D.C. (BTS สถานีพร้อมพงษ์) ห้างสรรพสินค้า The Emporium ชั้น 5",
      img: demoEventImg,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "14 March 2022",
      duration: "10:00 - 17:00",
      location:
        "AIS Design Centre AIS D.C. (BTS สถานีพร้อมพงษ์) ห้างสรรพสินค้า The Emporium ชั้น 5",
      img: demoEventImg,
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "19 January 2022",
      duration: "09:00 - 18:00",
      location: "ไบเทคบางนา, Bhiraj Hall 1-2",
      img: demoEventImg,
    },
  ];

  const allEvents = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "26 September 2022",
      duration: "10:30 - 17:00",
      location:
        "AIS Design Centre AIS D.C. (BTS สถานีพร้อมพงษ์) ห้างสรรพสินค้า The Emporium ชั้น 5",
      img: demoEventImg,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "14 March 2022",
      duration: "10:00 - 17:00",
      location:
        "AIS Design Centre AIS D.C. (BTS สถานีพร้อมพงษ์) ห้างสรรพสินค้า The Emporium ชั้น 5",
      img: demoEventImg,
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "19 January 2022",
      duration: "09:00 - 18:00",
      location: "ไบเทคบางนา, Bhiraj Hall 1-2",
      img: demoEventImg,
    },
    {
      id: 4,
      name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "19 January 2022",
      duration: "09:00 - 18:00",
      location: "ไบเทคบางนา, Bhiraj Hall 1-2",
      img: demoEventImg,
    },
    {
      id: 5,
      name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "19 January 2022",
      duration: "09:00 - 18:00",
      location: "ไบเทคบางนา, Bhiraj Hall 1-2",
      img: demoEventImg,
    },
  ];

  return {
    props: { events, allEvents },
  };
};

export default function Event({ events, allEvents }) {
  console.log("events", events);
  console.log("allEvents", allEvents);
  return (
    <MainLayout>
      {/* <div className="bg-event-banner mb-20">
        <div className="flex flex-col items-center justify-center">
          <div className="text-6xl font-bold">Event</div>
        </div>
      </div> */}

      <Banner img={demoEventBannerImg} title="Event" />
      <div className="container mx-auto px-28">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl text-secondary font-bold ">Latest Event</div>
          <div className="text-xl text-secondary">see all</div>
        </div>

        <div className="flex items-stretch justify-between mb-52">
          {events?.map((v) => (
            <EventCard key={v.id} event={v} />
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl text-secondary font-bold ">All Event</div>
          <div className="text-xl text-secondary">see all</div>
        </div>

        <div class="grid grid-cols-3 grid-rows-2 justify-items-stretch gap-4">
          {allEvents?.map((v) => (
            <EventCard key={v.id} event={v} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
