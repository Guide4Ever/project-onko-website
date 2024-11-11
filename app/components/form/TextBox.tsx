export interface TextBoxProps {
    onChange?: (value: string) => void;
    text?: string;
    numberOfLines: number;
    placeholder?: string;
}

export default function TextBox(props: TextBoxProps) {

    const { numberOfLines, text, placeholder, onChange } = props;

    return (numberOfLines > 1) ? (
        <textarea
          placeholder={placeholder}   
          name="entry"
          rows={numberOfLines}
          required
          value={text}
          onChange={(e) => onChange?.(e.target.value)}
          className="pl-4 pr-4 py-2 focus:ring-purple-500 focus:border-purple-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 resize-none"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder} 
          name="entry"
          required
          onChange={(e) => onChange?.(e.target.value)}
          className="mr-4 pl-4 pr-32 py-2 focus:ring-purple-500 focus:border-purple-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
        />
      );
    }