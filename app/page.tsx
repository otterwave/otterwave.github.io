import ProfileButton from "@/components/buttons/profile-button";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-8">
        <h1 className="text-7xl">Otterwave</h1>
        <h3>Your guide to marketing automation</h3>
      </div>
      <div className="flex flex-row justify-between items-center gap-24">
        <ProfileButton action="discover" path="#" />
        <ProfileButton action="get in touch" path="#" />
      </div>
    </>
  );
}
