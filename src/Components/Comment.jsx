// Images
import commentImg from "../Images/comment-poster.svg";

// Styles
import "../Styles/comment.scss";

// Components
import Form from "./Form";
import { useTranslation } from "react-i18next";

function Comment() {
  const { t } = useTranslation();
  const formProps = {
    title: t("comment.commentForm.commentFormTitle"),
    api: "https://sardorfarhodogli.pythonanywhere.com/comments/",
    plc1: t("comment.commentForm.name"),
    plc2: t("comment.commentForm.job"),
    plc3: t("comment.commentForm.comment"),
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
            {t("comment.commentTitle1")} <br />
            {t("comment.commentTitle2")}
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
