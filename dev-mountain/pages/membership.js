import Banner from "../components/Banner";
import MainLayout from "../components/layouts/MainLayout";

const demoMemberImg = "/images/dev-mountain-banner5.png";

const avatar = "/images/avatar.png";
const crown = "/icons/crown.png";
const edit = "/icons/edit.png";

const demoThumbnail1 = "/images/demo-thumbnail-member1.png";
const demoThumbnail2 = "/images/demo-thumbnail-member2.png";
const demoThumbnail3 = "/images/demo-thumbnail-member3.png";
const demoThumbnail4 = "/images/demo-thumbnail-member4.png";

export const getServerSideProps = async (context) => {
  const history = [
    {
      id: 1,
      name: "บัตรเข้างาน DEV Mountain @เขาใหญ่",
      date: "14 March 2022",
      price: "2,000.-",
      img: demoThumbnail1,
    },
    {
      id: 2,
      name: "แก้วน้ำที่ระลึกรุ่น DEV Mountain V.1",
      date: "9 March 2022",
      price: "100.-",
      img: demoThumbnail2,
    },
    {
      id: 3,
      name: "คอร์สเรียนสอนเทรด BitCoin เบื้องต้น",
      date: "7 March 2022",
      price: "Free",
      img: demoThumbnail3,
    },
    {
      id: 4,
      name: "คอร์สเรียนสอนเขียน Swift - Apple Developer",
      date: "4 March 2022",
      price: "Free",
      img: demoThumbnail4,
    },
  ];

  return {
    props: { history },
  };
};

export default function Membership({ history }) {
  console.log("history", history);

  return (
    <MainLayout>
      <Banner img={demoMemberImg} title="" />

      <div className="container mx-auto">
        <div className="flex gap-8">
          <div className="flex h-fit   w-1/3 gap-4 items-center justify-center flex-col border  rounded-xl border-[#AFC3CB] ">
            <img className="rounded-full pt-12  " src={avatar} alt="user" />
            <p className="text-2xl font-bold"> เลขสมาชิก : 02001089</p>
            <p className="text-xl flex gap-1 items-center">
              ประเภทสมาชิก : <img src={crown} alt="icon-crown" />{" "}
              <span className="text-[#F86A4D]">Premium</span>
            </p>

            <div className="w-full h-[60px] flex items-center justify-center  border-t-2 border-[#AFC3CB]   text-secondary">
              Exp. 22/08/2022
            </div>
          </div>
          <div className="w-2/3 flex  flex-col gap-8 ">
            <div className="p-12 relative flex flex-col h-auto gap-4 items-start justify-center  border  rounded-xl border-[#AFC3CB]">
              {" "}
              <img className="absolute top-4 right-4" src={edit} alt="edit" />
              <p className="text-4xl">TUm Anansit</p>
              <div className="w-full flex gap-2">
                <p className="font-bold w-1/6">บริษัท :</p>
                <p className="font-bold w-5/6 text-[#5C7C89]">
                  DomeCloud Co., Ltd.
                </p>
              </div>
              <div className="w-full flex gap-2">
                <p className="font-bold w-1/6">ตำแหน่งงาน :</p>
                <p className="font-bold w-5/6 text-[#5C7C89]">ux/ui Designer</p>
              </div>
            </div>
            <div className="p-12 flex h-auto gap-4 items-start justify-center flex-col border  rounded-xl border-[#AFC3CB]">
              {" "}
              <p className="text-xl font-bold">ประวัติการใช้สิทธิ</p>
              {history?.map((item) => (
                <div
                  key={item.id}
                  className="w-full pt-2 border-collapse border-t-2 border-[#D1D1D1] border-spacing-2 flex gap-2 items-center justify-between"
                >
                  <div className="flex  gap-4">
                    <img src={item?.img} alt="thumbnail" />
                    <div className="flex flex-col justify-center">
                      <p className="font-bold">{item?.name}</p>
                      <p className="text-[#5C7C89]">{item?.date}</p>
                    </div>
                  </div>
                  <div className="text-[#5C7C89]">{item?.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
