import {
  CalendarDays,
  CircleCheckBig,
  House,
  Landmark,
  PiggyBank,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Logo } from "../../../components/logo";
import { Support } from "../../../components/support";
import {
  SidebarDropdown,
  SidebarItem,
  SidebarList,
} from "../../../components/sidebar";

export function Dashboard() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute top-0 left-0 h-screen w-80 bg-stone-50 flex flex-col">
        <div className="p-5 border-b border-b-stone-100">
          <Logo />
        </div>
        <div className="grow-1 p-5 flex flex-col">
          <div className="grow-1">
            <nav>
              <SidebarList>
                <SidebarItem
                  handleClick={() => {}}
                  text="dashboard"
                  icon={House}
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
            </nav>
          </div>
          <Support />
        </div>
      </div>
    </section>
  );
}
