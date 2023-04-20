import React, { useCallback, useEffect, useRef, useState } from 'react'
import { MenuOption } from '../../models/Menu'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import './index.css'

export interface MenuAccordionProps {
  options: MenuOption[]
}

const MenuAccordion = ({ options }: MenuAccordionProps) => {
  const [isActive, setIsActive] = useState(true)

  const elemRef = useCallback((node: HTMLDetailsElement) => {
    if (node !== null) {
      setIsActive(node.open)
    }
  }, [])

  return (
    <div className="w-full">
      {options.map((option) => (
        <details className="px-3 py-3" open key={option.label} ref={elemRef}>
          <summary className="hide-list py-3">
            <div className="flex justify-between">
              <h1>{option.label}</h1>
              <div className="grid place-content-center">
                {isActive ? (
                  <MdKeyboardArrowDown className="text-xl" />
                ) : (
                  <MdKeyboardArrowUp className="text-xl" />
                )}
              </div>
            </div>
          </summary>
          <div className="space-y-2">
            {option.choices.map((choice) => (
              <div key={choice.label}>
                <label>
                  <div className="flex space-x-2">
                    <input type="checkbox" className="accent-green-700" />
                    <p>{choice.label}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  )
}

export default MenuAccordion
