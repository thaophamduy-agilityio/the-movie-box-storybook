// Components
import { Navigation, Social } from "@/components";

// Mocks
import { NAVIGATION_SETTING, SOCIAL_SETTING } from "@/mocks";

const Footer = () => {
  return (
    <footer className="relative footer">
      <div className="flex justify-between items-end pb-2">
        <div className="text-2xl text-card-title uppercase">themovieBOX</div>
        <Navigation items={NAVIGATION_SETTING} />
      </div>
      <div className="flex justify-between items-center p-0.5 border border-transparent border-t-card-genre opacity-50">
        <div className="copy-right text-xs text-gray-dark">
          Designed by Milan Houter. All rights reserved.
        </div>
        <Social items={SOCIAL_SETTING} />
      </div>
    </footer>
  );
};

export default Footer;
