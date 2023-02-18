export interface Results {
  code: number;
  message: string;
  data: {
    content: {
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
    first: boolean;
    last: boolean;
    empty: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
    pageable: {
      offset: number;
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      unpaged: boolean;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
    };
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
  };
}
