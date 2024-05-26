import React, { useEffect, useRef, useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from "draft-js";
import Toolbar from "./Toolbar";

const DraftEditor = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      convertFromRaw({
        blocks: [
          {
            text: `Hello,`
          },
          {
            text: "Cinquedev Team"
          }
        ],
        entityMap: {}
      })
    )
  );
  const editor = useRef(null);

  useEffect(() => {
    focusEditor();
  }, []);

  const focusEditor = () => {
    editor.current.focus();
  };

  const handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return true;
    }
    return false;
  };

  const styleMap = {
    CODE: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2
    },
    HIGHLIGHT: {
      backgroundColor: "#F7A5F7"
    },
    UPPERCASE: {
      textTransform: "uppercase"
    },
    LOWERCASE: {
      textTransform: "lowercase"
    },
    CODEBLOCK: {
      fontFamily: '"fira-code", "monospace"',
      fontSize: "inherit",
      background: "#ffeff0",
      fontStyle: "italic",
      lineHeight: 1.5,
      padding: "0.3rem 0.5rem",
      borderRadius: " 0.2rem"
    },
    SUPERSCRIPT: {
      verticalAlign: "super",
      fontSize: "80%"
    },
    SUBSCRIPT: {
      verticalAlign: "sub",
      fontSize: "80%"
    }
  };

  const myBlockStyleFn = contentBlock => {
    const type = contentBlock.getType();
    switch (type) {
      case "blockQuote":
        return "superFancyBlockquote";
      case "leftAlign":
        return "leftAlign";
      case "rightAlign":
        return "rightAlign";
      case "centerAlign":
        return "centerAlign";
      case "justifyAlign":
        return "justifyAlign";
      default:
        break;
    }
  };

  return (
    <div className="editor-wrapper" onClick={focusEditor}>
      <Toolbar editorState={editorState} setEditorState={setEditorState} />
      <div
        className="editor-container"
        style={{ height: "250px", overflowY: "auto" }}
      >
        <Editor
          ref={editor}
          handleKeyCommand={handleKeyCommand}
          editorState={editorState}
          customStyleMap={styleMap}
          blockStyleFn={myBlockStyleFn}
          onChange={editorState => {
            const contentState = editorState.getCurrentContent();
            console.log(convertToRaw(contentState));
            setEditorState(editorState);
          }}
        />
      </div>
    </div>
  );
};

export default DraftEditor;
