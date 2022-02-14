export const kelvinToCelsius = (kelvin: number) => (kelvin - 273.15);

export const unixSecondsToDate = (seconds: number) => new Date(seconds * 1000);
