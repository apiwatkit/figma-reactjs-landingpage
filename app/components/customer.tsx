const Customer = () => {
  return (
    <div className="bg-[#F5F7FA] mt-[40px]">
      <div className="container mx-auto max-w-[1150px] py-[30px]">
        <div className="flex flex-col md:flex-row gap-[80px]">
          <div className="shrink-0">
            <img src="images/customer-1.png" className="max-w-[326px]" />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-[16px] text-[#717171]">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="text-[20px] text-[#4CAF4F]">Tim Smith</p>
            <p className="text-[16px] text-[#89939E]">
              British Dragon Boat Racing Association
            </p>
            <div className="flex justify-between items-center">
              <img src="/images/customer-2.png" alt="" />
              <img src="/images/customer-3.png" alt="" />
              <img src="/images/customer-4.png" alt="" />
              <img src="/images/customer-5.png" alt="" />
              <img src="/images/customer-6.png" alt="" />
              <img src="/images/customer-7.png" alt="" />
              <a href="#" className="text-[20px] text-[#4CAF4F]">
                <div className="flex gap-[8px]">
                  Meet all customers
                  <img src="/images/arrow-right.png" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
