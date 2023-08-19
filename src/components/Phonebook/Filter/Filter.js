import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      <p>Find contacts by name:</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;

StaticRange.PropTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
};
