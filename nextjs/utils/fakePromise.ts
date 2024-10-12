interface Props<T> {
  data: T;
  delay?: number;
}

export const fakePromise = <T extends object>({
  data, delay = 1000
}: Props<T>): Promise<T> => new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
