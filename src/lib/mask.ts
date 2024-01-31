function maskEmail(email: string) {
  return email.replace(/\s/g, "").toLowerCase();
}

export const mask = {
  email(value: string) {
    return maskEmail(value);
  },
};
