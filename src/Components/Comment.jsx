// Images
import commentImg from "../Images/comment-poster.svg";

// Styles
import "../Styles/comment.scss";

// Components
import Form from "./Form";

function Comment() {
  const formProps = {
    title: "Xizmatimizni baholang!",
    api: "https://sardorfarhodogli.pythonanywhere.com/comments/",
    plc1: "Ism",
    plc2: "Kasb",
    plc3: "Izoh",
    name1: "name",
    name2: "job",
    name3: "comment",
  };

  return (
    <div>
      <div className="commentImg">
        <img src={commentImg} alt="comment img" />
        <div className="commemt-info">
          <div className="comment-title">
            Sizning fikringiz <br />
            biz uchun muhim!
          </div>
          <div className="comment-form">
            <Form {...formProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
