import { Download, SectionWrapper, Features } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFT's exchange & earn crypto.Join 25+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart user interface marketplace"
        description="Experience a butteru UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Pronef is built using expo whitch runs natively on all user's devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens.The fist screen lists all NFTs while the second one shows the details of aspecific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by <span className="bold">Fahrul Khadziq</span>, reference and
          Big Thanks to
          <span className="bold">JavaScript Mastery</span>
        </p>
      </div>
    </>
  );
};

export default App;
