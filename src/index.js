import Immutable from 'immutable';

function ensureArray(x) {
  if (x == null) return [];
  return Array.isArray(x) ? x : [x];
}

function NestableRecord(defaultValues, types, name) {
  const _RecordType = Immutable.Record(defaultValues, name);

  function NestableRecordType(values) {
    if (values instanceof _RecordType) return values;

    const argumentValues = values || defaultValues;
    const newValues = {...argumentValues};

    for (let key in types) {
      const argumentValue = argumentValues[key];
      if (argumentValue == null) continue;

      const type = ensureArray(types[key]);

      let value = new type[0](argumentValue);
      for (let i = 1; i < type.length; i++) {
        value = value.map(x => new type[i](x));
      }

      newValues[key] = value;
    }

    return _RecordType(newValues);
  }

  NestableRecordType.prototype = _RecordType.prototype;
  NestableRecordType.prototype.constructor = NestableRecordType;

  return NestableRecordType;
}

export default NestableRecord;
