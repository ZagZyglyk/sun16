import React from 'react';

const Element = (props) => {
    return (
        <>
            <tr key={props.elementKey}>
              <td>
                {props.element.assigne}
              </td>
              <td>
                {props.element.title}
              </td>
              <td>
                {props.element.status}
              </td>
            </tr>
        </>
    );
}

export default Element;
