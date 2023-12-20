import React from "react";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Uy tín chất lượng cao
          </p>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Cửa Hàng Trái Cây Sạch
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Cửa Hàng Trái Cây Sạch là một doanh nghiệp nổi bật trong lĩnh vực cung
          cấp trái cây tươi sạch và chất lượng cao. Được thành lập từ 2025, cửa
          hàng nhanh chóng ghi danh mình là điểm đến ưa thích của những người
          chú trọng đến sức khỏe và sự tinh khiết trong lựa chọn thực phẩm hàng
          ngày. Với cam kết đem đến những sản phẩm chất lượng nhất, Cửa Hàng
          Trái Cây Sạch thiết lập mối quan hệ chặt chẽ với các nông dân và nhà
          cung cấp đáng tin cậy. Điều này đảm bảo rằng mọi trái cây mà cửa hàng
          cung cấp không chỉ ngon miệng mà còn đảm bảo an toàn vệ sinh thực
          phẩm.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Đặt Hàng Ngay
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-200  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.Selling}
                </p>

                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  {n.price}
                  <span className="text-xs text-red-600"> VND</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
