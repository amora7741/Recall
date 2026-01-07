import Image from "next/image";

const HomeImage = () => {
  return (
    <>
      <Image
        src="/aichat.webp"
        alt="AI Chat Demonstration Image"
        fill
        className="object-cover object-top dark:hidden"
      />
      <Image
        src="/aichat-dark.webp"
        alt="AI Chat Demonstration Image"
        fill
        className="hidden object-cover object-top dark:block"
      />
    </>
  );
};

export default HomeImage;
