import Image from 'next/image'

export function MainTitle() {
  return (
    <div className="flex flex-row items-center mt-3">
      <Image width="240" height="240" src="/logo_otterwave/png/logo_otterwave_blanc_titre_slogan.png" alt="logo otterwave"/>
    </div>
  );
}
