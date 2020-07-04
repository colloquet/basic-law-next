export interface TextNode {
  id: number;
  type: string;
  text?: string;
  children?: TextNode[];
}

export interface Answer {
  id: number;
  text: string;
  correct: boolean;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}
