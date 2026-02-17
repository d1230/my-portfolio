import { useState } from 'react';

import './dropdown.css';

const options = ['React', 'TypeScript', 'Vite', 'CSS'];

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelection(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-toggle"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{selection}</span>
        <span className="caret" aria-hidden="true" />
      </button>

      {isOpen && (
        <ul className="dropdown-menu" role="listbox">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                className={selection === option ? 'dropdown-item active' : 'dropdown-item'}
                role="option"
                aria-selected={selection === option}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
