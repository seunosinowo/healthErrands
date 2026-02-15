interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: Props) => (
  <div className="text-center max-w-2xl mx-auto mb-16">
    {subtitle && (
      <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-base md:text-lg leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
