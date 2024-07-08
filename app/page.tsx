import ProfileButton from "@/components/buttons/profile-button";
import { MainTitle } from "@/components/title";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-8">
        <MainTitle />
        <h3>Your guide to marketing automation</h3>
        <p>Boost your sales, save time and money ! </p>
      </div>
      <div className="flex flex-row justify-between items-center gap-24">
        <ProfileButton action="Discover" path="#" />
        <ProfileButton
          action="Get in touch"
          path="mailto:sales.otterwave@gmail.com"
        />
      </div>
    </>
  );
}
