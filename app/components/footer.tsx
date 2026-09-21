export default function Footer() {
  return (
    <div className="bg-[#263238] py-[65px]">
      <div className="container mx-auto max-w-[1150px]">
        <div className="flex justify-between text-white">
          <div>
            <a href="#">
              <img src="/images/logo-footer.png" />
            </a>
            <p className="text-[14px] text-white py-[40px]">
              Copyright © 2020 Nexcent ltd. <br />
              All rights reserved
            </p>
            <div className="flex justify-between">
              <a href="#">
                <img src="/images/footer-1.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/footer-2.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/footer-3.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/footer-4.png" alt="" />
              </a>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div>
              <p className="text-[20px] mb-[25px]">Company</p>
              <div>
                <a href="#" className="text-[14px]">
                  About us
                </a>
              </div>
              <div>
                <a href="#" className="text-[14px]">
                  Blog
                </a>
              </div>
              <div>
                <a href="#" className="text-[14px]">
                  Contact us
                </a>
              </div>
              <div>
                <a href="#" className="text-[14px]">
                  Pricing
                </a>
              </div>
              <div>
                <a href="#" className="text-[14px]">
                  Testimonials
                </a>
              </div>
            </div>
            <div>
              <p className="text-[20px] mb-[25px]">Support</p>
              <div>
                <a href="#" className="text-[14px]">
                  Help center
                </a>
              </div>
              <div>
                <a href="#" className="text-[14px]">
                  Terms of service
                </a>
              </div>
              <div>
                <a href="#" className="text-[14px]">
                  Legal
                </a>
              </div>
              <div>
                <a href="#" className="text-[14px]">
                  Privacy policy
                </a>
              </div>
              <div>
                <a href="#" className="text-[14px]">
                  Status
                </a>
              </div>
            </div>
            <div>
              <p className="text-[20px] mb-[25px]">Stay up to date</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="bg-[#515B60] text-[14px] w-[255px] h-[40px] p-[10px] pr-[30px] rounded-[8px] text-[#D9DBE1]"
                />
                <a href="#">
                  <img
                    src="/images/send.png"
                    alt=""
                    className="absolute right-0 top-1/2 -translate-y-1/2 mr-[10px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
