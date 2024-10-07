import { ADDRESS_ARRAY, MAIL_ADDRESS } from "../const";

function AddressArea() {
  return (
    <div>
      <p>Vollständig ausgefüllt abschicken an:</p>
      <ul>
        {ADDRESS_ARRAY.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p>
        oder E-Mail an: <br />
        <a href={`mailto:${MAIL_ADDRESS}`}>{MAIL_ADDRESS}</a>
      </p>
    </div>
  );
}
export default AddressArea;
