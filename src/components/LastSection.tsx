interface Props {
  children?: React.ReactNode
}

export default function LastSection({ children }: Props) {
  return <section className="sticky top-[0vh] z-[1] w-full">{children}</section>
}
