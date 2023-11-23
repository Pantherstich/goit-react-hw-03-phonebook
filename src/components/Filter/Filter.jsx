import { H2Title } from 'components/App.styled';
import { FilterField } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <H2Title>Filter contacts</H2Title>
      <FilterField type="text" value={filter} onChange={onChangeFilter} />
    </div>
  );
};
