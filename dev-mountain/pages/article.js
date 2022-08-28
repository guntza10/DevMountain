import { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ArticleCard from "../components/ArticleCard";
import Banner from "../components/Banner.js";

const bannerImg = "/images/dev-mountain-banner3.png";
const demoArticleImg = "/images/demo-article-img.png";
const demoCarouselImg = "/images/demo-carousel.png";

export const getServerSideProps = async (context) => {
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

  return {
    props: { articles },
  };
};

export default function Article({ articles }) {
  useEffect(() => {}, [articles]);

  return (
    <MainLayout>
      <Banner img={bannerImg} title="Article" />
      <div className="container mx-auto mb-8">
        <div className="content-article grid grid-cols-8 gap-4">
          <div className="content-article-container col-span-7 ">
            <div class="grid grid-cols-3 grid-rows gap-8">
              {articles.map((v) => (
                <ArticleCard key={v.id} article={v} />
              ))}
            </div>
          </div>
          <div className="content-article-menu">
            <div className="title-menu-article">หมวดหมู่</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
