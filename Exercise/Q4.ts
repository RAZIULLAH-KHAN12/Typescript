/*4) Create one main function with three parameter(sting, string, calculation function), and this main function should return promise
        calculation function -> match the both string with case-insensitive.
        Prmoise should use this calculation function and return the answer of calculation function .  */
type fn = (s1: string, s2: string) => boolean;

function main(a: string, b: string, calculation: fn): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      const result = calculation(a.toLowerCase(), b.toLowerCase());
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
const string1 = "HELLO";
const string2 = "hello";

function checkMatch(s1: string, s2: string): boolean {
  return s1 === s2;
}

main(string1, string2, checkMatch)
  .then((result) => {
    console.log(`Strings match: ${result}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
