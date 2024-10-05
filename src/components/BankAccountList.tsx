import { BANK_ACCOUNT_ARRAY } from "../const";

export function BankAccountList() {
  return (
    <ul>
      {BANK_ACCOUNT_ARRAY.map((element) => {
        return <li key={element}>{element}</li>;
      })}
    </ul>
  );
}
