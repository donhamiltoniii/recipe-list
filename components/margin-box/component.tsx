type MarginBoxProps = {
  bottom?: number;
  children: React.ReactNode;
  left?: number;
  right?: number;
  top?: number;
};

export const MarginBox = ({
  bottom = 0,
  children,
  left = 0,
  right = 0,
  top = 0,
}: MarginBoxProps) => (
  <div style={{ margin: `${top}rem ${right}rem ${bottom}rem ${left}rem` }}>
    {children}
  </div>
);
