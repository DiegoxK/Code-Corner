import { CodeBlock } from "notion-types";
import { getBlockTitle } from "notion-utils";
import { useNotionContext } from "react-notion-x";
import { highlightElement } from "prismjs";
import { useEffect, useRef } from "react";
// import "prismjs/components/prism-clike.min.js";
// import "prismjs/components/prism-css-extras.min.js";
// import "prismjs/components/prism-css.min.js";
// import "prismjs/components/prism-javascript.min.js";
// import "prismjs/components/prism-js-extras.min.js";
// import "prismjs/components/prism-json.min.js";
// import "prismjs/components/prism-jsx.min.js";
// import "prismjs/components/prism-tsx.min.js";
// import "prismjs/components/prism-typescript.min.js";

export const Code: React.FC<{
  block: CodeBlock;
  defaultLanguage?: string;
  className?: string;
}> = ({ block, defaultLanguage = "typescript", className }) => {
  const { recordMap } = useNotionContext();
  const content = getBlockTitle(block, recordMap);
  const language = (
    block.properties?.language?.[0]?.[0] || defaultLanguage
  ).toLowerCase();

  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      try {
        highlightElement(codeRef.current);
      } catch (err) {
        console.warn("prismjs highlight error", err);
      }
    }
  }, [codeRef]);

  return (
    <>
      <pre className={className}>
        <code ref={codeRef} className={`language-${language}`}>
          {content}
        </code>
      </pre>
    </>
  );
};
