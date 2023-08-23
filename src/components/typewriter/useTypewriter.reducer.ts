export type TypewriterState = {
  speed: number;
  text: string;
  count: number;
};

export type TypewriterAction =
  | { type: "COUNT" }
  | { type: "DELAY"; payload: number }
  | { type: "TYPE"; payload: string; speed: number }
  | { type: "DELETE"; payload: string; speed: number };

export const reducer = (
  state: TypewriterState,
  action: TypewriterAction
): TypewriterState => {
  switch (action.type) {
    case "TYPE":
      return {
        ...state,
        speed: action.speed,
        text: action.payload?.substring(0, state.text.length + 1),
      };
    case "DELAY":
      return {
        ...state,
        speed: action.payload,
      };
    case "DELETE":
      return {
        ...state,
        speed: action.speed,
        text: action.payload?.substring(0, state.text.length - 1),
      };
    case "COUNT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
