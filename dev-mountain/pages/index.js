import { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import EventCard from "../components/EventCard";

const demoEventImg = "/images/demo-event-img.png";
const demoArticleImg = "/images/demo-article-img.png";
const demoVideoImg = "/images/demo-video-img.png";

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
      tags: ["Digital Marketing"],
      img: demoVideoImg,
    },
    {
      id: 2,
      name: "The World of eSports by Garena",
      description:
        "AI ตัวย่อที่ฟังดูยาก แต่วันนี้จะถูกปรับมาอธิบายให้ฟังง่าย โดย คุณพงศ์ ไชยพงศ์ ลาภเลี้ยงตระกูล CEO จาก 3DS Interactive ที่ไม่ใช่แค่เข้าใจง่ายเท่านั้น แต่ยังพูดถึงความสำคัญของ AI ที่จะมีผลต่อการสร้างแบรนด์และการขยายฐานลูกค้า สิ่งเหล่านี้ AI สามารถทำได้อย่างไร ติดตามได้ใน session นี้เท่านั้น",
      duration: "4 weeks ago",
      tags: ["Business"],
      img: demoVideoImg,
    },
    {
      id: 3,
      name: "Stock Photo Trends for Buyers and Contributors",
      duration: "2 months ago",
      tags: ["Living"],
      img: demoVideoImg,
    },
    {
      id: 4,
      name: "Innovation in Music Art & Recreation",
      description:
        "AI ตัวย่อที่ฟังดูยาก แต่วันนี้จะถูกปรับมาอธิบายให้ฟังง่าย โดย คุณพงศ์ ไชยพงศ์ ลาภเลี้ยงตระกูล CEO จาก 3DS Interactive ที่ไม่ใช่แค่เข้าใจง่ายเท่านั้น แต่ยังพูดถึงความสำคัญของ AI ที่จะมีผลต่อการสร้างแบรนด์และการขยายฐานลูกค้า สิ่งเหล่านี้ AI สามารถทำได้อย่างไร ติดตามได้ใน session นี้เท่านั้น",
      duration: "2 months ago",
      tags: ["Digital Marketing", "Technology"],
      img: demoVideoImg,
    },
    {
      id: 5,
      name: "The World of eSports by Garena",
      description:
        "AI ตัวย่อที่ฟังดูยาก แต่วันนี้จะถูกปรับมาอธิบายให้ฟังง่าย โดย คุณพงศ์ ไชยพงศ์ ลาภเลี้ยงตระกูล CEO จาก 3DS Interactive ที่ไม่ใช่แค่เข้าใจง่ายเท่านั้น แต่ยังพูดถึงความสำคัญของ AI ที่จะมีผลต่อการสร้างแบรนด์และการขยายฐานลูกค้า สิ่งเหล่านี้ AI สามารถทำได้อย่างไร ติดตามได้ใน session นี้เท่านั้น",
      duration: "2 months ago",
      tags: ["Digital Marketing", "Technology"],
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
      <div className="flex items-stretch justify-center gap-5">
        {events.map((v) => (
          <EventCard key={v.id} event={v} />
        ))}
      </div>
    </MainLayout>
  );
}
