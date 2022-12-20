function Category() {
  const items = [
    {
      catelog: "Thời Trang Nam",
      imgPath: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
    },
    {
      catelog: "Điện Thoại & Phụ Kiện",
      imgPath: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      catelog: "Thiết Bị Điện tử",
      imgPath: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
    },
    {
      catelog: "Máy tính & LapTop",
      imgPath: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
    },
    {
      catelog: "Máy Ảnh & Máy Quay",
      imgPath: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
    },
    {
      catelog: "Đồng hồ",
      imgPath: "https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn",
    },
    {
      catelog: "Giày Dép nam",
      imgPath: "https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
    },
    {
      catelog: "Thời Trang nữ",
      imgPath: "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
    },
    {
      catelog: "Thiết Bị Gia Dụng",
      imgPath: "https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn",
    },
    {
      catelog: "Thể Thao",
      imgPath: "https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn",
    },
    {
      catelog: "Xe Máy & Xe Đạp",
      imgPath: "https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn",
    },
    {
      catelog: "Mẹ & Bé",
      imgPath: "https://cf.shopee.vn/file/https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn",
    },
    {
      catelog: "Nhà Cửa & Đời Sống",
      imgPath: "https://cf.shopee.vn/file/https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn",
    },
    {
      catelog: "Giày Dép Nữ",
      imgPath: "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn",
    },
    {
      catelog: "Túi Ví Nữ",
      imgPath: "https://cf.shopee.vn/file/https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
    },
    {
      catelog: "Nhà Sách Online",
      imgPath: "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
    },
  ];
  return (
    <>
      <div className="bg-gray-09 ">
        <div className="mr-auto ml-auto w-[1200px]">
          <div className="pt-[1.25rem]">
            <div className=" bg-white min-h-[400px]">
              <div className=" h-[3.75rem] border-b-[1px] uppercase text-[1rem] font-[500] text-gray-54 px-[1.25rem] flex items-center ">
                {" "}
                DANH MỤC
              </div>
              <div className="w-full h-full relative ">
                <div className="flex flex-wrap ">
                  {items.map((item) => (
                    <div className=" flex hover:shadow-lg cursor-pointer ">
                      <div className="border-r-[1px] border-b-[1px] w-[150px] h-[auto] flex items-center justify-center flex-col ">
                        <div className="shrink-[1] w-[70%] h-[70%] mt-[10%] ">
                          <div className="relative ">
                            <div className="bg-contain ">
                              <img src={item.imgPath} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="text-[0.875rem] leading-5 h-[2.5rem] mb-[0.625rem] break-words flex justify-center">
                          {item.catelog}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
