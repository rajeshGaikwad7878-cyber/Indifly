import Image from "next/image";

export default function OurMission() {
  return (
    <div className="mission-img-wrapper">
      <Image 
        src="/images/Our Mission.png"
        alt="Our Mission"
        width={0}
        height={0}
        className="mission-img"
        priority
        sizes="100vw"
      />
    </div>
  );
}
