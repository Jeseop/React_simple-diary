import { useState } from "react";

const DiaryEditor = () => {
  const [author, setAuthor] = useState("");
  //[현재 상태, setter함수] = 초깃값
  const [content, setContent] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
  // 컴포넌트 이름과 클래스 이름을 똑같이 만들기
};
export default DiaryEditor;
