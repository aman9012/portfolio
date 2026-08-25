import { skillGroups } from "@/data/skills";
import { Stagger, StaggerItem } from "@/components/motion";

export function TechStack() {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group) => (
        <StaggerItem key={group.category}>
          <div className="h-full rounded-xl border border-border p-5">
            <p className="font-mono-label text-accent">{group.label}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 shrink-0 rounded-full bg-accent/60"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
