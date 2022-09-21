export type TextElements = "p" | "h2";

export enum TextProperties {
  Title = 'title',
  Body = 'body',
}

export type TextNode = {
  type: TextElements,
  text: string
}

// TODO - revisit this string
export type TextProps = {
  content: Record<string, TextNode | TextNode[]>
}