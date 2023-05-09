import { useCallback, useState } from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

export default function Home() {
  const [content, setContent] = useState("hello world");
  const onContentChange = useCallback((evt: any) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };
    setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  const onBlurHandler = (e: any) => {
    console.log(e.target?.innerText);
  };

  return (
    <div>
      <ContentEditable
        onBlur={onBlurHandler}
        html={content}
        onChange={onContentChange}
        tagName="h1"
      />
    </div>
  );
}
