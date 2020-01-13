class Validators {
  static required(value = '') {
    return value && value.trim();
  }

  static minLength(len) {
    return (value) => {
      return value.length >= len;
    };
  }
}

export {Validators};
