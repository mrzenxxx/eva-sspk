type Props = {
  text: string
}

export function TypographyH1({ text }: Props) {
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{text}</h1>
}

export function TypographyH2({ text }: Props) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  )
}

export function TypographyH3({ text }: Props) {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{text} </h3>
}

export function TypographyH4({ text }: Props) {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{text}</h4>
}

export function TypographyP({ text }: Props) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>
}

export function TypographyBlockquote({ text }: Props) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">{text}</blockquote>
}

export function TypographyInlineCode({ text }: Props) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {text}
    </code>
  )
}

export function TypographyLead({ text }: Props) {
  return <p className="text-xl text-muted-foreground">{text}</p>
}

export function TypographyLarge({ text }: Props) {
  return <div className="text-lg font-semibold">{text}</div>
}

export function TypographySmall({ text }: Props) {
  return <small className="text-sm font-medium leading-none">{text}</small>
}

export function TypographyMuted({ text }: Props) {
  return <p className="text-sm text-muted-foreground">{text}</p>
}
