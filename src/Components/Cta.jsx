import "../Styles/cta.scss";

function Cta({ txt, num }) {
  return (
    <a className="cta-btn" href={`tel:${num}`} target="_blank">
      {txt}
    </a>
  );
}

export default Cta;
