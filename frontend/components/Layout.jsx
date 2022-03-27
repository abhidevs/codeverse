import BottomNavbar from "./BottomNavbar";
import Navbar from "./Navbar";
import PeopleToFolllow from "./PeopleToFolllow";
import PeopleYouFollow from "./PeopleYouFollow";
import Sidebar from "./Sidebar";

const Layout = ({ children, authRoute, profileRoute }) => {
  return (
    <>
      <Navbar />
      {!authRoute ? (
        <main className="w-full min-h-screen h-full bg-skin-backgroud pb-16 text-skin-base">
          <div className="md:container mx-auto lg:pt-20 pt-[60px]">
            <>
              <Sidebar />

              {!profileRoute && (
                <div className="absolute right-24 w-[260px] h-auto ">
                  <PeopleYouFollow />
                  <PeopleToFolllow />
                </div>
              )}
            </>

            {children}
          </div>
        </main>
      ) : (
        <main className="w-full h-full bg-skin-backgroud text-skin-base">
          <div className="w-full h-full pt-16">{children}</div>
        </main>
      )}
      <BottomNavbar />
    </>
  );
};

export default Layout;
