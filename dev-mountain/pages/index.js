import { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import EventCard from "../components/EventCard";
import ArticleCard from "../components/ArticleCard";
import VideoCard from "../components/VideoCard";

const demoEventImg = "/images/demo-event-img.png";
const demoArticleImg = "/images/demo-article-img.png";
const demoVideoImg = "/images/demo-video-img.png";
const demoCarouselImg = "/images/demo-carousel.png";

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

  const articles = [
    {
      id: 1,
      name: "อัปเดตนวัตกรรมด้านการวิเคราะห์ข้อมูลที่นักการตลาดต้องรู้",
      duration: "6 days ago",
      tags: ["Digital Marketing"],
      img: demoArticleImg,
    },
    {
      id: 2,
      name: "บริหารงานด้วยงาน หรือ บริหารงานด้วยความสัมพันธ์ แบบไหนดีกว่ากัน",
      duration: "4 weeks ago",
      tags: ["Business"],
      img: demoArticleImg,
    },
    {
      id: 3,
      name: "ปั้นไอเดียอย่างไรให้เป็นธุรกิจ",
      duration: "2 months ago",
      tags: ["Living"],
      img: demoArticleImg,
    },
    {
      id: 4,
      name: "แว่น VR เสกออฟฟิศในโลกยุค Metaverse",
      duration: "2 months ago",
      tags: ["Digital Marketing", "Technology"],
      img: demoArticleImg,
    },
    {
      id: 5,
      name: "แว่น VR เสกออฟฟิศในโลกยุค Metaverse",
      duration: "2 months ago",
      tags: ["Digital Marketing", "Technology"],
      img: demoArticleImg,
    },
    {
      id: 6,
      name: "ปั้นไอเดียอย่างไรให้เป็นธุรกิจ",
      duration: "2 months ago",
      tags: ["Living"],
      img: demoArticleImg,
    },
    {
      id: 7,
      name: "อัปเดตนวัตกรรมด้านการวิเคราะห์ข้อมูลที่นักการตลาดต้องรู้",
      duration: "6 days ago",
      tags: ["Digital Marketing"],
      img: demoArticleImg,
    },
    {
      id: 8,
      name: "บริหารงานด้วยงาน หรือ บริหารงานด้วยความสัมพันธ์ แบบไหนดีกว่ากัน",
      duration: "4 weeks ago",
      tags: ["Business"],
      img: demoArticleImg,
    },
  ];

  const videos = [
    {
      id: 1,
      name: "CTC2019: How AI Create Marketing Opportunity for Your Brand",
      description:
        "AI ตัวย่อที่ฟังดูยาก แต่วันนี้จะถูกปรับมาอธิบายให้ฟังง่าย โดย คุณพงศ์ ไชยพงศ์ ลาภเลี้ยงตระกูล CEO จาก 3DS Interactive ที่ไม่ใช่แค่เข้าใจง่ายเท่านั้น แต่ยังพูดถึงความสำคัญของ AI ที่จะมีผลต่อการสร้างแบรนด์และการขยายฐานลูกค้า สิ่งเหล่านี้ AI สามารถทำได้อย่างไร ติดตามได้ใน session นี้เท่านั้น",
      duration: "6 days ago",
      img: demoVideoImg,
    },
    {
      id: 2,
      name: "The World of eSports by Garena",
      description:
        "AI ตัวย่อที่ฟังดูยาก แต่วันนี้จะถูกปรับมาอธิบายให้ฟังง่าย โดย คุณพงศ์ ไชยพงศ์ ลาภเลี้ยงตระกูล CEO จาก 3DS Interactive ที่ไม่ใช่แค่เข้าใจง่ายเท่านั้น แต่ยังพูดถึงความสำคัญของ AI ที่จะมีผลต่อการสร้างแบรนด์และการขยายฐานลูกค้า สิ่งเหล่านี้ AI สามารถทำได้อย่างไร ติดตามได้ใน session นี้เท่านั้น",
      duration: "4 weeks ago",
      img: demoVideoImg,
    },
    {
      id: 3,
      name: "Stock Photo Trends for Buyers and Contributors",
      description:
        "AI ตัวย่อที่ฟังดูยาก แต่วันนี้จะถูกปรับมาอธิบายให้ฟังง่าย โดย คุณพงศ์ ไชยพงศ์ ลาภเลี้ยงตระกูล CEO จาก 3DS Interactive ที่ไม่ใช่แค่เข้าใจง่ายเท่านั้น แต่ยังพูดถึงความสำคัญของ AI ที่จะมีผลต่อการสร้างแบรนด์และการขยายฐานลูกค้า สิ่งเหล่านี้ AI สามารถทำได้อย่างไร ติดตามได้ใน session นี้เท่านั้น",
      duration: "2 months ago",
      img: demoVideoImg,
    },
    {
      id: 4,
      name: "Innovation in Music Art & Recreation",
      description:
        "AI ตัวย่อที่ฟังดูยาก แต่วันนี้จะถูกปรับมาอธิบายให้ฟังง่าย โดย คุณพงศ์ ไชยพงศ์ ลาภเลี้ยงตระกูล CEO จาก 3DS Interactive ที่ไม่ใช่แค่เข้าใจง่ายเท่านั้น แต่ยังพูดถึงความสำคัญของ AI ที่จะมีผลต่อการสร้างแบรนด์และการขยายฐานลูกค้า สิ่งเหล่านี้ AI สามารถทำได้อย่างไร ติดตามได้ใน session นี้เท่านั้น",
      duration: "2 months ago",
      img: demoVideoImg,
    },
    {
      id: 5,
      name: "The World of eSports by Garena",
      description:
        "AI ตัวย่อที่ฟังดูยาก แต่วันนี้จะถูกปรับมาอธิบายให้ฟังง่าย โดย คุณพงศ์ ไชยพงศ์ ลาภเลี้ยงตระกูล CEO จาก 3DS Interactive ที่ไม่ใช่แค่เข้าใจง่ายเท่านั้น แต่ยังพูดถึงความสำคัญของ AI ที่จะมีผลต่อการสร้างแบรนด์และการขยายฐานลูกค้า สิ่งเหล่านี้ AI สามารถทำได้อย่างไร ติดตามได้ใน session นี้เท่านั้น",
      duration: "2 months ago",
      img: demoVideoImg,
    },
  ];

  return {
    props: { events, articles, videos },
  };
};

export default function Home({ events, articles, videos }) {
  useEffect(() => {
    console.log("events", events);
    console.log("articles", articles);
    console.log("videos", videos);
  }, [events, articles, videos]);
  return (
    <MainLayout>
      <div className="bg-carousel mb-20">
        <div className="carousel-home flex flex-col justify-center">
          <div className="container mx-auto px-28 text-4xl font-bold mb-10">
            Lorem ipsum dolor sit amet, consetetur
          </div>
          <div className="container mx-auto px-28 text-lg mb-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod
          </div>
          <div className="container mx-auto px-28 text-lg">
            <button className="rounded-full text-primary font-bold bg-secondary w-56 p-3">
              Go Event
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-28">
        <div className="text-4xl text-secondary font-bold mb-4">Event</div>
        <div className="flex items-stretch justify-between mb-64">
          {events.map((v) => (
            <EventCard key={v.id} event={v} />
          ))}
        </div>

        <div className="text-4xl text-secondary font-bold mb-4">Article</div>
        <div class="grid grid-cols-4 grid-rows- gap-4 mb-64">
          {articles.map((v) => (
            <ArticleCard key={v.id} article={v} />
          ))}
        </div>

        <div className="text-4xl text-secondary font-bold mb-4">Video</div>
        <div className="video-container flex justify-between mb-48">
          <div class="rounded-lg shadow-lg bg-white max-w-3xl">
            <img class="rounded-t-lg min-w-full" src={videos[0].img} alt="" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-6">
                {videos[0].name}
              </h5>
              <div>
                <div className="truncate mb-2">{videos[0].description}</div>
                <div>{videos[0].duration}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto scrollbar">
            {videos
              .filter((v) => v.id !== 1)
              .map((v, i) => (
                <VideoCard key={v.id} video={v} />
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
