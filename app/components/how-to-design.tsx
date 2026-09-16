const HowToDesign = () => {
  return (
    <div className="container mx-auto max-w-[1150px] pt-[50px]">
      <div className="flex flex-col md:flex-row">
        <div className="shrink-0">
          <img src="images/how-to-design.png" />
        </div>
        <div className="flex flex-col justify-center mt-[40px] md:mt-0">
          <h3 className="text-[#4D4D4D] font-semibold text-[32px] leading-[44px]">
            How to design your site footer like <br />
            we did
          </h3>
          <p className="text-[#717171] text-[14px] mt-[15px]">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <a href="#" className="green-btn w-[90px] h-[40px] mt-[45px]">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowToDesign;
