import React, { useCallback, useEffect } from "react";
import { Chevron, Icon } from "./icons";
import "./select.css";
import cn from "classnames";

const isEnterLike = (e) => e.key === "Enter" || e.key === " ";

export const Select = ({
  onChange,
  name,
  style,
  options,
  placeholder,
  id,
  value,
  icon,
  onBlur,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIcon, setIcon] = React.useState(null);
  const [selected, setSelected] = React.useState(null);

  const onSelect = useCallback(
    (option) => {
      setIsOpen(false);
      setIcon(option.icon);
      setSelected(option.label);
      onChange({ target: { name, value: option.value } });
    },
    [name, onChange]
  );

  useEffect(() => {
    if (!value) {
      setIsOpen(false);
      setIcon(null);
      setSelected(null);
    }
  }, [value]);

  return (
    <div
      style={style}
      className="select"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsOpen(false);
        if (onBlur) onBlur(e);
      }}
    >
      <div
        tabIndex="0"
        className={cn("select-header", selected && "active", isOpen && "open")}
        onKeyDown={(e) => {
          if (isEnterLike(e)) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        role="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon icon={selectedIcon || icon} />
        <label id={name} htmlFor={name}>
          {selected ? selected : placeholder}
        </label>
        <input aria-labelledby={name} name={name} type="hidden" value={value} />
        <Chevron />
      </div>
      <div className={cn("select-options", isOpen && "open")} role={"listbox"}>
        {options.map((option, index) => (
          <div
            key={index}
            className="select-option"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => onSelect(option)}
            onKeyDown={(e) => {
              if (isEnterLike(e)) {
                e.preventDefault();
                onSelect(option);
              }
            }}
          >
            <Icon icon={option.icon} /> {option.label} <div />
          </div>
        ))}
      </div>
    </div>
  );
};
