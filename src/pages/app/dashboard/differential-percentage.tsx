interface DifferentialPercentageProps {
  valueDifferentialPercentage: number
}

export function DifferentialPercentage({
  valueDifferentialPercentage,
}: DifferentialPercentageProps) {
  return valueDifferentialPercentage < 0 ? (
    <span className="font-semibold text-red-500">
      {valueDifferentialPercentage}%
    </span>
  ) : (
    <span className="font-semibold text-moss-green-500">
      +{valueDifferentialPercentage}%
    </span>
  )
}
