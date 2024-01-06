import "../Styles/cta.scss";

function Cta({ txt }) {
  return (
    <a className="cta-btn" href={`tel:+998 90 601 04 01`} target="_blank">
      {txt}
    </a>
  );
}

export default Cta;
