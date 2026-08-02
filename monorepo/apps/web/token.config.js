import StyleDictionary from "style-dictionary";

// kebab-case 변환
StyleDictionary.registerTransform({
  name: "name/kebab",
  type: "name",
  transform: (token) =>
    token.path
      .join("-")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase(),
});

// color는 Tailwind 유틸리티로, typography는 .text-* 클래스로 생성
StyleDictionary.registerFormat({
  name: "css/tailwind-theme",
  format: ({ dictionary }) => {
    let css = "";
    const withPx = (value) =>
      typeof value === "string" && /^\d+(\.\d+)?$/.test(value)
        ? `${value}px`
        : value;

    css += "@theme {\n";
    dictionary.allTokens.forEach((token) => {
      if (token.$type === "color") {
        css += `  --color-${token.name}: ${token.$value};\n`;
      }
    });
    css += "}\n\n";

    css += "@layer components {\n";
    dictionary.allTokens.forEach((token) => {
      if (token.$type === "typography" && token.$value) {
        const typo = token.$value;
        css += `  .text-${token.name} {\n`;
        if (typo.fontSize) {
          css += `    font-size: ${withPx(typo.fontSize)};\n`;
        }
        if (typo.lineHeight) {
          css += `    line-height: ${withPx(typo.lineHeight)};\n`;
        }
        if (typo.letterSpacing) {
          css += `    letter-spacing: ${typo.letterSpacing};\n`;
        }
        if (typo.fontWeight) {
          css += `    font-weight: ${typo.fontWeight};\n`;
        }
        if (typo.fontFamily) {
          css += `    font-family: ${typo.fontFamily};\n`;
        }
        css += "  }\n";
      }
    });
    css += "}\n";

    return css;
  },
});

export default {
  source: ["src/tokens.json"],
  platforms: {
    css: {
      transforms: ["name/kebab"], // 일단 attribute/cti 제거
      buildPath: "src/",
      files: [
        {
          destination: "tokens.css",
          format: "css/tailwind-theme",
        },
      ],
    },
  },
};
