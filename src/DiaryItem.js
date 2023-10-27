import { useRef, useState  } from "react";

const DiaryItem = ({ onEdit, onRemove, author, content, created_date, emotion, id }) => {
    const [isEdit, setIsEdit] = useState(false);
    const togleIsEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef();

    const handleRemove = () => {
        if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
        }
    };

    // 수정하기 클릭했을 때 기존 내용 뜨기
    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    }

    //id가 일치하면 값 변경, 일치하지 않으면 그대로
    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }

        if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
            onEdit(id, localContent);
            togleIsEdit();
        }
    }
    

    return (
        <div className="DiaryItem">
        <div className="info">
            <span>
                작성자 : {author} | 감정점수 : {emotion}
            </span>
            <br></br>
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">
            {isEdit ? (
                <>
                    
                    <textarea
                        ref={localContentInput}
                        value={localContent}
                        onChange={(e) => setLocalContent(e.target.value)} />
                </>
            ) : (
                <>{content}</>
            )}
        </div>

        {isEdit ? (
            <>
                <button onClick={handleQuitEdit}>수정 취소</button>
                <button onClick={handleEdit}>수정 완료</button>
            </>
        ) : (
            <>
                <button onClick={handleRemove}>삭제하기</button>
                <button onClick={togleIsEdit}>수정하기</button>
            </>
        )}
    </div>
    );
};

export default DiaryItem;