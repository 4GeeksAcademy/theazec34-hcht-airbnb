type HeroTitleProps = {
  title: string;
};

export const HeroTitle = ({ title }: HeroTitleProps) => (
  <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
    {title}
  </h1>
);
