export function getNColors(n: number) {
  const goldenAngle = 180 * (3 - Math.sqrt(5));
  let colors = [];

  for (let i = 0; i < n; i++) {
    colors.push(`hsl(${i * goldenAngle}, 100%, 70%)`);
  }

  return colors;
}