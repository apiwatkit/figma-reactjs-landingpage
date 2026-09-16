const Helping = () => {
  return (
    <div className="bg-[#F5F7FA] mt-[40px]">
      <div className="container mx-auto max-w-[1150px] py-[65px]">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:pr-[70px]">
            <h3 className="text-[36px] text-[#4D4D4D] font-semibold leading-[44px]">
              Helping a local <br />
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h3>
            <p className="text-[16px] text-[#18191F]">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="mt-[40px] md:mt-0 grid grid-cols-2  gap-x-[30px] gap-y-[40px]">
            <div className="flex items-center gap-5">
              <img
                src="images/helping-1.png"
                alt="Members"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="text-[28px] font-bold text-[#4D4D4D] leading-tight">
                  2,245,341
                </h4>
                <p className="text-[16px] text-[#717171]">Members</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img
                src="/images/helping-2.png"
                alt="Clubs"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="text-[28px] font-bold text-[#4D4D4D] leading-tight">
                  46,328
                </h4>
                <p className="text-[16px] text-[#717171]">Clubs</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img
                src="/images/helping-3.png"
                alt="Event Bookings"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="text-[28px] font-bold text-[#4D4D4D] leading-tight">
                  828,867
                </h4>
                <p className="text-[16px] text-[#717171]]">Event Bookings</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/helping-4.png"
                alt="Payments"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="text-[28px] font-bold text-[#4D4D4D] leading-tight">
                  1,926,436
                </h4>
                <p className="text-[16px] text-[#717171]">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helping;
