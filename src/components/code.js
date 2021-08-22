/**@jsx jsx */
import * as React from "react";
import { jsx, Button } from "theme-ui";
import { preToCodeBlock } from "mdx-utils";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import scope from "../scope";

const Code = (props) => {
  const [isCopied, setIsCopied] = React.useState(false);

  // Copy function
  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  const codeProps = preToCodeBlock(props);

  if (!codeProps) {
    return <pre {...props} />;
  }

  const { codeString, language } = codeProps;

  return codeProps["react-live"] ? (
    <LiveProvider code={codeString} scope={scope} theme={theme}>
      <LiveEditor />
      <LiveError />
      <LivePreview
        sx={{
          border: (theme) => `1px solid ${theme.colors.background}`,
          p: 4,
          "div :first-child": {
            mt: 0,
          },
          bg: "secondary",
          variant: "react-live",
        }}
      />
    </LiveProvider>
  ) : (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={style}
          sx={{
            p: 25,
            overflow: "scroll",
            variant: "prism-highlight",
            borderRadius: 5,
            fontFamily: "monospace",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Button
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              appearance: "none",
              display: "inline-block",
              textAlign: "center",
              lineHeight: "inherit",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: "bold",
              m: 0,
              px: 3,
              py: 2,
              border: 0,
              bg: "secondary",
              color: "text",
              cursor: "pointer",
            }}
            onClick={() => {
              copyToClipboard(codeString);
              setIsCopied(true);

              setTimeout(() => setIsCopied(false), 3000);
            }}
          >
            {isCopied ? "🎉 Copied!" : "Copy"}
          </Button>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
