export interface HoursStatusProps {
  isActive: boolean
}

const HoursStatus = ({ isActive }: HoursStatusProps) => {
  const getStatusClassNames = () => {
    return isActive
      ? ' border-green-600 text-green-600'
      : ' border-red-600 text-red-600'
  }

  return (
    <p
      className={
        'py-1 px-4 w-fit border-2 rounded-full text-xs' + getStatusClassNames()
      }
    >
      {isActive ? 'Open' : 'Closed'}
    </p>
  )
}

export default HoursStatus
