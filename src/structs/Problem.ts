import type { IoExample } from "./IoExample";
import type { LimitInfo } from "./LimitInfo";

/**
 * Problem.
 */
export class Problem {
  /**
   * Number.
   */
  public no?: number;

  /**
   * Title.
   */
  public title?: string;

  /**
   * Description.
   */
  public problem_desc?: string;

  /**
   * Input description.
   */
  public input_desc?: string;

  /**
   * Output description.
   */
  public output_desc?: string;

  /**
   * IO Examples.
   */
  public io_examples?: Array<IoExample>;

  /**
   * Limit info.
   */
  public limit_info?: LimitInfo;

  /**
   * 출처.
   */
  public reference?: string;

  /**
   * 분류.
   */
  public category?: string;
}
