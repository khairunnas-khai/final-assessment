function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const prevFib = fibonacci(n - 1);
    const nextFib = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
    return [...prevFib, nextFib];
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
