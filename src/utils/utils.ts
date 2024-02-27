class Utils {
  static timedFunction<T>(
    func: (...args: any[]) => Promise<T>,
    name: string
  ): (...args: any[]) => Promise<T> {
    return (...args: any[]) => {
      const startTime = performance.now();
      const result = func(...args);
      const endTime = performance.now();
      console.log(`${name} generation took ${((endTime - startTime) / 1000).toFixed(2)} seconds`);
      return result;
    };
  }
}
