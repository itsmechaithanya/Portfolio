declare module 'sheryjs' {
  export interface SheryConfig {
    [key: string]: any;
  }

  class Shery {
    constructor(config?: SheryConfig);
    static imageEffect?: (selector: string, config?: SheryConfig) => void;
    static mouseFollower?: (config?: SheryConfig) => void;
    static makeMagnet?: (selector: string, config?: SheryConfig) => void;
    static hoverWithText?: (selector: string, config?: SheryConfig) => void;
    [key: string]: any;
  }

  export default Shery;
}
