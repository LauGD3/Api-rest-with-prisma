import { hash, compare, genSalt}  from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  const passwordHash = await hash(password, salt);
  
  return passwordHash;
}

export const comparePassword = async(password: string, hashPassword: string) => {
  return await compare(password, hashPassword);
}