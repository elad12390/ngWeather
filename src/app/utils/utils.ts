export const kelvinToCelsius = (kelvin: number) => (kelvin - 273.15);

export const roundNDigits = (N, num) => {
  const digit10 = Math.pow(10, N);
  return Math.round(num * digit10) / digit10;
};

export const unixSecondsToDate = (seconds: number) => new Date(seconds * 1000);
