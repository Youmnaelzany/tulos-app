import Title from "./Title";

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Title className="text-center text-3xl font-bold uppercase md:text-4xl">
        Best Clothing Collection
      </Title>
      <p className="text-lightColor/80 max-w-[480px] text-center text-sm font-medium">
        Step up your style game with the latest in men&apos;s fashion — all at
        unbeatable prices. From trend-setting clothing to must-have shoes and
        accessories, we&apos;ve got everything you need to look sharp and feel
        confident.{" "}
      </p>
    </div>
  );
};
export default HomeBanner;
