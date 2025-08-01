interface CircleProps {
  size?: number;
  fill?: string;
  className?: string;
}

export default function Circle({
  size = 8,
  fill = '#cdcecf',
  className = '',
}: CircleProps) {
  const radius = size / 2 - 1; // Leave 1px padding

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <circle cx={size / 2} cy={size / 2} r={radius} fill={fill} />
    </svg>
  );
}
