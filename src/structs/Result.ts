export interface Result {
  code: number;
  message: string;
  data: {
    id: number;
    code: string;
    state: {
      result: string;
      time: number;
      memory: number;
      answer_id: number | null;
    };
    language: string;
    date: number;
    user_id: string;
    problem_id: number;
    code_length: number;
  }[];
}
