import React from 'react'
import PropTypes from 'prop-types'
import { IoChevronDownOutline } from 'react-icons/io5'
import { useTheme } from '@emotion/react'
import {
  ListboxButton,
  ListboxInput,
  ListboxList,
  ListboxOption,
  ListboxPopover,
} from '@reach/listbox'
import '@reach/listbox/styles.css'

export default function Filter({ defaultValue, options, onFilterChange }) {
  const theme = useTheme()

  return (
    <ListboxInput
      aria-labelledby="my-label"
      defaultValue="all"
      onChange={filter => onFilterChange(filter)}
      css={{
        width: '200px',
        height: '55px',
        background: `${theme.elementBackground}`,
        borderRadius: '6px',
      }}
    >
      <ListboxButton
        css={{
          display: 'flex',
          height: '100%',
          border: 'none',
          borderRadius: '6px',
          padding: '22px',
        }}
        arrow={<IoChevronDownOutline size="20px" />}
      />

      <ListboxPopover
        css={{
          marginTop: '10px',
          borderRadius: '6px',
          background: `${theme.elementBackground}`,
          cursor: 'pointer',
        }}
      >
         <ListboxList>
            <ListboxOption value="all">{defaultValue}</ListboxOption>
            {options.map(option => (
                <ListboxOption value = {option} key = {option}>{option}</ListboxOption>
            ))}
        </ListboxList>
      </ListboxPopover>
    </ListboxInput>
  )
}

Filter.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
