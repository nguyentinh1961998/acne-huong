interface EmployeeCardProps {
  role?: string
  name?: string
  className?: string
  avatar?: string
}

export type EmployeeType = EmployeeCardProps & {
  id: string
}

export default function EmployeeCard({
  name,
  role,
  className,
  avatar,
}: EmployeeCardProps) {
  return (
    <div
      className={`cursor-pointer flex flex-col min-w-[200px] shadow-sm ${className}`}
    >
      <img
        height={300}
        width="100%"
        className="object-cover"
        src={avatar}
        alt="avatar"
      />
      <span className="px-4 py-8 flex flex-col bg-white text-center">
        <span className="text-xl font-header">{name}</span>
        <span className="text-sm text-active">{role}</span>
      </span>
    </div>
  )
}
