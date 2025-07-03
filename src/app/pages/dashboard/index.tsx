import {
  CalendarDays,
  CircleCheckBig,
  House,
  Landmark,
  PiggyBank,
  Sparkles,
  UsersRound,
} from "lucide-react";
import {
  Sidebar,
  SidebarDropdown,
  SidebarItem,
  SidebarList,
} from "../../../components/sidebar";
import {
  ButtonNotification,
  ButtonProfile,
  DisplayDate,
  Greetings,
  Topbar,
} from "../../../components/topbar";
import { useState } from "react";
import { DashboardHome } from "./home";

type DashboardPage = "Home";

const Page: Record<DashboardPage, React.ReactNode> = {
  Home: <DashboardHome />,
};

export function Dashboard() {
  const [page, setPage] = useState<DashboardPage>("Home");

  return (
    <section className="relative min-h-screen pl-80">
      <Sidebar>
        <SidebarList>
          <SidebarItem
            active={page === "Home"}
            handleClick={() => setPage("Home")}
            icon={House}
            text="home"
          />
          <SidebarDropdown text="loan services" icon={Landmark}>
            <SidebarList>
              <SidebarItem
                handleClick={() => {}}
                text="apply for loan"
                icon={PiggyBank}
              />
              <SidebarItem
                handleClick={() => {}}
                text="Pre-Qualification"
                icon={CircleCheckBig}
              />
              <SidebarItem
                handleClick={() => {}}
                text="loan repayment plan"
                icon={CalendarDays}
              />
            </SidebarList>
          </SidebarDropdown>
          <SidebarDropdown text="roommate matching" icon={UsersRound}>
            <SidebarList>
              <SidebarItem
                handleClick={() => {}}
                text="coming soon"
                icon={Sparkles}
              />
            </SidebarList>
          </SidebarDropdown>
        </SidebarList>
      </Sidebar>

      <div className="flex flex-col min-h-screen">
        <Topbar>
          <div className="flex flex-col gap-1">
            <Greetings name="david lownwest" />
            <DisplayDate />
          </div>
          <div className="grow" />
          <div className="flex items-center gap-6 h-full">
            <ButtonNotification />
            <ButtonProfile handleClick={() => {}} />
          </div>
        </Topbar>

        <div className="px-5 py-8 grow">{Page[page]}</div>
      </div>
    </section>
  );
}
