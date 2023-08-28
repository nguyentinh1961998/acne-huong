import EmployeeCard, { EmployeeType } from './EmployeeCard'

interface SpaTeamProps {
  items?: EmployeeType[]
}

export default function SpaTeam({ items = [] }: SpaTeamProps) {
  return (
    <div className="p-8 flex gap-8 flex-col justify-center items-center text-center">
      <span className="text-[48px] max-w-[460px] font-light font-header text-neutral-600">
        Meet The Team of Rela Spa
      </span>
      <span className="flex items-center justify-center gap-4">
        {items.map((item) => (
          <EmployeeCard key={item.id} {...item} />
        ))}
      </span>
    </div>
  )
}
