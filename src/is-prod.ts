function isProd(): boolean {
  return process.env.NODE_ENV === "production";
}

export default isProd;
