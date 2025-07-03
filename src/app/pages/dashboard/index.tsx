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

export function Dashboard() {
  return (
    <section className="relative min-h-screen h-[1000px] pl-80">
      <Sidebar>
        <SidebarList>
          <SidebarItem handleClick={() => {}} text="dashboard" icon={House} />
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
    </section>
  );
}
