import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import VideoCard from "../components/VideoCard";
import Banner from "../components/Banner.js";

const bannerImg = "/images/dev-mountain-banner4.png";
const demoVideoImg = "/images/demo-video-img.png";

export const getServerSideProps = async (context) => {
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
    props: { videos },
  };
};

export default function Video({ videos }) {
  useEffect(() => {}, [videos]);

  return (
    <MainLayout>
      <Banner img={bannerImg} title="Video" />
      <div className="container mx-auto">
        <div className="selection-continer flex justify-end mr-8">
          <select className="w-96 mb-8">
            <option>All Speaker</option>
          </select>
        </div>
        <div className="content-video mb-8">
          <div className="content-video-container col-span-7 ">
            <div class="grid grid-cols-3 grid-rows gap-8 ">
              {videos.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
