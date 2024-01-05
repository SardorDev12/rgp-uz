import "../Styles/cta.scss";

function Cta({ txt, num }) {
  return (
    <a className="cta-btn" href={`tel:${num}`}>
      {txt}
    </a>
  );
}

export default Cta;
