export class Storage {
  static setItemAsync(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  static setItemAsyncWithEncryption(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  static getItemAsync(key: string): string | null {
    return localStorage.getItem(key) as string | null;
  }

  static getItemAsyncWithDecryption(key: string): string | null {
    const value = localStorage.getItem(key);
    if (value != null) {
      return value;
    }
    return "";
  }

  static existAsync(key: string): boolean {
    const value = localStorage.getItem(key);
    return !!value;
  }

  static deleteItemAsync(key: string): void {
    return localStorage.removeItem(key);
  }
}
export class SessionStorage {
  static setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  static getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  static removeItem(key: string): void {
    return sessionStorage.removeItem(key);
  }

  static clear(): void {
    return sessionStorage.clear();
  }
}

export function ArrayBufferToBase64(input: any) {
  return Buffer.from(input, "utf8").toString("base64");
}

export function Base64ToArrayBuffer(encoded: any) {
  return Buffer.from(encoded, "base64");
}

export function ArrayBufferToUTF8(encoded: any) {
  return Buffer.from(encoded, "utf8");
}

export const generateRandom = (_stringLength: any) => {
  const random = "";
  return {
    base64: ArrayBufferToBase64(random),
    object: random,
  };
};

export const randomGenerateNumber = function () {
  const randomArray = new Uint32Array(32 / 8); // 32-bit numbers, 32/4 = 8 bytes
  crypto.getRandomValues(randomArray);
  // Convert the array of 32-bit integers into a string
  let randomString = "";
  randomArray.forEach((val) => {
    randomString += val.toString(16).padStart(8, "0");
  });

  return randomString;
};
