class Validators {
  static required(value = '') {
    return value.length > 1;
  }

  static minLength(len) {
    return (value) => {
      return value.length >= len;
    };
  }
}

export {Validators};
