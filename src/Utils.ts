class Utils {
  public static newId = (): string => {
    return Math.floor(Math.random() * 10000 + 5).toString(16);
  };
}

export default Utils;
