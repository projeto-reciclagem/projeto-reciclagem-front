interface Props {
    children?: React.ReactNode;
}

export default function LastSection({ children }: Props) {
  return (
    <section className="sticky w-full top-[0vh] z-[1]">
        {children}
    </section>
  )
}