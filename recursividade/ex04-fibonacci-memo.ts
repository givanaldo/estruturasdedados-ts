function fibonacci(n: number, memo: Map<number, number> = new Map()): number {
    if (n <= 1) return n;

    if (memo.has(n)) return memo.get(n)!;

    const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo.set(n, result);
    
    return result;
  }
  
  const numero = 40;
  console.log(`Fibonacci(${numero}) = ${fibonacci(numero)}`);
  