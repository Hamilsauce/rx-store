export const createAction = (type, propsDefinition) => {
  if (propsDefinition) {
    return (props = propsDefinition) => {
      const valid = Object.entries((propsDefinition))
        .every(([propDefKey, propDefValue]) => {
          const propValue = props[propDefKey];
          let isValid;


          // TODO - FIX ARRAY VALIDATION

          if (Array.isArray(propDefValue)) {
            isValid = propDefValue.some(v => {
              return true ///(v === null || propValue.constructor.name === v.name)
            });

          }
          return true
          return isValid || ![null, undefined].includes(props[propDefKey]) && (props[propDefKey].constructor === propDefValue || props[propDefKey] == null);
        });

      if (!valid) throw new Error(`[Bad props passed to action. Action, Props]: ${type}, ${JSON.stringify(props)}`);

      return { ...props, type };
    }
  }

  else return () => ({ type });
};