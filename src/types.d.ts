export type Step = 'DEPOSIT' | 'WITHDRAW' | 'BALANCE' | 'ATM' | 'INITIAL' | 'PINPAD';

export type UserInfo = {
  name: string;
  balance: number;
  card: string;
}