interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = (
  props: ButtonProps
) => {
  return(
    <button
      className="hover:bg-green-600 p-4 mt-2 bg-neutral-800 rounded-md"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
