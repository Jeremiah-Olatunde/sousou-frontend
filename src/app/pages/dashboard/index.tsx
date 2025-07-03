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

export function Dashboard() {
  return (
    <section className="relative min-h-screen">
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
    </section>
  );
}
